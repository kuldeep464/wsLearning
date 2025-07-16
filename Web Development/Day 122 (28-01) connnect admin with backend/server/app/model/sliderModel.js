const { default: mongoose } = require("mongoose");



let sliderSchema = new mongoose.Schema(
  {
    sliderName: {
      type: String,
      required: true,
      unique: true
    },
    sliderHeading: String,
    sliderSubHeading: String,
    sliderImage: String,
    sliderStatus: Boolean

  },
  {
    timestamps: true
  }
);

let sliderModal = mongoose.model('slider', sliderSchema);

module.exports = { sliderModal }

