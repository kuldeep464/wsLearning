const { categoryModal } = require("../../model/categoryModel")
const { productModal } = require("../../model/productModel")


let getCategory = async (req, res) => {
    let categoryData = await categoryModal.find()
    let resObj = {
        status: 1,
        msg: "category Data Fatched",
        data: categoryData,
        staticImagePath: 'uploads/category/'
    }
    res.send(resObj)
}


let getFeaturedProduct = async (req, res) => {
    let productData = await productModal.find({productStatus:true,featuredProductCheckBox:'1'}).populate('colorName', 'colorName').populate('sizeName', 'sizeName').skip(0).limit(5)
    let resObj = {
        status: 1,
        msg: "product Data Fatched",
        data: productData,
        staticImagePath: {
            productImagePath: 'uploads/product/productImage/',
            productAnimationImagePath: 'uploads/product/productAnimationImage/',
            productGalleryPath: 'uploads/product/productGallery/',
        }
    }
    res.send(resObj)
}


module.exports={getCategory,getFeaturedProduct}