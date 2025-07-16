let express=require("express")
const { saveOrder, verifyOrder, showOrder, showSingleOrder } = require("../../../controller/web/orderController")
const { checkLoginToken } = require("../../../middleware/checkLoginToken")

let orderRoute=express.Router()

orderRoute.post("/save-order",checkLoginToken,saveOrder)

orderRoute.post("/verify-order",checkLoginToken,verifyOrder)

orderRoute.get("/view-order",checkLoginToken,showOrder)

orderRoute.get("/single-order/:id",checkLoginToken,showSingleOrder)

module.exports=orderRoute