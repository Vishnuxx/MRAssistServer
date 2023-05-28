const env = require("dotenv").config();

module.exports.env = { PORT,
    SERVER_ROUTE_SIGNUP,
     FIREBASE_DB_ENDPOINT_PROFILES } = process.env;
