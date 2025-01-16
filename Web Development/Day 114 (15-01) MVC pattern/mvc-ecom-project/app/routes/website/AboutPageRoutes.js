let express=require("express")
const { aboutTeam } = require("../../controllers/website/aboutController")
let aboutRoutes=express.Router()

aboutRoutes.get("/team",aboutTeam)


module.exports={aboutRoutes}