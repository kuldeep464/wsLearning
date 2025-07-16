let express=require("express")
const { colorAdd, colorView, colorEdit, colorMultiDelete, colorSingleDelete, colorUpdate } = require("../../../controller/admin/colorController")

let colorRoutes=express.Router()

colorRoutes.post("/add",colorAdd)
colorRoutes.get("/view",colorView)
colorRoutes.delete("/singleDelete/:id",colorSingleDelete)
colorRoutes.post("/multiDelete",colorMultiDelete)
colorRoutes.get("/edit/:id",colorEdit)
colorRoutes.post("/update/:id",colorUpdate)



module.exports={colorRoutes}