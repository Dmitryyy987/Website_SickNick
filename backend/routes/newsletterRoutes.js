const express = require("express");
const { body, matchedData, validationResult } = require("express-validator");
const db = require("../config/firebase");

const router = express.Router();

// POST /api/newsletter
router.post(
  "/",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .normalizeEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    try {
      const data = matchedData(req, {
        includeOptionals: true,
        locations: ["body"],
      });

      const emailKey = String(data.email || "").toLowerCase();
      if (!emailKey) {
        return res.status(400).json({
          success: false,
          error: "Email is required.",
        });
      }

      await db.collection("newsletterSubscribers").doc(emailKey).set(
        {
          email: emailKey,
          source: "website-footer",
          status: "subscribed",
          updatedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        },
        { merge: true }
      );

      return res.status(200).json({
        success: true,
        message: "Subscribed successfully.",
      });
    } catch (error) {
      console.error("❌ Newsletter route error:", error);
      return res.status(500).json({
        success: false,
        error: "Could not process your request right now. Please try again later.",
      });
    }
  }
);

module.exports = router;
