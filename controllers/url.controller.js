const { nanoid } = require("nanoid");

const UrlModel = require("../models/url.model");

async function createShortUrl(req, res) {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "This field is required",
      });
    }

    const generatedShortId = nanoid(6);

    if (!generatedShortId) {
      return res.status(404).json({
        success: false,
        message: "ShortID is Not Generated Successfully",
      });
    }

    const newURL = await UrlModel.create({
      originalURL: url,
      shortID: generatedShortId,
      analytics: [],
    });

    res.status(201).json({
      success: true,
      message: "URL created Successfully",
      url: newURL,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      err: err.stack,
    });
  }
}

module.exports = { createShortUrl };
