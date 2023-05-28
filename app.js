const cors = require("cors");
const csrf = require("csurf");
const cookieparser = require("cookie-parser");
const csrfMiddleware = csrf({ cookie: true });

const server = require("./src/config/server");
const { env } = require("./src/config/envs");
const { authRoute } = require("./src/routes/authRoutes");
const { userAuthenticationEvents } = require("./src/Events/UserAuthenticationEvents");
const { setupAppEvents, APPEVENTS } = require("./src/config/appEvents");
const { userProfileEvents } = require("./src/Events/UserprofileEvents");

server.use(cookieparser());
// server.use(csrfMiddleware);

// server.all("*", (req, res, next) => {
//   res.cookie("XSRF-TOKEN", req.csrfToken());
//   next();
// });

server.use(cors())

userAuthenticationEvents(APPEVENTS)
userProfileEvents(APPEVENTS)

server.get("/", (req, res) => {
  res.send("test");
});



server.use(authRoute)

