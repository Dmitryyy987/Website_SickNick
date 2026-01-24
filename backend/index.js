const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

/* 1️⃣ CREATE APP FIRST */
const app = express();

/* 2️⃣ MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* 3️⃣ RATE LIMITER */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

/* 4️⃣ USE LIMITER */
app.use("/api/contact", limiter);

/* 5️⃣ ROUTES */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* 6️⃣ PORT */
const PORT = process.env.PORT || 5000;

/* 7️⃣ START SERVER */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
