const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  // Port 587 uses STARTTLS (secure: false), port 465 uses implicit TLS (secure: true)
  secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465, 
  auth: {
    user: process.env.SMTP_USER || process.env.EMAIL_USER,
    pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
  },
  // Robust production settings
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 5000,
  socketTimeout: 20000,
  tls: {
    // Useful for Office365 or strict SMTP servers
    ciphers: "SSLv3",
    rejectUnauthorized: false // Avoid certificate errors in strict environments
  }
});

// Helper for sending with retry
const sendMailWithRetry = async (mailOptions, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.warn(`⚠️ Email sending attempt ${i + 1} failed: ${error.message}`);
      if (i === retries - 1) throw error; // Rethrow on last attempt
      // Exponential backoff
      await new Promise(res => setTimeout(res, 1500 * (i + 1)));
    }
  }
};

// Email templates
function clientMailTemplate(name) {
  return `
  <div style="font-family: Arial, Helvetica, sans-serif; background:#f5f7fb; padding:28px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:14px; overflow:hidden;">
      <tr>
        <td style="padding:24px; background:#0f172a; color:#ffffff;">
          <h1 style="margin:0; font-size:20px;">BytBrand</h1>
          <p style="margin:8px 0 0 0; font-size:13px; color:#cbd5e1;">Creative engineering studio</p>
        </td>
      </tr>
      <tr>
        <td style="padding:24px; color:#1e293b;">
          <p style="margin-top:0;">Hi ${name},</p>
          <p>Thanks for reaching out to BytBrand. We have received your inquiry and a specialist will respond within 24-48 hours.</p>
          <p style="margin-bottom:0;">Regards,<br/><strong>BytBrand Team</strong></p>
        </td>
      </tr>
    </table>
  </div>`;
}

function adminMailTemplate({ userName, userEmail, company, projectType, budget, message }) {
  return `
  <div style="font-family: Arial, Helvetica, sans-serif; background:#f5f7fb; padding:28px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:14px; overflow:hidden;">
      <tr>
        <td style="padding:24px; background:#0f172a; color:#ffffff;">
          <h1 style="margin:0; font-size:20px;">New Contact Form Submission</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:24px; color:#1e293b;">
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:8px 0;"><strong>Name:</strong></td><td>${userName}</td></tr>
            <tr><td style="padding:8px 0;"><strong>Email:</strong></td><td>${userEmail}</td></tr>
            <tr><td style="padding:8px 0;"><strong>Company:</strong></td><td>${company || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;"><strong>Project Type:</strong></td><td>${projectType || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;"><strong>Budget:</strong></td><td>${budget || "Not provided"}</td></tr>
          </table>
          <h3 style="margin:20px 0 10px;">Message:</h3>
          <p style="background:#f8fafc; padding:15px; border-radius:8px;">${message}</p>
          <hr style="border:none; border-top:1px solid #e2e8f0; margin:20px 0;">
          <p><small>Received at: ${new Date().toLocaleString()}</small></p>
        </td>
      </tr>
    </table>
  </div>`;
}

// Main email sending function
async function sendConfirmationEmail(payload) {
  const { userEmail, userName, company, projectType, budget, message } = payload;
  const authUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const authPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

  // Validate credentials
  if (!authUser || !authPass) {
    throw new Error("Email credentials are missing. Configure SMTP_USER and SMTP_PASS in .env.");
  }

  try {
    const from = `"BytBrand" <${authUser}>`;
    const adminRecipient = process.env.ADMIN_EMAILS || authUser;

    // Send both emails in parallel using retry wrapper
    const [clientResult, adminResult] = await Promise.allSettled([
      // Client confirmation email
      sendMailWithRetry({
        from,
        to: userEmail,
        subject: "We received your message - BytBrand",
        text: `Hi ${userName},\n\nThanks for contacting BytBrand. We have received your message and will get back to you within 24-48 hours.\n\nBest regards,\nBytBrand Team`,
        html: clientMailTemplate(userName),
      }),
      
      // Admin notification email
      sendMailWithRetry({
        from,
        to: adminRecipient,
        subject: `New inquiry from ${userName}`,
        text: [
          `Name: ${userName}`,
          `Email: ${userEmail}`,
          `Company: ${company || "N/A"}`,
          `Project Type: ${projectType || "N/A"}`,
          `Budget: ${budget || "N/A"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
        html: adminMailTemplate({ userName, userEmail, company, projectType, budget, message }),
      }),
    ]);

    // Log results
    const clientDelivered = clientResult.status === 'fulfilled';
    const adminDelivered = adminResult.status === 'fulfilled';

    if (clientDelivered) {
      console.log(`✅ Confirmation email sent to ${userEmail}`);
    } else {
      console.error(`❌ Failed to send confirmation email to ${userEmail}:`, clientResult.reason);
    }

    if (adminDelivered) {
      console.log(`✅ Admin notification sent`);
    } else {
      console.error(`❌ Failed to send admin notification:`, adminResult.reason);
    }

    // Treat as overall error only if we couldn't send to admin
    if (!adminDelivered && !clientDelivered) {
      throw new Error("Failed to send ANY emails (both client and admin delivery failed)");
    }

    return { 
      success: adminDelivered,
      clientDelivered,
      adminDelivered
    };

  } catch (error) {
    console.error("❌ Email service error:", error);
    throw error;
  }
}

module.exports = sendConfirmationEmail;