const { orderModel } = require("../../model/orderModel")

let viewOrder = async (req, res) => {
    let orders = await orderModel.find()
    let staticPath={
        productImage:"uploads/product/productImage/",
        productGallery:"uploads/product/productGallery/",
        productAnimationImage:"uploads/product/productAnimationImage"
    }
    try{
        res.status(200).json({status:1,data:orders, staticPath})
    }
    catch(error){
        res.status(500).json({status:0 , error})
    }
    
}

module.exports = { viewOrder }