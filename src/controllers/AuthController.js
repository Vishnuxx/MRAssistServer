const { validationResult, body } = require("express-validator");
const { env } = require("../config/envs");
const { AUTH, DB } = require("../config/firebase");
const { User } = require("../models/User");
const { UserProfile } = require("../models/UserProfile");

const signUp = async (req, res) => {
  const steps = {authenticated: false , createdProfile: false}
  try {
    const { username, email, body , password} = req.body;

    //signup firebase
    const user = await User.signup(
      { AUTH: AUTH },
      {
        email: email,
        password: password,
      }
    );

    steps.authenticated = true;

    //create user profile
    const profile = await UserProfile.createUserProfile({
      DB: DB,
      profileEndpointPath: env.FIREBASE_DB_ENDPOINT_PROFILES,
    },
    {
        username: username,
        email: email
    });

    steps.createdProfile = true

    //send success
    return res.status(200).json({
      userrecord: user,
      profiledata: profiledata,
    });
  } catch (error) {
    //send error
    
    return res.status(400).json({
        error : "error"
    });
  }
};





module.exports = { signUp };
