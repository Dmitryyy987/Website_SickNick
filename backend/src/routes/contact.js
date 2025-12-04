const express = require('express');
const { body, validationResult } = require('express-validator');
const { appendContactToExcel } = require('../utils/excel');
const { sendConfirmationEmail, notifyAdmin } = require('../utils/mailer');

const router = express.Router();

/**
 * POST /api/contact
 * body: { name, email, company, projectType, budget, message }
 */
router.post(
  '/',
  // validation
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
    // optional fields: company, projectType, budget
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, company = '', projectType = '', budget = '', message } = req.body;

    const timestamp = new Date().toISOString();

    const contactRow = {
      timestamp,
      name,
      email,
      company,
      projectType,
      budget,
      message,
    };

    try {
      // 1) Append to Excel
      await appendContactToExcel(contactRow);

      // 2) Send user confirmation email
      await sendConfirmationEmail({ name, email });

      // 3) Notify admin (optional: with full details)
      await notifyAdmin({ ...contactRow });

      return res.json({ ok: true, message: 'Submitted successfully' });
    } catch (err) {
      console.error('Contact POST error:', err);
      return res.status(500).json({ ok: false, error: 'Server error' });
    }
  }
);

module.exports = router;
