const mongoose = require("mongoose");

let storySchema = new mongoose.Schema(
  {
    storyName: {
      type: String,
    },
    storyImage: String,
    storyBanner: String,
    storyDescription:String,
    storyStatus: Boolean

  },
  {
    timestamps: true
  }
);

let storyModel = mongoose.model('story', storySchema);

module.exports = { storyModel }

