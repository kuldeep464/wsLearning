let express=require("express")
const { sendFormData } = require("./website/sendFormData")
let websiteRoutes=express.Router()

websiteRoutes.use("/home",sendFormData)



module.exports={websiteRoutes}