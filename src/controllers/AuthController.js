const { validationResult, body } = require("express-validator");
const { env } = require("../config/envs");
const { AUTH, DB } = require("../config/firebase");
const { User } = require("../models/User");
const { UserProfile } = require("../models/UserProfile");

const signUp = async (req, res) => {
  //validate req body
  body("email").isEmail().withMessage("Invalid email address");
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long");

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //send error
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, email, body } = req.body;

    //signup firebase
    const user = await User.signup(
      { AUTH: AUTH },
      {
        email: email,
        password: password,
      }
    );

    //create user profile
    const profile = await UserProfile.createUserProfile({
      DB: DB,
      profileEndpointPath: env.FIREBASE_DB_ENDPOINT_PROFILES,
    });

    //send success
    return res.status(200).json({
      userrecord: user,
      profiledata: profiledata,
    });
  } catch (error) {
    //send error
    return res.status(400).json({ errors: errors.array() });
  }
};





module.exports = { signUp };
