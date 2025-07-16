let express=require("express")
const { subCategoryAdd, subCategoryView, subCategoryEdit,  subCategorySingleDelete, subCategoryMultiDelete, subCategoryUpdate, getParentCategory } = require("../../../controller/admin/subCategoryController")
let multer=require("multer")

let subCategoryRoutes=express.Router()

let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/subcategory")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

let uploads=multer({storage:storage})

subCategoryRoutes.post("/add",uploads.single("subCategoryImage"), subCategoryAdd) //http://localhost:8080/admin/category/add
subCategoryRoutes.get("/view",subCategoryView) //http://localhost:8080/admin/category/view
subCategoryRoutes.delete("/singleDelete/:id",subCategorySingleDelete)  //http://localhost:8080/admin/category/singleDelete
subCategoryRoutes.post("/multiDelete",subCategoryMultiDelete)//http://localhost:8080/admin/category/multiDelete
subCategoryRoutes.get("/edit/:id",subCategoryEdit) //http://localhost:8080/admin/category/edit
subCategoryRoutes.put("/update/:id", uploads.single("subCategoryImage"),subCategoryUpdate) //http://localhost:8080/admin/category/update
subCategoryRoutes.get("/parent-category",getParentCategory)

module.exports={subCategoryRoutes}