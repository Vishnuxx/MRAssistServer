const admin = require("firebase-admin");
const credentials = require("./firebase_service_account.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com",
});

const db = admin.firestore();

module.exports = db;