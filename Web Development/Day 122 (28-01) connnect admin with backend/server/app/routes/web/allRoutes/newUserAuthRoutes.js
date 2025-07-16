let express=require("express")
const { webNewUserAuth, loginAuth, sendOtp, changePassword } = require("../../../controller/web/webAuthController")
const { checkLoginToken } = require("../../../middleware/checkLoginToken")

let webNewUserAuthRoutes=express.Router()

webNewUserAuthRoutes.post("/sendOtp",sendOtp)

webNewUserAuthRoutes.post("/signUp",webNewUserAuth) // http://localhost:8080/web/newUser/auth

webNewUserAuthRoutes.post("/login",loginAuth)

webNewUserAuthRoutes.post("/change-password",checkLoginToken,changePassword)

module.exports=webNewUserAuthRoutes