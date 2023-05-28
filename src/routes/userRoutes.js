
const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/verifyToken");
const { env } = require("../config/envs");
const { getProfile } = require("../middlewares/getProfile");

//get profile
router.get(env.SERVER_ROUTE_USER_PROFILE, verifyToken, getProfile);

module.exports.userRoute = router;
