let express=require("express")
const { storyAdd, storyView, storyEdit,  storySingleDelete, storyMultiDelete, storyUpdate } = require("../../../controller/admin/storyController")
let multer=require("multer")

let storyRoutes=express.Router()

let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        if(file.fieldname=='storyImage'){
            cb(null,"uploads/story/storyImage")
        }
        else{
            cb(null,"uploads/story/storyBanner")
        }
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

let uploads=multer({storage:storage})

let allImageUploads=uploads.fields([
    {
        name:'storyImage',
        maxCount:1
    },
    {
        name:'storyBanner',
        maxCount:1
    }
])

storyRoutes.post("/add",allImageUploads, storyAdd) //http://localhost:8080/admin/story/add
storyRoutes.get("/view",storyView) //http://localhost:8080/admin/story/view
storyRoutes.delete("/singleDelete/:id",storySingleDelete)  //http://localhost:8080/admin/story/singleDelete
storyRoutes.post("/multiDelete",storyMultiDelete)//http://localhost:8080/admin/story/multiDelete
storyRoutes.get("/edit/:id",storyEdit) //http://localhost:8080/admin/story/edit
storyRoutes.put("/update/:id", allImageUploads,storyUpdate) //http://localhost:8080/admin/story/update


module.exports={storyRoutes}