let mongoose=require('mongoose')
let orderSchema=new mongoose.Schema(
    {
        orderItems:[],
        shippingDetails:{
            type:Object
        },
        paymentMethod:{
            type:String,
            enum:['cod','online'],
            default:'cod'
        },
        paymentStatus:{
            type:String,
            enum:['pending','successful','failed'],
            default:'pending'
        },
        shippingCharge:{
            type:Number
        },
        razorpayOrderId:{
            type:String,
        },
        razorpayPaymentId:{
            type:String,
        },
        orderAmount:{
            type:Number
        },
        orderQty:{
            type:Number
        },
        orderStatus:{
            type:String,
            enum:['pending','cancelled','processing','delivered'],
            default:'pending'
        },
        orderUser:{
            type:mongoose.Types.ObjectId , ref:'user'
        }

    },{
        timestamps:true
    }
)

let orderModel=mongoose.model('order',orderSchema)
module.exports={orderModel}