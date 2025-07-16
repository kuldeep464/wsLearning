const mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },

        productDescription: {
            type: String,
        },

        productShortDescription: {
            type: String,
        },

        productImage: {
            type: String
        },

        productImageAnimation: {
            type: String
        },

        productGallery: {
            type: Object
        },

        productPrice: {
            type: String
        },

        productMRP: {
            type: String
        },

        parentCategoryName: {
            type: mongoose.Types.ObjectId,
            ref: 'category'
        },

        subCategoryName: {
            type: mongoose.Types.ObjectId,
            ref: 'subcategory'
        },

        colorName: {
            type: [mongoose.Types.ObjectId],
            ref: 'color'
        },

        sizeName: {
            type: [mongoose.Types.ObjectId],
            ref: 'size'
        },

        productStatus: Boolean,

        featuredProductCheckBox: {
            type:String,
            enum:['0','1']
        }

    },
    {
        timestamps: true
    }
);

let productModal = mongoose.model('product', productSchema);

module.exports = { productModal }

