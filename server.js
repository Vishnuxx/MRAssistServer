const env = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const fs = require("fs");

const socket = require("socketio")


const http = require("http");
const server = http.createServer(app);

app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);


app.get("/", (req, res) => {
  res.send("hii");
});


server.listen(80, () => {
  console.log(`istening on ${JSON.stringify(server.address())} `, 80);
});