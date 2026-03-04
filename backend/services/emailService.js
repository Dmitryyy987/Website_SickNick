const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  host: process.env.EMAIL_HOST || undefined,
  port: Number(process.env.EMAIL_PORT) || undefined,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

let verifyPromise;
function verifyTransporter() {
  if (!verifyPromise) {
    verifyPromise = transporter.verify().catch((error) => {
      verifyPromise = null;
      throw error;
    });
  }
  return verifyPromise;
}

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
          <p>Thanks for reaching out to BytBrand. We have received your inquiry and a specialist will respond shortly.</p>
          <p style="margin-bottom:0;">Regards,<br/><strong>BytBrand Team</strong></p>
        </td>
      </tr>
    </table>
  </div>`;
}

async function sendConfirmationEmail(payload) {
  const { userEmail, userName, company, projectType, budget, message } = payload;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials are missing. Configure EMAIL_USER and EMAIL_PASS.");
  }

  await verifyTransporter();

  const from = `"BytBrand" <${process.env.EMAIL_USER}>`;
  const adminRecipient = process.env.BRAND_NOTIFICATION_EMAIL || process.env.EMAIL_USER;

  const clientMail = transporter.sendMail({
    from,
    to: userEmail,
    subject: "We received your message - BytBrand",
    text: `Hi ${userName},\n\nThanks for contacting BytBrand. We have received your message and will get back to you shortly.\n\nBytBrand Team`,
    html: clientMailTemplate(userName),
  });

  const adminMail = transporter.sendMail({
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
  });

  await Promise.all([clientMail, adminMail]);
}

module.exports = sendConfirmationEmail;
