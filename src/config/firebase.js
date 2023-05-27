const admin = require("firebase-admin");
const credentials = require("./firebase_service_account.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});



module.exports = {
  DB :  admin.firestore(),
  AUTH : admin.auth()
};