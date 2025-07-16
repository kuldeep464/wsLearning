const { colorModal } = require("../../model/colorModel")

let colorAdd = async (req, res) => {
    let { colorName, colorCode, status } = req.body

    let insObj = {
        colorName: colorName,
        colorCode: colorCode,
        colorStatus: status
    }

    try {
        let color = new colorModal(insObj)
        let insertRes = await color.save()
        let resObj = {
            status: 1,
            msg: "color Added Successfully",
            insertRes
        }
        res.send(resObj)
    }
    catch (error) {
        res.send(error)
    }

}
let colorView = async (req, res) => {
    let colorData = await colorModal.find()
    let resObj = {
        status: 1,
        msg: "color Data Fatched",
        data: colorData,
    }
    res.send(resObj)
}
let colorSingleDelete = async (req, res) => {

        let id = req.params.id

        let delColor = await colorModal.deleteOne({ _id: id })
        let resObj = {
            status: 1,
            msg: 'Color Deleted'
        }

        res.send(resObj)


}

let colorMultiDelete = async (req, res) => {
    let { allIds } = req.body
    for (let id of allIds) {

        let delCategory = await colorModal.deleteOne({ _id: id })

    }
    let resObj = {
        status: 1,
        msg: 'Multiple colors has been deleted'
    }
    res.send(resObj)
}
let colorEdit = async (req, res) => {
    let {id}=req.params
    let data = await colorModal.findOne({ _id: id })
    let resObj = {
        status: 1,
        data
    }
    res.send(resObj)
}

let colorUpdate=async(req,res)=>{
    let {id}=req.params
    let { colorName, colorCode, status } = req.body

    let updateObj = {
        colorName: colorName,
        colorCode: colorCode,
        colorStatus: status
    }

    try {
        let color = await colorModal.updateOne({_id:id},{$set:updateObj})
        let resObj = {
            status: 1,
            msg: "color Updated Successfully",
            color
        }
        res.send(resObj)
    }
    catch (error) {
        res.send(error)
    }
}



module.exports = { colorAdd,colorUpdate, colorView, colorSingleDelete, colorEdit, colorMultiDelete }