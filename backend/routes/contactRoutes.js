const express = require("express");
const { body, matchedData, validationResult } = require("express-validator");
const db = require("../config/firebase");
const sendConfirmationEmail = require("../services/emailService");

const router = express.Router();

// POST /api/contact
router.post(
  "/",
  [
    body("name")
      .trim()
      .isLength({ min: 2, max: 80 })
      .withMessage("Name must be between 2 and 80 characters."),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email address."),
    body("message")
      .trim()
      .isLength({ min: 10, max: 5000 })
      .withMessage("Message must be between 10 and 5000 characters."),
    body("company")
      .optional()
      .trim()
      .isLength({ max: 120 })
      .withMessage("Company name must be less than 120 characters."),
    body("projectType")
      .optional()
      .trim()
      .isLength({ max: 80 })
      .withMessage("Project type must be less than 80 characters."),
    body("budget")
      .optional()
      .trim()
      .isLength({ max: 60 })
      .withMessage("Budget must be less than 60 characters."),
  ],
  async (req, res) => {
    console.log("📬 Contact form submission received:", req.body);

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("❌ Validation errors:", errors.array());
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    try {
      // Get validated data
      const data = matchedData(req, {
        includeOptionals: true,
        locations: ["body"],
      });

      console.log("✅ Validated data:", data);

      // Clean data for Firebase (remove undefined values)
      const firebaseData = Object.fromEntries(
        Object.entries(data).filter(([_, v]) => v !== undefined)
      );

      // Save to Firebase
      let docRef;
      try {
        docRef = await db.collection("contacts").add({
          ...firebaseData,
          createdAt: new Date().toISOString(),
          status: "new"
        });
        console.log(`✅ Contact saved to Firebase with ID: ${docRef.id}`);
      } catch (firebaseError) {
        console.error("❌ Firebase error:", firebaseError);
        // Continue even if Firebase fails - we still want to try sending email
      }

      // Send confirmation email and wait for completion
      let emailDelivered = false;
      try {
        const emailResult = await sendConfirmationEmail({
          userEmail: data.email,
          userName: data.name,
          company: data.company,
          projectType: data.projectType,
          budget: data.budget,
          message: data.message,
        });
        emailDelivered = emailResult.success;
      } catch (emailError) {
        console.error("❌ Email delivery error:", emailError.message);
        return res.status(500).json({
          success: false,
          error: "Data saved, but failed to send confirmation email. Please reach out directly."
        });
      }

      // Return success response after email is sent
      return res.status(200).json({
        success: true,
        message: "Message received successfully. We'll get back to you soon!",
        emailDelivered: true,
        id: docRef?.id || null
      });

    } catch (error) {
      console.error("❌ Contact route error:", error);
      return res.status(500).json({
        success: false,
        error: "Could not process your request right now. Please try again later.",
      });
    }
  }
);

// Health check for this route
router.get("/health", (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: "Contact route is working",
    timestamp: new Date().toISOString()
  });
});

module.exports = router;