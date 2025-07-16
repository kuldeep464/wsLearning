const mongoose = require("mongoose");

let subCategorySchema = new mongoose.Schema(
  {
    subCategoryName: {
      type: String,
      required: true,
    },
    parentCategoryName:{
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'category' 
    },
    subCategoryImage: String,
    subCategoryDescription: String,
    status: Boolean

  },
  {
    timestamps: true
  }
);

let subCategoryModal = mongoose.model('subcategory', subCategorySchema);

module.exports = { subCategoryModal }

