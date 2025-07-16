const { cartModel } = require("../../model/cartModel")
const { orderModel } = require("../../model/orderModel")
const Razorpay = require("razorpay")
let crypto=require("crypto")

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAYKEYID,
    key_secret: process.env.RAZORPAYKEYSECRET
})

let saveOrder = async (req, res) => {
    let orderSave = {
        shippingDetails: req.body.shippingDetails,
        orderItems: req.body.orderItems,
        paymentMethod: req.body.paymentMethod,
        shippingCharges: req.body.shippingCharge,
        orderQty: req.body.orderQty,
        orderAmount: req.body.orderAmount,
        orderUser: req.user
    }
    if (req.body.paymentMethod == 'cod') {
        orderSave['orderStatus'] = 'processing'
        try {
            let order = new orderModel(orderSave)
            let savedOrder = await order.save()
            let deleteCart = await cartModel.deleteMany({ user: req.user })
            res.status(200).json({ status: 1, msg: 'order placed successfully' , paymentMethod:"cod" })
        }
        catch (error) {
            res.status(500).json({ status: 0, msg: 'something went wrong !' })
        }
    }
    else {
        orderSave['paymentStatus'] = 'failed'
        orderSave['orderStatus'] = 'cancelled'
        try {
            let order = new orderModel(orderSave)
            let savedOrder = await order.save()
            let options = {
                amount: savedOrder.orderAmount * 100,
                currency: "INR",
                receipt: savedOrder._id
            }
            const razorpayOrder = await razorpayInstance.orders.create(options)
            let updateOrderId = await orderModel.updateOne({ _id: savedOrder._id }, { razorpayOrderId: razorpayOrder.id , paymentStatus:"pending"})
            res.status(200).json({ status: 1, razorpayOrder,paymentMethod:"online" })
        }
        catch (error) {
            res.status(500).json({ status: 0, msg: 'something went wrong !' })
        }


    }
}

let verifyOrder=async (req,res)=>{
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body
    const key_secret=process.env.RAZORPAYKEYSECRET
    const hmac=crypto.createHmac("sha256",key_secret)
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id)
    const generated_signature=hmac.digest('hex')

    if(generated_signature==razorpay_signature){
        let deleteCart= await cartModel.deleteMany({user:req.user})
        let updateOrder=await orderModel.updateOne({razorpayOrderId:razorpay_order_id},
        {razorpayPayment:razorpay_payment_id,paymentStatus:"successful",orderStatus:"processing"}
        )
        res.status(200).json({status:1,msg:"payment Successfully deducted",updateOrder})
    }
    else{
        res.status(400).json({status:0,msg:"invalid Signature"})
    }
}

let showOrder=async(req,res)=>{
    let userId=req.user
    let myOrder=await orderModel.find({orderUser:userId}).populate('orderItems')
    res.send({status:1,data:myOrder})

}

let showSingleOrder=async(req,res)=>{
    let {id}=req.params
    let myOrder=await orderModel.findOne({_id:id})
    res.send({status:1,data:myOrder, staticPath:'uploads/product/productImage/'})

}

module.exports = { saveOrder,verifyOrder,showOrder , showSingleOrder}