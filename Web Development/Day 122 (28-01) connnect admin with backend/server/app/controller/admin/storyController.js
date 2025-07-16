let fs = require("fs")
const { storyModel } = require("../../model/storyModel")



let storyAdd = async (req, res) => {

    let { storyName,storyDescription,storyStatus } = req.body

    let insObj = {
       storyName,
       storyDescription,
       storyStatus
    }

    if (req.files) {
        if (req.files.storyImage) {
            insObj['storyImage'] = req.files.storyImage[0].filename
        }
        if (req.files.storyBanner) {
            insObj['storyBanner'] = req.files.storyBanner[0].filename
        }
    }

    try {
        let story = new storyModel(insObj)
        insertRes = await story.save()

        let resObj = {
            status: 1,
            msg: "New story added Successfully",
            insertRes
        }
        res.send(resObj)
    }
    catch (error) {
        let path1 = `uploads/story/storyImage/${insObj.storyImage}`
        fs.unlinkSync(path1)

        let path2 = `uploads/story/storyBanner/${insObj.storyBanner}`
        fs.unlinkSync(path2)

        console.log(error)
        res.send(error)
    }





}
let storyView = async (req, res) => {
    let storyData = await storyModel.find()
    let resObj = {
        status: 1,
        msg: "Story Data Fatched",
        data: storyData,
        staticImagePath: {
            storyImagePath: 'uploads/story/storyImage/',
            storyBannerPath: 'uploads/story/storyBanner/',
        }

    }
    res.send(resObj)
}



let storySingleDelete = async (req, res) => {
    let id = req.params.id
    let getDelData = await storyModel.findOne({ _id: id })
    if (getDelData.storyImage) {
        try{
            let getImageName = getDelData.storyImage
            let path = `uploads/story/storyImage/${getImageName}`
            fs.unlinkSync(path)

        }

        catch{

        }
    }
    if (getDelData.storyBanner) {
        try{
            let getImageName = getDelData.storyBanner
            let path = `uploads/story/storyBanner/${getImageName}`
            fs.unlinkSync(path)

        }
        catch{

        }

    }

    let delProduct = await storyModel.deleteOne({ _id: id })
    let resObj = {
        status: 1,
        msg: 'Story Deleted'
    }


    res.send(resObj)
}

let storyMultiDelete = async (req, res) => {
    let { allIds } = req.body
    for (let id of allIds) {
        let getDelData = await storyModel.findOne({ _id: id })
        if (getDelData.storyImage) {
            try{
                let getImageName = getDelData.storyImage
                let path = `uploads/story/storyImage/${getImageName}`
                fs.unlinkSync(path)

            }

            catch{

            }

        }
        if (getDelData.storyBanner) {
            try{
                let getImageName = getDelData.storyBanner
                let path = `uploads/story/storyBanner/${getImageName}`
                fs.unlinkSync(path)

            }

            catch{

            }

        }

        let delproduct = await storyModel.deleteOne({ _id: id })

    }
    let resObj = {
        status: 1,
        msg: 'Multiple Story has been deleted'
    }


    res.send(resObj)
}

let storyEdit = async (req, res) => {
    let { id } = req.params
    let data = await storyModel.findOne({ _id: id })
    let resObj = {
        status: 1,
        data,
        staticImagePath: {
            storyImagePath: 'uploads/story/storyImage/',
            storyBannerPath: 'uploads/story/storyBanner/',
        }
    }
    res.send(resObj)
}


let storyUpdate = async (req, res) => {
    let { id } = req.params
    let { storyName , storyDescription,storyStatus } = req.body

    let updateObj = {
       storyName,
       storyDescription,
       storyStatus
    }

    if (req.files) {
        let getDelData = await storyModel.findOne({ _id: id })

        if (req.files.storyImage) {
            try{
                let getImageName = getDelData.storyImage
                let path = `uploads/story/storyImage/${getImageName}`
                fs.unlinkSync(path)
                updateObj['storyImage'] = req.files.storyImage[0].filename
                
            }
            catch{

            }
        }
        if (req.files.storyBanner) {
            try{
                let getImageName = getDelData.storyBanner
                let path = `uploads/story/storyBanner/${getImageName}`
                fs.unlinkSync(path)
                updateObj['storyBanner'] = req.files.storyBanner[0].filename

            }
            catch{
                
            }
        }
    }
    try {
        let story = await storyModel.updateOne({ _id: id }, { $set: updateObj })
        let resObj = {
            status: 1,
            msg: "Story Updated Successfully",
            story
        }
        res.send(resObj)
    }
    catch (error) {
        res.send(error)
    }

}


module.exports = { storyAdd, storyView, storyUpdate, storyEdit, storySingleDelete, storyMultiDelete,  }