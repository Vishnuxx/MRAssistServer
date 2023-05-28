const { validationResult, body } = require("express-validator");
const { env } = require("../config/envs");
const { AUTH, DB } = require("../config/firebase");
const { User } = require("../models/User");
const { UserProfile } = require("../models/UserProfile");
const { APPEVENTS } = require("../config/appEvents");

const signUp = async (req, res) => {
  const transactions = { authenticated: false, createdProfile: false };

  const { username, email, body, password } = req.body;
  let user, profile;
  try {
    //signup firebase
    user = await User.signup(
      { AUTH: AUTH },
      {
        email: email,
        password: password,
      }
    );

    transactions.authenticated = true;

    APPEVENTS.emit("email-authentication-success", user);

    //create user profile
    profile = await UserProfile.createUserProfile(
      {
        DB: DB,
        profileEndpointPath: env.FIREBASE_DB_ENDPOINT_PROFILES,
      },
      {
        username: username,
        email: email,
      }
    );

    transactions.createdProfile = true;

    APPEVENTS.emit("email-authentication-success");

    //send success
    return res.status(200).json({
      userrecord: user,
      profiledata: profile,
    });
  } catch (error) {

   
    if(!transactions.authenticated) {
        APPEVENTS.emit("email-authentication-failed" , error);
    }
    if(!transactions.createdProfile) {
        APPEVENTS.emit("email-authentication-failed" , error);
    }
    

    //delete user
    if (user && !profile) {
      User.deleteUser( {AUTH} , {uid : user.uid});
      APPEVENTS.emit("user-delete-success");
    }

    //send error
    return res.status(400).json({
      error: error,
    });
  }
};



module.exports = { signUp };
