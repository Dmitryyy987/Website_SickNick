const nodemailer = require('nodemailer');

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_SECURE = (process.env.SMTP_SECURE === 'true'); 
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const FROM_EMAIL = process.env.FROM_EMAIL || SMTP_USER;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || SMTP_USER;

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.warn('Mailer not configured - missing SMTP env vars');
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

// verify transporter (optional)
transporter.verify().then(() => {
  console.log('Nodemailer ready');
}).catch(err => {
  console.warn('Nodemailer verify failed:', err.message || err);
});

async function sendConfirmationEmail({ name, email }) {
  const subject = `Thanks — we'll connect with you soon`;
  const html = `
    <p>Hi ${escapeHtml(name || '')},</p>
    <p>Thanks for reaching out! We received your message and will connect with you shortly.</p>
    <p>— Team</p>
  `;

  const mailOptions = {
    from: FROM_EMAIL,
    to: email,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
}

async function notifyAdmin(contactData) {
  const subject = `New contact form submission: ${contactData.name || 'No name'}`;
  const html = `
    <h3>New contact submission</h3>
    <p><strong>Time:</strong> ${contactData.timestamp}</p>
    <p><strong>Name:</strong> ${escapeHtml(contactData.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(contactData.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(contactData.company)}</p>
    <p><strong>Project Type:</strong> ${escapeHtml(contactData.projectType)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(contactData.budget)}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(contactData.message).replace(/\n/g, '<br/>')}</p>
  `;

  const mailOptions = {
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
}

// tiny helper to avoid raw injection into html
function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

module.exports = { sendConfirmationEmail, notifyAdmin };