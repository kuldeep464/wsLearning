let express=require("express")
const { homeSlider, newProduct, enquirySave } = require("../../controllers/website/homeController")
let HomeRoutes=express.Router()


HomeRoutes.get("/slider",homeSlider)

HomeRoutes.get("/new-product",newProduct)

HomeRoutes.post("/enquiry",enquirySave)


module.exports={HomeRoutes}