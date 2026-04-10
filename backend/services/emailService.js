const nodemailer = require("nodemailer");

function escapeHtml(str) {
  if (typeof str !== "string") return String(str ?? "");
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT || "465"),
  secure: process.env.EMAIL_PORT !== "587", // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || process.env.SMTP_USER,
    pass: process.env.EMAIL_PASS || process.env.SMTP_PASS,
  }
});

transporter.verify()
  .then(() => console.log('✅ SMTP transporter verified and ready to send emails'))
  .catch(err => console.error('❌ SMTP verification failed:', err.message));

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
          <p style="margin-top:0;">Hi ${escapeHtml(name)},</p>
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
            <tr><td style="padding:8px 0;"><strong>Name:</strong></td><td>${escapeHtml(userName)}</td></tr>
            <tr><td style="padding:8px 0;"><strong>Email:</strong></td><td>${escapeHtml(userEmail)}</td></tr>
            <tr><td style="padding:8px 0;"><strong>Company:</strong></td><td>${escapeHtml(company || "Not provided")}</td></tr>
            <tr><td style="padding:8px 0;"><strong>Project Type:</strong></td><td>${escapeHtml(projectType || "Not provided")}</td></tr>
            <tr><td style="padding:8px 0;"><strong>Budget:</strong></td><td>${escapeHtml(budget || "Not provided")}</td></tr>
          </table>
          <h3 style="margin:20px 0 10px;">Message:</h3>
          <p style="background:#f8fafc; padding:15px; border-radius:8px; white-space:pre-wrap; word-wrap:break-word; overflow-wrap:break-word;">${escapeHtml(message)}</p>
          <hr style="border:none; border-top:1px solid #e2e8f0; margin:20px 0;">
          <p><small>Received at: ${new Date().toLocaleString()}</small></p>
        </td>
      </tr>
    </table>
  </div>`;
}

async function sendConfirmationEmail(payload) {
  const { userEmail, userName, company, projectType, budget, message } = payload;
  let authUser = process.env.EMAIL_USER || process.env.SMTP_USER;
  
  if (!authUser) {
    throw new Error("Email credentials are missing in .env");
  }

  const from = `"BytBrand" <${authUser}>`;
  const adminRecipient = process.env.ADMIN_EMAILS || authUser;

  try {
    console.log(`⏳ Sending email to Admin (${adminRecipient}) and Client (${userEmail})...`);

    const adminResult = await transporter.sendMail({
      from,
      to: adminRecipient,
      subject: `New inquiry from ${userName}`,
      html: adminMailTemplate({ userName, userEmail, company, projectType, budget, message }),
      replyTo: userEmail
    });
    console.log(`✅ Admin notification sent: ${adminResult.messageId}`);

    const clientResult = await transporter.sendMail({
      from,
      to: userEmail,
      subject: "We received your message - BytBrand",
      html: clientMailTemplate(userName),
    });
    console.log(`✅ Confirmation email sent to ${userEmail}: ${clientResult.messageId}`);

    return { success: true };
  } catch (error) {
    console.error("❌ Email service error:", error.message);
    throw error;
  }
}

module.exports = sendConfirmationEmail;