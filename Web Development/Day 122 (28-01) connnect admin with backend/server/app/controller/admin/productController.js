const { isNullOrUndefined } = require("util")
const { categoryModal } = require("../../model/categoryModel")
const { colorModal } = require("../../model/colorModel")
const { productModal } = require("../../model/productModel")
const { sizeModal } = require("../../model/sizeModel")
const { subCategoryModal } = require("../../model/subCategoryModel")
let fs = require("fs")



let productAdd = async (req, res) => {

    let { productName, productDescription, productShortDescription, productPrice, productMRP, parentCategoryName, subCategoryName, colorName, sizeName, productStatus,featuredProductCheckBox } = req.body

    let insObj = {
        productName,
        productDescription,
        productShortDescription,
        productPrice,
        productMRP,
        parentCategoryName,
        subCategoryName,
        colorName,
        sizeName,
        productStatus,
        featuredProductCheckBox:featuredProductCheckBox ?? '0'
    }

    if (req.files) {
        if (req.files.productImage) {
            insObj['productImage'] = req.files.productImage[0].filename
        }
        if (req.files.productImageAnimation) {
            insObj['productImageAnimation'] = req.files.productImageAnimation[0].filename
        }
        if (req.files.productGallery) {
            let allGalleryImages = req.files.productGallery.map((items) => items.filename)
            insObj['productGallery'] = allGalleryImages
        }
    }

    try {
        let product = new productModal(insObj)
        insertRes = await product.save()

        let resObj = {
            status: 1,
            msg: "New product added Successfully",
            insertRes
        }
        res.send(resObj)
    }
    catch (error) {
        let path1 = `uploads/product/productImage/${insObj.productImage}`
        fs.unlinkSync(path1)

        let path2 = `uploads/product/productAnimationImage/${insObj.productImageAnimation}`
        fs.unlinkSync(path2)

        insObj.productGallery.map((items) => {
            let path3 = `uploads/product/productGallery/${items}`
            fs.unlinkSync(path3)
        })


        console.log(error)
        res.send(error)
    }





}
let productView = async (req, res) => {
    let productData = await productModal.find().populate('parentCategoryName', 'catName').populate('subCategoryName', 'subCategoryName').populate('colorName', 'colorName').populate('sizeName', 'sizeName')
    let resObj = {
        status: 1,
        msg: "Product Data Fatched",
        data: productData,
        // staticProductImagePath: 'uploads/product/productImage'
        staticImagePath: {
            productImagePath: 'uploads/product/productImage/',
            productAnimationImagePath: 'uploads/product/productAnimationImage/',
            productGalleryPath: 'uploads/product/productGallery/',
        }

    }
    res.send(resObj)
}



let productSingleDelete = async (req, res) => {
    let id = req.params.id
    let getDelData = await productModal.findOne({ _id: id })
    if (getDelData.productImage) {
        try{
            let getImageName = getDelData.productImage
            let path = `uploads/product/productImage/${getImageName}`
            fs.unlinkSync(path)

        }
        catch{

        }

    }
    if (getDelData.productImageAnimation) {
        try{
            let getImageName = getDelData.productImageAnimation
            let path = `uploads/product/productAnimationImage/${getImageName}`
            fs.unlinkSync(path)

        }
        catch{

        }

    }
    if (getDelData.productGallery) {
        try{
            let getImageName = getDelData.productGallery
            getImageName.map((items) => {
                let path = `uploads/product/productGallery/${items}`
                fs.unlinkSync(path)
            })

        }
        catch{

        }
    }

    let delProduct = await productModal.deleteOne({ _id: id })
    let resObj = {
        status: 1,
        msg: 'Product Deleted'
    }


    res.send(resObj)
}

let productMultiDelete = async (req, res) => {
    let { allIds } = req.body
    for (let id of allIds) {
        let getDelData = await productModal.findOne({ _id: id })
        if (getDelData.productImage) {
            try{
                let getImageName = getDelData.productImage
                let path = `uploads/product/productImage/${getImageName}`
                fs.unlinkSync(path)

            }
            catch{

            }

        }
        if (getDelData.productImageAnimation) {
            try{
                let getImageName = getDelData.productImageAnimation
                let path = `uploads/product/productAnimationImage/${getImageName}`
                fs.unlinkSync(path)

            }
            catch{

            }

        }
        if (getDelData.productGallery) {
            try{
                let getImageName = getDelData.productGallery
                getImageName.map((items) => {
                    let path = `uploads/product/productGallery/${items}`
                    fs.unlinkSync(path)
                })

            }
            catch{

            }
        }

        let delproduct = await productModal.deleteOne({ _id: id })

    }
    let resObj = {
        status: 1,
        msg: 'Multiple Product has been deleted'
    }


    res.send(resObj)
}

let productEdit = async (req, res) => {
    let { id } = req.params
    let data = await productModal.findOne({ _id: id }).populate('parentCategoryName', 'catName').populate('subCategoryName', 'subCategoryName').populate('colorName', 'colorName').populate('sizeName', 'sizeName')
    let resObj = {
        status: 1,
        data,
        staticImagePath: {
            productImagePath: 'uploads/product/productImage/',
            productAnimationImagePath: 'uploads/product/productAnimationImage/',
            productGalleryPath: 'uploads/product/productGallery/',
        }
    }
    res.send(resObj)
}


let productUpdate = async (req, res) => {
    let { id } = req.params
    let { productName, productDescription, productShortDescription, productPrice, productMRP, parentCategoryName, subCategoryName, colorName, sizeName, productStatus,featuredProductCheckBox } = req.body

    let updateObj = {
        productName,
        productDescription,
        productShortDescription,
        productPrice,
        productMRP,
        parentCategoryName,
        subCategoryName,
        colorName,
        sizeName,
        productStatus,
        featuredProductCheckBox
    }

    if (req.files) {
        let getDelData = await productModal.findOne({ _id: id })

        if (req.files.productImage) {
            try{
                let getImageName = getDelData.productImage
                let path = `uploads/product/productImage/${getImageName}`
                fs.unlinkSync(path)
                updateObj['productImage'] = req.files.productImage[0].filename

            }
            catch{

            }
        }
        if (req.files.productImageAnimation) {
            try{
                let getImageName = getDelData.productImageAnimation
                let path = `uploads/product/productAnimationImage/${getImageName}`
                fs.unlinkSync(path)
                updateObj['productImageAnimation'] = req.files.productImageAnimation[0].filename

            }
            catch{

            }
        }
        if (req.files.productGallery) {
            try{
                getDelData.productGallery.map((items)=>{
                    let path = `uploads/product/productGallery/${items}`
                    fs.unlinkSync(path)
                })

            }
            catch{
                
            }

            let allGalleryImages = req.files.productGallery.map((items) => items.filename)
            updateObj['productGallery'] = allGalleryImages
        }
    }
    try {
        let product = await productModal.updateOne({ _id: id }, { $set: updateObj }).populate('parentCategoryName', 'catName').populate('subCategoryName', 'subCategoryName').populate('colorName', 'colorName').populate('sizeName', 'sizeName')
        let resObj = {
            status: 1,
            msg: "Product Updated Successfully",
            product
        }
        res.send(resObj)
    }
    catch (error) {
        res.send(error)
    }

}





















let getproductParentCategory = async (req, res) => {
    let data = await categoryModal.find({ catStatus: true }).select("catName")
    let resObj = {
        status: 1,
        data
    }
    res.send(resObj)
}

let getproductsubCategory = async (req, res) => {
    let { parentId } = req.params
    let data = await subCategoryModal.find({ parentCategoryName: parentId }).select("subCategoryName")
    let resObj = {
        status: 1,
        data
    }
    res.send(resObj)
}

let getproductColor = async (req, res) => {
    let data = await colorModal.find({ colorStatus: true }).select("colorName")
    let resObj = {
        status: 1,
        data
    }
    res.send(resObj)
}

let getproductSize = async (req, res) => {
    let data = await sizeModal.find({ sizeStatus: true }).select("sizeName")
    let resObj = {
        status: 1,
        data
    }
    res.send(resObj)
}


module.exports = { productAdd, productView, getproductSize, getproductColor, productUpdate, productEdit, productSingleDelete, productMultiDelete, getproductParentCategory, getproductsubCategory }