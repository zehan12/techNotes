const express = require("express");
const cookieParser = require("cookie-parser");

const { logger } = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// middlewares
app.use(logger);
app.use(express.json());
app.use(cookieParser());

app.get("^/$|/index(.html)?", (req, res) => {
  res.send("<body style='background-color:hotpink'><h1>Hello From Backend</h1></body>");
});

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.send("<body><h1>PAGE NOT FOUND</h1></body>");
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 NOT FOUND");
  }
});

app.use(errorHandler);

module.exports = app;
