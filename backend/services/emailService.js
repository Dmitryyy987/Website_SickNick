const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === "true" || false, // Use false for port 587 (STARTTLS)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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

  // Validate credentials
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials are missing. Configure EMAIL_USER and EMAIL_PASS in .env");
  }

  try {
    const from = `"BytBrand" <${process.env.EMAIL_USER}>`;
    const adminRecipient = process.env.ADMIN_EMAILS || process.env.EMAIL_USER;

    // Send both emails in parallel
    const [clientResult, adminResult] = await Promise.allSettled([
      // Client confirmation email
      transporter.sendMail({
        from,
        to: userEmail,
        subject: "We received your message - BytBrand",
        text: `Hi ${userName},\n\nThanks for contacting BytBrand. We have received your message and will get back to you within 24-48 hours.\n\nBest regards,\nBytBrand Team`,
        html: clientMailTemplate(userName),
      }),
      
      // Admin notification email
      transporter.sendMail({
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
    if (clientResult.status === 'fulfilled') {
      console.log(`✅ Confirmation email sent to ${userEmail}`);
    } else {
      console.error(`❌ Failed to send confirmation email to ${userEmail}:`, clientResult.reason);
    }

    if (adminResult.status === 'fulfilled') {
      console.log(`✅ Admin notification sent`);
    } else {
      console.error(`❌ Failed to send admin notification:`, adminResult.reason);
    }

    // Return success if at least admin email was sent
    return { 
      success: adminResult.status === 'fulfilled',
      clientDelivered: clientResult.status === 'fulfilled',
      adminDelivered: adminResult.status === 'fulfilled'
    };

  } catch (error) {
    console.error("❌ Email service error:", error);
    throw error;
  }
}

module.exports = sendConfirmationEmail;