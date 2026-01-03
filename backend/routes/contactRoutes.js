const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const db = require("../config/firebase");
const sendConfirmationEmail = require("../services/emailService");

router.post(
  "/contact",
  [
    body("name").trim().notEmpty(),
    body("email").isEmail(),
    body("message").trim().isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const data = req.body;

      await db.collection("contacts").add({
        ...data,
        createdAt: new Date(),
      });

      await sendConfirmationEmail(data.email, data.name);

      res.status(200).json({ message: "Contact saved successfully" });
    } catch (error) {
      console.error("❌ Firebase Error:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

module.exports = router;
