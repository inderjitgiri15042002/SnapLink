const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    originalURL: {
      type: String,
      required: [true, "This field is required"],
    },
    shortID: {
      type: String,
      required: [true, "This field is required"],
      minlength: 6,
      maxlength: 10,
      unique: [true, "Invalid ID "],
    },
    analytics: [
      {
        timestamp: {
          type: Number,
          default: () => Date.now(),
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
