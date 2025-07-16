let express=require("express")
const { categoryRoutes } = require("./allRoutes/categoryRoutes")
const { sizeRoutes } = require("./allRoutes/sizeRoutes")
const { colorRoutes } = require("./allRoutes/colorRoutes")
const { sliderRoutes } = require("./allRoutes/sliderRoutes")
const { subCategoryRoutes } = require("./allRoutes/subCategoryRoutes")
const { productRoutes } = require("./allRoutes/productRoutes")
const adminAuthRoutes = require("./allRoutes/authRoutes")
const { storyRoutes } = require("./allRoutes/storyRoutes")
const { viewOrderRoutes } = require("./allRoutes/viewOrderRoutes")

let adminRoutes=express.Router()

adminRoutes.use("/category", categoryRoutes)

adminRoutes.use("/size", sizeRoutes)

adminRoutes.use("/color", colorRoutes)

adminRoutes.use("/slider", sliderRoutes)

adminRoutes.use("/subCategory", subCategoryRoutes)

adminRoutes.use("/product", productRoutes)

adminRoutes.use("/story", storyRoutes)

adminRoutes.use("/adminAuth", adminAuthRoutes)

adminRoutes.use("/order", viewOrderRoutes)




module.exports={adminRoutes}