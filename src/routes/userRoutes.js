
const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/verifyToken");
const { env } = require("../config/envs");

const { APPEVENTS } = require("../config/appEvents");
const { getProfile } = require("../controllers/getProfile");

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
