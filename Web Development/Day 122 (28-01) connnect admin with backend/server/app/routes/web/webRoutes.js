let express=require("express")
const webNewUserAuthRoutes = require("./allRoutes/newUserAuthRoutes")
const homeApiRoutes = require("./allRoutes/homeApiRoutes")
const cartApiRoutes = require("./allRoutes/cartApiRoutes")
const orderRoute = require("./allRoutes/orderRoutes")
const {webProductRoutes}  = require("./allRoutes/productRoutes")

let webRoutes=express.Router()

webRoutes.use("/auth", webNewUserAuthRoutes)
webRoutes.use("/home", homeApiRoutes)
webRoutes.use("/cart", cartApiRoutes)
webRoutes.use("/order", orderRoute)
webRoutes.use("/product" , webProductRoutes )



module.exports={webRoutes}