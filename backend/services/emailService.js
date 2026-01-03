const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendConfirmationEmail(userEmail, userName) {
  await transporter.sendMail({
    from: `"BYT Brand" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: "We received your message – BYT Brand",
    html: `
      <h2>Hello ${userName},</h2>
      <p>Thank you for contacting <strong>BYT Brand</strong>.</p>
      <p>We have received your message and our team will get back to you shortly.</p>
      <br/>
      <p>Regards,<br/><strong>BYT Brand Team</strong></p>
    `,
  });
}

module.exports = sendConfirmationEmail;