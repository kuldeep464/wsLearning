let express=require("express")
let cors=require("cors")
let app=express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
let mongoose=require("mongoose")
const { mainRoutes } = require("./app/routes/MainRoutes")
const { adminAuthModel } = require("./app/model/adminAuthModel")

app.use(mainRoutes)

app.use("/uploads/category" , express.static("uploads/category"))

app.use("/uploads/slider" , express.static("uploads/slider"))


app.use("/uploads/subcategory" , express.static("uploads/subcategory"))

app.use("/uploads/product" , express.static("uploads/product"))

app.use("/uploads/product/productImage" , express.static("uploads/product/productImage"))

app.use("/uploads/product/productGallery" , express.static("uploads/product/productGallery"))
app.use("/uploads/product/productAnimationImage" , express.static("uploads/product/productAnimationImage"))

app.use("/uploads/story/storyImage" , express.static("uploads/story/storyImage"))
app.use("/uploads/story/storyBanner" , express.static("uploads/story/storyBanner"))






mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
.then(async()=>{
    let checkAdmin=await adminAuthModel.find()
    if(checkAdmin.length==0){
        let adminAuthData= new adminAuthModel({adminUsername:'admin',adminPassword:'admin123'})
        adminAuthData.save()
    }
    app.listen(`${process.env.PORT}`)
})
