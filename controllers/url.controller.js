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

async function redirectToOriginalUrl(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Id is required",
      });
    }

    const Url = await UrlModel.findOneAndUpdate(
      { shortID: id },
      {
        $push: {
          analytics: {
            timestamps: Date.now(),
          },
        },
      },
    );

    res.redirect(Url.originalURL);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      err: err.stack,
    });
  }
}

async function getUrlAnalytics(req, res) {
  try {
    const { id } = req.params;

    const urlData = await UrlModel.findOne({ shortId: id });

    if (!urlData) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Analytics fetched successfully",
      totalClicks: urlData.analytics.length,
      history: urlData.analytics,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
}

module.exports = { createShortUrl, redirectToOriginalUrl, getUrlAnalytics };
