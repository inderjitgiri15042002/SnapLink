const express = require("express");
const router = express.Router();
const {
  createShortUrl,
  redirectToOriginalUrl,
  getUrlAnalytics,
} = require("../controllers/url.controller");

router.post("/url", createShortUrl);

router.get("/:id", redirectToOriginalUrl);

router.get("/url/analytics/:shortId", getUrlAnalytics);

module.exports = router;
