const { categoryModal } = require("../../model/categoryModel")
let fs = require("fs")
const { subCategoryModal } = require("../../model/subCategoryModel")

let subCategoryAdd = async (req, res) => {
    let { subCategoryName, parentCategoryName, subCategoryDescription, status } = req.body
    let insObj = {
        subCategoryName,
        parentCategoryName,
        subCategoryDescription,
        status
    }
    if (req.file) {
        if (req.file.filename) {
            insObj['subCategoryImage'] = req.file.filename
        }
    }
    try {
        let subCategory = new subCategoryModal(insObj)
        let insertRes = await subCategory.save()
        let resObj = {
            status: 1,
            msg: "Sub Category Added Successfully",
            insertRes
        }
        res.send(resObj)
    }
    catch (error) {
        let path = `uploads/subcategory/${insObj.subCategoryImage}`
        fs.unlinkSync(path)
        res.send(error)
    }

}
let subCategoryView = async (req, res) => {
    let subCategoryData = await subCategoryModal.find().populate('parentCategoryName', 'catName')
    let resObj = {
        status: 1,
        msg: "sub category Data Fetched",
        data: subCategoryData,
        staticImagePath: 'uploads/subcategory/'
    }
    res.send(resObj)
}
let subCategorySingleDelete = async (req, res) => {
    let id = req.params.id
    let getDelData = await subCategoryModal.findOne({ _id: id })
    if (getDelData.subCategoryImage) {
        try{
            let getImageName = getDelData.subCategoryImage
            let path = `uploads/subcategory/${getImageName}`
            fs.unlinkSync(path)

        }
        catch{

        }

    }

    let deSublCategory = await subCategoryModal.deleteOne({ _id: id })
    let resObj = {
        status: 1,
        msg: 'sub category Deleted'
    }


    res.send(resObj)
}
let subCategoryMultiDelete = async (req, res) => {
    let { allIds } = req.body
    for (let id of allIds) {
        let getDelData = await subCategoryModal.findOne({ _id: id })
        if (getDelData.subCategoryImage) {
            try{
                let getImageName = getDelData.subCategoryImage
                let path = `uploads/subcategory/${getImageName}`
                fs.unlinkSync(path)

            }
            catch{

            }

        }

        let delCategory = await subCategoryModal.deleteOne({ _id: id })

    }
    let resObj = {
        status: 1,
        msg: 'Multiple category has been deleted'
    }


    res.send(resObj)
}
let subCategoryEdit = async (req, res) => {
    let { id } = req.params
    let data = await subCategoryModal.findOne({ _id: id }).populate('parentCategoryName', 'catName')
    let resObj = {
        status: 1,
        data,
        staticImagePath: 'uploads/subcategory/'
    }
    res.send(resObj)
}

let subCategoryUpdate = async (req, res) => {
    let { id } = req.params
    let { subCategoryName, parentCategoryName, subCategoryDescription, status } = req.body
    let updateObj = {
        subCategoryName,
        parentCategoryName,
        subCategoryDescription,
        status
    }
    if (req.file) {
        let getDelData = await subCategoryModal.findOne({ _id: id })
        if (req.file.filename) {
            try{
                let getImageName = getDelData.subCategoryImage
                let path = `uploads/subcategory/${getImageName}`
                fs.unlinkSync(path)
                updateObj['subCategoryImage'] = req.file.filename

            }
            catch{

            }
        }
    }
    try {
        let subCategory = await subCategoryModal.updateOne({ _id: id }, { $set: updateObj }).populate('parentCategoryName', 'catName')
        let resObj = {
            status: 1,
            msg: "sub category Updated Successfully",
            subCategory
        }
        res.send(resObj)
    }
    catch (error) {
        res.send(error)
    }

}

let getParentCategory = async (req, res) => {
    let data = await categoryModal.find({ catStatus: true }).select("catName")
    let resObj = {
        status: 1,
        data
    }
    res.send(resObj)
}



module.exports = { getParentCategory, subCategoryAdd, subCategoryUpdate, subCategoryView, subCategorySingleDelete, subCategoryMultiDelete, subCategoryEdit }