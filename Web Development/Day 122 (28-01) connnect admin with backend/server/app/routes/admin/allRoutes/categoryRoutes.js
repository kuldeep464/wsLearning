let express=require("express")
const { categoryAdd, categoryView, categoryEdit,  categorySingleDelete, categoryMultiDelete, categoryUpdate } = require("../../../controller/admin/categoryController")
let multer=require("multer")

let categoryRoutes=express.Router()

let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/category")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

let uploads=multer({storage:storage})

categoryRoutes.post("/add",uploads.single("categoryImage"), categoryAdd) //http://localhost:8080/admin/category/add
categoryRoutes.get("/view",categoryView) //http://localhost:8080/admin/category/view
categoryRoutes.delete("/singleDelete/:id",categorySingleDelete)  //http://localhost:8080/admin/category/singleDelete
categoryRoutes.post("/multiDelete",categoryMultiDelete)//http://localhost:8080/admin/category/multiDelete
categoryRoutes.get("/edit/:id",categoryEdit) //http://localhost:8080/admin/category/edit
categoryRoutes.put("/update/:id", uploads.single("categoryImage"),categoryUpdate) //http://localhost:8080/admin/category/update


module.exports={categoryRoutes}