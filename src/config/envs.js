const env = require("dotenv").config();

module.exports.env = {
  PORT,
  SERVER_ROUTE_SIGNUP,
  FIREBASE_DB_ENDPOINT_PROFILES,
  SERVER_ROUTE_USER_PROFILE,
} = process.env;
