const express = require("express");
const router = express.Router();
const { createShortUrl, redirectToOriginalUrl } = require("../controllers/url.controller");

router.post("/url", createShortUrl);

router.get("/:id", redirectToOriginalUrl)

module.exports = router;
