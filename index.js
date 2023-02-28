var http = require("http");
const express = require("express");

const app = express();

app.get("/", function (req, res) {
  console.log("Hello world");
  res.send("good start");
});

app.listen(8080, function (req, res) {
  console.log("Hello");
});
