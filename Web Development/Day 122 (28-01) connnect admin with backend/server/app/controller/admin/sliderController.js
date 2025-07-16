const { sliderModal } = require("../../model/sliderModel")
let fs=require('fs')

let sliderAdd=async(req,res)=>{
    let {sliderName,sliderHeading,sliderSubHeading,status}=req.body
    let insObj={
        sliderName:sliderName,
        sliderHeading:sliderHeading,
        sliderSubHeading:sliderSubHeading,
        sliderStatus:status
    }
    if(req.file){
        if(req.file.filename){
            insObj['sliderImage']=req.file.filename
        }
    }
    try{
        let slider=new sliderModal(insObj)
        let insertRes=await slider.save()
        let resObj={
            status:1,
            msg:"Slider Added Successfully",
            insertRes
        }
        res.send(resObj)
    }
    catch(error){
        res.send(error)
    }
}
let sliderView=async(req,res)=>{
    let sliderData =await sliderModal.find()
    let resObj = {
        status: 1,
        msg: "slider Data Fatched",
        data:sliderData,
        staticImagePath:'uploads/slider/'
    }
    res.send(resObj)
}
let sliderSingleDelete=async(req,res)=>{
    let id=req.params.id
    let getDelData=await sliderModal.findOne({_id:id})
    if(getDelData.sliderImage){
        try{
            let getImageName=getDelData.sliderImage
            let path=`uploads/slider/${getImageName}`
            fs.unlinkSync(path)

        }
        catch{

        }

    }

    let delCategory =await sliderModal.deleteOne({_id:id})
    let resObj={
        status:1,
        msg:'Slider Deleted'
    }
    res.send(resObj)
}

let sliderMultiDelete=async(req,res)=>{
    let {allIds}=req.body
    for(let id of allIds){
        let getDelData=await sliderModal.findOne({_id:id})
        if(getDelData.sliderImage){
            try{
                let getImageName=getDelData.sliderImage
                let path=`uploads/slider/${getImageName}`
                fs.unlinkSync(path)

            }
            catch{

            }
    
        }
    
        let delCategory =await sliderModal.deleteOne({_id:id})
       
    }
    let resObj={
        status:1,
        msg:'Multiple sliders has been deleted'
    }


    res.send(resObj)
}

let sliderEdit=async (req,res)=>{
    let { id } = req.params
    let data = await sliderModal.findOne({ _id: id })
    let resObj = {
        status: 1,
        data,
        staticImagePath: 'uploads/slider/'
    }
    res.send(resObj)
}

let sliderUpdate=async(req,res)=>{
    let { id } = req.params
    let { sliderName,sliderHeading,sliderSubHeading, status } = req.body
    let updateObj = {
        sliderName: sliderName,
        sliderHeading: sliderHeading,
        sliderSubHeading:sliderSubHeading,
        sliderStatus: status
    }
    if (req.file) {
        if (req.file.filename) {
            updateObj['sliderImage'] = req.file.filename
        }
    }
    try {
        let slider = await sliderModal.updateOne({ _id: id }, { $set: updateObj })
        let resObj = {
            status: 1,
            msg: "Slider Updated Successfully",
            slider
        }
        res.send(resObj)
    }
    catch (error) {
        res.send(error)
    }

}



module.exports={sliderAdd, sliderUpdate, sliderView,sliderSingleDelete,sliderEdit,sliderMultiDelete}