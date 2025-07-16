let express=require("express")
const { productDetails } = require("../../../controller/web/webProductController")

let webProductRoutes=express.Router()

webProductRoutes.get("/product-detail/:id",productDetails)

module.exports={webProductRoutes}