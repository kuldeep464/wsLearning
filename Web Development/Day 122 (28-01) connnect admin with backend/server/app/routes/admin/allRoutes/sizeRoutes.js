let express=require("express")
const { sizeAdd, sizeView, sizeEdit, sizeMultiDelete, sizeSingleDelete, sizeUpdate } = require("../../../controller/admin/sizeController")

let sizeRoutes=express.Router()

sizeRoutes.post("/add",sizeAdd)
sizeRoutes.get("/view",sizeView)
sizeRoutes.delete("/singleDelete/:id",sizeSingleDelete)
sizeRoutes.post("/multiDelete",sizeMultiDelete)
sizeRoutes.get("/edit/:id",sizeEdit)
sizeRoutes.put("/update/:id",sizeUpdate)



module.exports={sizeRoutes}