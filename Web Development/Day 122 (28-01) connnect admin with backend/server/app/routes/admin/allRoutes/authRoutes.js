let express=require("express")
const { adminAuth } = require("../../../controller/admin/authController")

let adminAuthRoutes=express.Router()

adminAuthRoutes.post("/auth",adminAuth)

module.exports=adminAuthRoutes