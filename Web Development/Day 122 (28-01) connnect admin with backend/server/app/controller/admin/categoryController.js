const { categoryModal } = require("../../model/categoryModel")
let fs = require("fs")

let categoryAdd = async (req, res) => {
    let { categoryName, categoryDescription, status } = req.body
    let insObj = {
        catName: categoryName,
        catDesc: categoryDescription,
        catStatus: status
    }
    if (req.file) {
        if (req.file.filename) {
            insObj['catImage'] = req.file.filename
        }
    }
    try {
        let category = new categoryModal(insObj)
        let insertRes = await category.save()
        let resObj = {
            status: 1,
            msg: "category Added Successfully",
            insertRes
        }
        res.send(resObj)
    }
    catch (error) {
        let path = `uploads/category/${insObj.catImage}`
        fs.unlinkSync(path)
        res.send(error)
    }

}
let categoryView = async (req, res) => {
    let categoryData = await categoryModal.find()
    let resObj = {
        status: 1,
        msg: "category Data Fatched",
        data: categoryData,
        staticImagePath: 'uploads/category/'
    }
    res.send(resObj)
}
let categorySingleDelete = async (req, res) => {
    let id = req.params.id
    let getDelData = await categoryModal.findOne({ _id: id })
    if (getDelData.catImage) {
        try{
            let getImageName = getDelData.catImage
            let path = `uploads/category/${getImageName}`
            fs.unlinkSync(path)

        }
        catch{

        }

    }

    let delCategory = await categoryModal.deleteOne({ _id: id })
    let resObj = {
        status: 1,
        msg: 'category Deleted'
    }


    res.send(resObj)
}
let categoryMultiDelete = async (req, res) => {
    let { allIds } = req.body
    for (let id of allIds) {
        let getDelData = await categoryModal.findOne({ _id: id })
        if (getDelData.catImage) {
            try{
                let getImageName = getDelData.catImage
                let path = `uploads/category/${getImageName}`
                fs.unlinkSync(path)

            }
            catch{

            }

        }

        let delCategory = await categoryModal.deleteOne({ _id: id })

    }
    let resObj = {
        status: 1,
        msg: 'Multiple category has been deleted'
    }


    res.send(resObj)
}
let categoryEdit = async (req, res) => {
    let { id } = req.params
    let data = await categoryModal.findOne({ _id: id })
    let resObj = {
        status: 1,
        data,
        staticImagePath: 'uploads/category/'
    }
    res.send(resObj)
}

let categoryUpdate = async (req, res) => {
    let { id } = req.params
    let { categoryName, categoryDescription, status } = req.body
    let updateObj = {
        catName: categoryName,
        catDesc: categoryDescription,
        catStatus: status
    }
    if (req.file) {
        if (req.file.filename) {
            let getDelData = await categoryModal.findOne({ _id: id })
            try{
                let getImageName = getDelData.catImage
                let path = `uploads/category/${getImageName}`
                fs.unlinkSync(path)
                updateObj['catImage'] = req.file.filename

            }
            catch{

            }
        }
    }
    try {
        let category = await categoryModal.updateOne({ _id: id }, { $set: updateObj })
        let resObj = {
            status: 1,
            msg: "category Updated Successfully",
            category
        }
        res.send(resObj)
    }
    catch (error) {
        res.send(error)
    }

}



module.exports = { categoryAdd, categoryUpdate, categoryView, categorySingleDelete, categoryMultiDelete, categoryEdit }