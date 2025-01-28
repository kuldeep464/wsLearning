const { default: mongoose } = require("mongoose");



let enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  message:String
  
});

let enquiryModal = mongoose.model('enquiry', enquirySchema);

module.exports={enquiryModal}

