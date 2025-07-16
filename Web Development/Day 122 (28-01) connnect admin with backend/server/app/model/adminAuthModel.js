const mongoose = require("mongoose");

let adminAuthSchema = new mongoose.Schema(
  {
    adminUsername: {
      type: String,
      required: true,
      unique: true
    },
    adminPassword: {
        type: String,
        required: true,
        unique: true
      },

  },
  {
    timestamps: true
  }
);

let adminAuthModel = mongoose.model('admin', adminAuthSchema);

module.exports = { adminAuthModel }

