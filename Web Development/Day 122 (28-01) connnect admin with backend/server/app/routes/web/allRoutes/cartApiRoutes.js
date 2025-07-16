let express=require("express")
const { checkLoginToken } = require("../../../middleware/checkLoginToken")
const { addToCart, getCart, deleteCart, updateCart, changeQty } = require("../../../controller/web/cartController")

let cartApiRoutes=express.Router()

cartApiRoutes.post("/add-to-cart",checkLoginToken,addToCart) //  http://localhost:8080/web/cart/add-to-cart
cartApiRoutes.get("/get-cart",checkLoginToken,getCart) //  http://localhost:8080/web/cart/get-cart
cartApiRoutes.delete("/delete-cart/:id",checkLoginToken,deleteCart) //  http://localhost:8080/web/cart/delete-cart
cartApiRoutes.put("/update-cart/:id",checkLoginToken,changeQty) //  http://localhost:8080/web/cart/update-cart



module.exports=cartApiRoutes