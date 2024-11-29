const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use("/api", routers);

module.exports = app;
