const { default: mongoose } = require("mongoose");



let sizeSchema = new mongoose.Schema(
    {
  sizeName: {
    type:String,
    required:true,
    unique:true
  },
  sizeStatus:Boolean
  
},
{
    timestamps:true
}
);

let sizeModal = mongoose.model('size', sizeSchema);

module.exports={sizeModal}

