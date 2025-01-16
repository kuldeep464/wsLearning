let express=require("express")
const { HomeRoutes } = require("./website/HomePageRoutes")
const { aboutRoutes } = require("./website/AboutPageRoutes")
let websiteRoutes=express.Router()

websiteRoutes.use("/home",HomeRoutes)
websiteRoutes.use("/about",aboutRoutes)


module.exports={websiteRoutes}