const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.set("trust proxy", 1);

const allowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 40,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many contact requests. Please wait a few minutes and try again.",
  },
});

app.get("/", (_, res) => {
  res.status(200).send("BytBrand API is running");
});

app.get("/api/health", (_, res) => {
  res.status(200).json({
    status: "ok",
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/contact", contactLimiter);
app.use("/api", contactRoutes);

app.use((err, _req, res, _next) => {
  if (err?.message === "Origin not allowed by CORS") {
    return res.status(403).json({ error: err.message });
  }
  console.error("Unhandled server error:", err);
  return res.status(500).json({ error: "Internal server error" });
});

const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
