const { env } = require("../config/envs");
const { signUp } = require("../controllers/AuthController");
const { createProfile } = require("../middlewares/createProfile");
const { createUser } = require("../middlewares/createUser");
const { getProfile } = require("../middlewares/getProfile");
const { validateSignup } = require("../middlewares/validateSignup");
const express = require("express");

const router = express.Router();

//signup
router.post(env.SERVER_ROUTE_SIGNUP, validateSignup, createUser , createProfile , getProfile, (req , res)=>{
    const profile = res.locals.profile;
    console.log("profile" , profile)
    res.status(200).json(profile)
});


module.exports.authRoute = router;