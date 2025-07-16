let express=require("express")
const { productAdd, productView, getproductParentCategory, getproductsubCategory, getproductSize, getproductColor, productSingleDelete, productMultiDelete, productEdit, productUpdate } = require("../../../controller/admin/productController")
let multer=require("multer")

let productRoutes=express.Router()

let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        if(file.fieldname=='productImage'){
            cb(null,"uploads/product/productImage")
        }
        else if(file.fieldname=='productImageAnimation'){
            cb(null,"uploads/product/productAnimationImage")
        }
        else if(file.fieldname=='productGallery'){
            cb(null,"uploads/product/productGallery")
        }
        else{
            cb(null,"uploads/product")
        }
        
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

let uploads=multer({storage:storage})

let allImageUploads=uploads.fields([
    {
        name:'productImage',
        maxCount:1
    },
    {
        name:'productImageAnimation',
        maxCount:1
    },
    {
        name:'productGallery',
        maxCount:10
    },
])








productRoutes.post("/add",allImageUploads, productAdd) //http://localhost:8080/admin/category/add

productRoutes.get("/view",productView) //http://localhost:8080/admin/category/view
productRoutes.delete("/singleDelete/:id",productSingleDelete)
productRoutes.post("/multiDelete",productMultiDelete)
productRoutes.get("/edit/:id",productEdit)
productRoutes.put("/update/:id", allImageUploads ,productUpdate)


productRoutes.get("/parentcategory",getproductParentCategory)
productRoutes.get("/subcategory/:parentId",getproductsubCategory)
productRoutes.get("/size",getproductSize)
productRoutes.get("/color",getproductColor)


module.exports={productRoutes}