const { sizeModal } = require("../../model/sizeModel")

let sizeAdd = async (req, res) => {
    let { sizeName, status } = req.body

    let insObj = {
        sizeName: sizeName,
        sizeStatus: status
    }

    try {
        let size = new sizeModal(insObj)
        let insertRes = await size.save()
        let resObj = {
            status: 1,
            msg: "Size Added Successfully",
            insertRes
        }
        res.send(resObj)
    }
    catch (error) {
        res.send(error)
    }
}
let sizeView = async (req, res) => {
    let sizeData = await sizeModal.find()
    let resObj = {
        status: 1,
        msg: "Size Data Fatched",
        data: sizeData,
    }
    res.send(resObj)
}

let sizeSingleDelete = async(req, res) => {
    let id = req.params.id

        let delColor = await sizeModal.deleteOne({ _id: id })
        let resObj = {
            status: 1,
            msg: 'size Deleted'
        }

        res.send(resObj)
}

let sizeMultiDelete = async(req, res) => {
    let { allIds } = req.body
    console.log(allIds)
    for (let id of allIds) {

        let delCategory = await sizeModal.deleteOne({ _id: id })

    }
    let resObj = {
        status: 1,
        msg: 'Multiple Sizes has been deleted'
    }
    res.send(resObj)
}

let sizeEdit = async (req, res) => {
    let {id}=req.params
    let data = await sizeModal.findOne({ _id: id })
    let resObj = {
        status: 1,
        data
    }
    res.send(resObj)
}

let sizeUpdate=async (req,res)=>{
    let {id}=req.params
    let { sizeName, status } = req.body

    let updateObj = {
        sizeName: sizeName,
        sizeStatus: status
    }

    try {
        let size = await sizeModal.updateOne({_id:id},{$set:updateObj})
        let resObj = {
            status: 1,
            msg: "Size Updated Successfully",
            size
        }
        res.send(resObj)
    }
    catch (error) {
        res.send(error)
    }
}



module.exports = { sizeAdd,sizeUpdate, sizeView, sizeSingleDelete, sizeMultiDelete, sizeEdit }