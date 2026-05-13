const express = require("express");
const app = express();

const UrlRouter = require("./routes/url.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", UrlRouter);

module.exports = app;
