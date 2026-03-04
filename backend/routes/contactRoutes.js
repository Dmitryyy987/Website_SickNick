const express = require("express");
const { body, matchedData, validationResult } = require("express-validator");

const db = require("../config/firebase");
const sendConfirmationEmail = require("../services/emailService");

const router = express.Router();

router.post(
  "/contact",
  [
    body("name")
      .trim()
      .isLength({ min: 2, max: 80 })
      .withMessage("Name must be between 2 and 80 characters."),
    body("email").trim().isEmail().withMessage("Please enter a valid email address."),
    body("message")
      .trim()
      .isLength({ min: 10, max: 5000 })
      .withMessage("Message must be between 10 and 5000 characters."),
    body("company").optional().trim().isLength({ max: 120 }),
    body("projectType").optional().trim().isLength({ max: 80 }),
    body("budget").optional().trim().isLength({ max: 60 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const data = matchedData(req, {
        includeOptionals: true,
        locations: ["body"],
      });

      await db.collection("contacts").add({
        ...data,
        createdAt: new Date().toISOString(),
      });

      let emailDelivered = true;
      try {
        await sendConfirmationEmail({
          userEmail: data.email,
          userName: data.name,
          company: data.company,
          projectType: data.projectType,
          budget: data.budget,
          message: data.message,
        });
      } catch (emailError) {
        emailDelivered = false;
        console.error("Email delivery error:", emailError);
      }

      return res.status(200).json({
        message: "Message received successfully.",
        emailDelivered,
      });
    } catch (error) {
      console.error("Contact route error:", error);
      return res.status(500).json({
        error: "Could not process your request right now. Please try again later.",
      });
    }
  }
);

module.exports = router;
