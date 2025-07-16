const { productModal } = require("../../model/productModel")

let productDetails=async(req,res)=>{
    let {id}=req.params
    let productData = await productModal.findOne({_id:id}).populate('colorName', 'colorName').populate('sizeName', 'sizeName')
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

module.exports={productDetails}