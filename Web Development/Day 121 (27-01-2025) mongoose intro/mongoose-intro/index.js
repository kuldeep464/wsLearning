let express=require("express")
let cors=require("cors")
let app=express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
let mongoose=require("mongoose")
const { enquiryModal } = require("./app/model/enquiryModel")


app.post("/enquiry",async(req,res)=>{
    let obj={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    }
    let enquiry=new enquiryModal(obj)
    let insertRes=await enquiry.save()
    let resObj={
        status:1,
        insertRes,
        message:'enquiry posted'
    }
    res.send(resObj)
})

app.get("/view",async (req,res)=>{
    let data=await enquiryModal.find()
    let resObj={
        status:1,
        data,
        message:'enquiry fetched'
    }
    res.send(resObj)
})

app.delete("/delete",async (req,res)=>{
    let id=req.params._id
    let data=await enquiryModal.deleteOne({_id:id})
    let resObj={
        status:1,
        message:'enquiry deleted'
    }
    res.send(resObj)
})

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
.then(()=>{
    app.listen(`${process.env.PORT}`)
})
