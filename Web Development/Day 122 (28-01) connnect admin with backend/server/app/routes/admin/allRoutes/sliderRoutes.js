let express=require("express")
const { sliderAdd, sliderView, sliderEdit, sliderSingleDelete, sliderMultiDelete, sliderUpdate } = require("../../../controller/admin/sliderController")
let multer=require("multer")

let sliderRoutes=express.Router()

let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/slider")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

let uploads=multer({storage:storage})


sliderRoutes.post("/add",uploads.single("sliderFileImage"),sliderAdd)
sliderRoutes.get("/view",sliderView)
sliderRoutes.delete("/singleDelete/:id",sliderSingleDelete)
sliderRoutes.post("/multiDelete",sliderMultiDelete)
sliderRoutes.get("/edit/:id",sliderEdit)
sliderRoutes.put("/update/:id",uploads.single("sliderFileImage"),sliderUpdate)



module.exports={sliderRoutes}