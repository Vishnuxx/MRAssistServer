const express = require("express");
const { env } = require("./envs");

const app = express();


app.use(express.json());

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});

module.exports = app;
