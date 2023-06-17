const { APPEVENTS } = require("../config/appEvents");
const { env } = require("../config/envs");
const { createProfile } = require("../controllers/createProfile");
const { createUser } = require("../controllers/createUser");

const {getProfile } = require("../controllers/getProfile")



const { validateSignup } = require("../middlewares/validateSignup");
const express = require("express");

const router = express.Router();

//signup
router.post(env.SERVER_ROUTE_SIGNUP, validateSignup, createUser , createProfile , getProfile , (req , res)=>{
    const profile = res.locals.profile;
    APPEVENTS.emit("user-signup-complete");
    res.status(200).json(profile)
});


module.exports.authRoute = router;