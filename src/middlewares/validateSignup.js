const { body, validationResult } = require("express-validator");
const { APPEVENTS } = require("../config/appEvents");

module.exports.validateSignup = (req, res, next) => {
  //validate req body
  body("email").isEmail().withMessage("Invalid email address");
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long");

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    APPEVENTS.emit("signup-validation-failed");
    //send error
    res.status(400).json({ errors: errors.array() });
  }

  APPEVENTS.emit("signup-validation-success");

  next();
};
