const mongoose = require("mongoose");

let categorySchema = new mongoose.Schema(
  {
    catName: {
      type: String,
      required: true,
      unique: true
    },
    catImage: String,
    catDesc: String,
    catStatus: Boolean

  },
  {
    timestamps: true
  }
);

let categoryModal = mongoose.model('category', categorySchema);

module.exports = { categoryModal }

