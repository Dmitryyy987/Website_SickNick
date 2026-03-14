const fs = require("fs");
const path = require("path");
const admin = require("firebase-admin");

function getServiceAccount() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  }

  const accountPath =
    process.env.FIREBASE_SERVICE_ACCOUNT_PATH ||
    path.join(__dirname, "..", "firebaseServiceAccount.json");

  if (!fs.existsSync(accountPath)) {
    console.warn("⚠️ Firebase service account not found. Firebase will not be available.");
    return null;
  }

  return JSON.parse(fs.readFileSync(accountPath, "utf-8"));
}

let db = null;

try {
  if (!admin.apps.length) {
    const serviceAccount = getServiceAccount();
    
    if (serviceAccount) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      db = admin.firestore();
      console.log("✅ Firebase initialized successfully");
    } else {
      console.warn("⚠️ Firebase not initialized - service account missing");
    }
  } else {
    db = admin.firestore();
  }
} catch (error) {
  console.error("❌ Firebase initialization error:", error.message);
}

// Export a mock db if Firebase isn't available
if (!db) {
  console.warn("⚠️ Using mock Firestore (no data will be saved)");
  db = {
    collection: () => ({
      add: async (data) => {
        console.log("📝 MOCK: Would save to Firebase:", data);
        return { id: "mock-" + Date.now() };
      }
    })
  };
}

module.exports = db;