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
    throw new Error(
      "Firebase service account not found. Set FIREBASE_SERVICE_ACCOUNT_JSON or FIREBASE_SERVICE_ACCOUNT_PATH."
    );
  }

  return JSON.parse(fs.readFileSync(accountPath, "utf-8"));
}

if (!admin.apps.length) {
  const serviceAccount = getServiceAccount();

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin.firestore();
