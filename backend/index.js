const express = require("express");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.set("trust proxy", 1); // Trust first proxy

// CORS configuration
const allowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

// Add default allowed origins if none are set in .env
const defaultOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:5000",
  "https://bytbrand.vercel.app",
  "https://website-sicknick-backend.onrender.com"
];

const finalAllowedOrigins = allowedOrigins.length > 0 ? allowedOrigins : defaultOrigins;

// CORS middleware - must be first
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
      
      console.log(`⚠️ Blocked CORS origin: ${origin}`);
      return callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
    optionsSuccessStatus: 200
  })
);

// Body parsing middleware with size limits
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

// Rate limiting for contact form - APPLY THIS BEFORE ROUTES
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 40, // Limit each IP to 40 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: "Too many contact requests. Please wait a few minutes and try again.",
  },
  keyGenerator: (req) => {
    const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || 
               req.socket.remoteAddress || 
               req.ip;
    return ip;
  },
  skip: (req) => req.path === '/api/health' || req.path === '/'
});

// Public routes (no rate limiting)
app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "BytBrand API is running",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
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
    environment: process.env.NODE_ENV || "development",
    memory: process.memoryUsage()
  });
});

// ✅ IMPORTANT: Apply rate limiting to specific route BEFORE mounting
app.use("/api/contact", contactLimiter);

// Mount contact routes
app.use("/api/contact", contactRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
  console.log(`❌ 404: ${req.method} ${req.path}`);
  res.status(404).json({
    success: false,
    error: `Route ${req.method} ${req.path} not found`,
    availableEndpoints: {
      GET: ["/", "/api/health"],
      POST: ["/api/contact"]
    }
  });
});

// Error handling middleware
app.use((err, req, res, _next) => {
  // Handle CORS errors
  if (err?.message === "Origin not allowed by CORS") {
    return res.status(403).json({ 
      success: false,
      error: "CORS error: Origin not allowed",
      allowedOrigins: finalAllowedOrigins
    });
  }
  
  // Handle JSON parsing errors
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ 
      success: false,
      error: "Invalid JSON payload. Please check your request format." 
    });
  }
  
  // Log all other errors
  console.error("❌ Unhandled server error:", err);
  
  // Don't expose error details in production
  const errorMessage = process.env.NODE_ENV === "production" 
    ? "Internal server error" 
    : err.message || "Internal server error";
  
  return res.status(500).json({ 
    success: false,
    error: errorMessage
  });
});

// Start server
const PORT = Number(process.env.PORT) || 5000;
const server = app.listen(PORT, () => {
  console.log("\n" + "=".repeat(50));
  console.log(`✅ Server is running!`);
  console.log("=".repeat(50));
  console.log(`📡 Port: ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🔗 Allowed CORS origins:`, finalAllowedOrigins);
  console.log(`\n📝 Available endpoints:`);
  console.log(`   - GET  http://localhost:${PORT}/`);
  console.log(`   - GET  http://localhost:${PORT}/api/health`);
  console.log(`   - POST http://localhost:${PORT}/api/contact`);
  console.log("=".repeat(50) + "\n");
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('📥 SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('✅ HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('📥 SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('✅ HTTP server closed');
    process.exit(0);
  });
});

module.exports = app;