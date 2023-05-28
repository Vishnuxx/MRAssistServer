const { APPEVENTS } = require("../config/appEvents");
const { env } = require("../config/envs");
const { AUTH, DB } = require("../config/firebase")


module.exports.getProfile = async (req, res, next) => {
   try {
     const uid = res.locals.user.uid;
     const document = await DB.collection(env.FIREBASE_DB_ENDPOINT_PROFILES).doc(uid).get();
     if(document.exists) {
        res.locals.profile = document.data();
        APPEVENTS.emit("user-profile-fetched-success", document.data());
        next();
        return
     }

     APPEVENTS.emit("user-profile-doesnt-exist", uid);
     res.status(400).json({error: "Profile doesnt exists"})
     
   } catch (error) {
    APPEVENTS.emit("user-profile-fetched-failed" , error);
     res.status(400).json({
       error: error,
     });
   }
}