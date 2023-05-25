const express = require("express");
const cors = require("cors");
const env = require("dotenv").config()
const csrf = require("csurf");
const cookieparser = require("cookie-parser");

const app = express();
const admin = require("firebase-admin");
const credentials = require("./firebase_service_account.json");
const bodyParser = require("body-parser");

const csrfMiddleware = csrf({ cookie: true });

app.use(bodyParser.json());
app.use(cookieparser());
app.use(csrfMiddleware);

app.all("*" , (req , res , next) => {
  res.cookie("XSRF-TOKEN" , req.csrfToken());
  next();
})

app.get("/" , (req , res)=>{
  res.send("test");
})



app.listen(process.env.PORT , () => console.log("The server is running at PORT " , process.env.PORT));
