let express=require("express")
const { adminRoutes } = require("./admin/adminRoutes")
const { webRoutes } = require("./web/webRoutes")

let mainRoutes=express.Router()


mainRoutes.use("/admin",adminRoutes)

mainRoutes.use("/web",webRoutes)




module.exports={mainRoutes}