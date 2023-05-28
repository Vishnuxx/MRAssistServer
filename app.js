const cors = require("cors");
const csrf = require("csurf");
const cookieparser = require("cookie-parser");
const csrfMiddleware = csrf({ cookie: true });

const server = require("./src/config/server");
const { env } = require("./src/config/envs");
const { authRoute } = require("./src/routes/authRoutes");

server.use(cookieparser());
// server.use(csrfMiddleware);

// server.all("*", (req, res, next) => {
//   res.cookie("XSRF-TOKEN", req.csrfToken());
//   next();
// });

server.use(cors())

server.get("/", (req, res) => {
  res.send("test");
});



server.use(authRoute)

