const { APPEVENTS } = require("../config/appEvents");
const { User } = require("../models/User");
const { UserProfile } = require("../models/UserProfile");

module.exports.createProfile = async (req, res, next) => {
  let user;
  try {
    uid = res.locals.uid
    const { username, email, body, password } = req.body;

    const profile = await UserProfile.createUserProfile({
       uid: uid,
       username: username,
       email: email,
     });
     
    APPEVENTS.emit("user-profile-create-success");
    
    next();
  } catch (error) {
    if(user) {
        User.deleteUser({uid : uid})
    }
    APPEVENTS.emit("user-profile-create-failed");
    //send error
    res.status(400).json({
      error: error,
    });
  }
};
