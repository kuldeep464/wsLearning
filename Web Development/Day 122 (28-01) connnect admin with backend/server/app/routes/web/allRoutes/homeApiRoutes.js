let express=require("express")
const { getCategory, getFeaturedProduct } = require("../../../controller/web/homeApiController")

let homeApiRoutes=express.Router()

homeApiRoutes.get("/parent-category",getCategory) //  http://localhost:8080/web/home/parent-category
homeApiRoutes.get("/featured-product",getFeaturedProduct) //  http://localhost:8080/web/home/featured-product

module.exports=homeApiRoutes