"use strict";
// require("dotenv").load();

const morgan = require("morgan");
const express = require("express");
const CONSTANTS = require("./app/constants.js");
const router = require("./app/router.js");
const app = express();

app.set("views", "./views");
app.set("view engine", "jade");

app.use(router);
app.use(morgan("combined"));
app.listen(CONSTANTS.PORT);
