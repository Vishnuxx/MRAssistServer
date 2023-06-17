const { APPEVENTS } = require("../config/appEvents");
const { AUTH } = require("../config/firebase");
const { User } = require("../models/User");

module.exports.createUser = async (req, res, next) => {
  try {
    const { username, email, body, password } = req.body;

    const user = await User.signup(
      {
        email: email,
        password: password,
      }
    );

    console.log(user)

    res.locals.uid = user.uid;
    APPEVENTS.emit("email-authentication-success");
    next()
  } catch (error) {
     APPEVENTS.emit("email-authentication-failed" , error);
    //send error
    return res.status(400).json({
      error: error,
    });
  }
};
