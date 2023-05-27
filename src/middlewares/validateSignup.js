const { body, validationResult } = require("express-validator");


module.exports.validateSignup = (req , res , next) => {
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

  next();
}