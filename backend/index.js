const express = require("express");
const cors = require("cors");
const { rateLimit, ipKeyGenerator } = require("express-rate-limit");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.set("trust proxy", 1);

// CORS configuration
const allowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

// Add default allowed origins if none are set in .env
const defaultOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://bytbrand.vercel.app",
  "https://website-sicknick-backend.onrender.com"
];

const finalAllowedOrigins = allowedOrigins.length > 0 ? allowedOrigins : defaultOrigins;

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, Postman)
      if (!origin) {
        return callback(null, true);
      }
      
      if (finalAllowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      
      console.log(`Blocked CORS origin: ${origin}`); // For debugging
      return callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
    optionsSuccessStatus: 200
  })
);

// Body parsing middleware with size limits
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 40, // Limit each IP to 40 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    error: "Too many contact requests. Please wait a few minutes and try again.",
  },
  keyGenerator: (req) => {
    // Get the IP address, considering proxy headers
    const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress;
    
    // Use ipKeyGenerator to handle IPv6 subnet masking properly
    // This prevents IPv6 users from bypassing the rate limit
    return ipKeyGenerator(ip);
  }
});

// Public routes
app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "BytBrand API is running",
    version: "1.0.0",
    endpoints: {
      health: "GET /api/health",
      contact: "POST /api/contact"
    }
  });
});

app.get("/api/health", (_, res) => {
  res.status(200).json({
    success: true,
    status: "ok",
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

// Apply rate limiting to contact routes
app.use("/api/contact", contactLimiter);

// Mount contact routes
app.use("/api", contactRoutes); // This handles /api/contact

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.method} ${req.path} not found`
  });
});

// Error handling middleware
app.use((err, _req, res, _next) => {
  if (err?.message === "Origin not allowed by CORS") {
    return res.status(403).json({ 
      success: false,
      error: "CORS error: Origin not allowed" 
    });
  }
  
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ 
      success: false,
      error: "Invalid JSON payload" 
    });
  }
  
  console.error("Unhandled server error:", err);
  return res.status(500).json({ 
    success: false,
    error: "Internal server error" 
  });
});

// Start server
const PORT = Number(process.env.PORT) || 5000;
const server = app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🔗 Allowed CORS origins:`, finalAllowedOrigins);
  console.log(`📝 API endpoints:`);
  console.log(`   - GET  /`);
  console.log(`   - GET  /api/health`);
  console.log(`   - POST /api/contact`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

module.exports = app; // For testing purposes