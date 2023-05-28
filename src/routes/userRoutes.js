
const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/verifyToken");
const { env } = require("../config/envs");
const { getProfile } = require("../middlewares/getProfile");
const { APPEVENTS } = require("../config/appEvents");

//get profile
router.get(
  env.SERVER_ROUTE_USER_PROFILE,
  verifyToken,
  getProfile,
  (req, res) => {
    const profile = res.locals.profile;
    APPEVENTS.emit("user-profile-fetch-complete");
    res.status(200).json(profile);
  }
);

module.exports.userRoute = router;
