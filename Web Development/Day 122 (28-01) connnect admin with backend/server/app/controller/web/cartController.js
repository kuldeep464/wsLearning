const { cartModel } = require("../../model/cartModel")

let addToCart = async (req, res) => {
    let product = req.body.product
    let quantity = req.body.quantity
    let colorId = req.body.colorId
    let sizeId = req.body.sizeId
    let user = req.user

    let cartData = await cartModel.find({ product, colorId, sizeId, user })
    if (cartData.length > 0) {
        let cartId = cartData[0]._id
        await cartModel.updateOne({
            _id: cartId,
        },
            {
                quantity: cartData[0].quantity + 1
            })
        res.send({
            status: 1,
            msg: 'Product Updated To Cart',

        })
    }
    else {
        let cartObj = {
            product,
            quantity,
            colorId,
            sizeId,
            user
        }
        let cartData = new cartModel(cartObj)
        await cartData.save()
        res.send({
            status: 1,
            msg: 'Product Added To Cart'
        })
    }
}
let getCart = async (req, res) => {
    let user = req.user
    try {
        let cartData = await cartModel.find({ user: user }).populate('colorId', 'colorName').populate('sizeId', 'sizeName').populate('product')
        res.send({
            status: 1,
            msg: 'Cart Data fetched',
            staticPath: 'uploads/product/productImage/',
            data: cartData
        })

    }
    catch (error) {
        res.send({
            status: 0,
            msg: 'No Data Found'
        })
    }
}
let deleteCart = async (req, res) => {
    let id = req.params.id
    let getDelData = await cartModel.findOne({ _id: id })
    try {
        let deleteItem = await cartModel.deleteOne({ _id: id })
        try {
            res.send({
                status: 1,
                msg: "item removed from cart",
            })
        }
        catch (error) {
            res.send({
                status: 0,
                msg: "Something Went Wrong...!",
            })
        }
    }
    catch (error) {
        res.send({
            status: 0,
            msg: "Please Try again later..."
        })
    }
}
let changeQty=async (req,res)=>{
    let id=req.params.id
    let quantity=req.body.quantity
    let updateQty=await cartModel.updateOne({_id:id},{
        quantity
    })
    if (updateQty){
        res.send({
            status:1,
            msg:'Quantity Updated'
        })
    }
    else{
        res.send({
            status:0,
            msg:'Quantity Not Updated..'
        })
    }
}
module.exports = { addToCart, getCart, deleteCart,changeQty }