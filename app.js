const express = require("express");
const app = express();

const { createShortUrl } = require("./routes/url.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", createShortUrl);

module.exports = app;
