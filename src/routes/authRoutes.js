const { env } = require("../config/envs");
const { signUp } = require("../controllers/AuthController");
const { validateSignup } = require("../middlewares/validateSignup");
const express = require("express");

const router = express.Router();

router.post(env.SERVER_ROUTE_SIGNUP, validateSignup, signUp);


module.exports.authRoute = router;