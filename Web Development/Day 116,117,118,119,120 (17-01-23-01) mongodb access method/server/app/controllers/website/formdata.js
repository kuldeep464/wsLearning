const { ObjectId } = require("mongodb")
const { dbConnection } = require("../../config/dbConnection");
const { transporter } = require("../../config/emailConfig");

let sendformDataFunction = async (req, res) => {



    let id = req.body._id
    console.log(id)
    let dbObj = {
        Name: req.body.Name,
        Email: req.body.Email,
        Message: req.body.Message
    }
    let db = await dbConnection()
    let enquiryTable = await db.collection('enquiryData')



    if (id === undefined) {

        let checkEmail = await enquiryTable.findOne({ Email: req.body.Email })


        if (checkEmail) {
            //Error
            let obj = {
                status: 0,
                'msg': "email id already exists",
            }
            res.send(obj)
        }
        else {
            const info = await transporter.sendMail({
                from: '"test email 👻" <kuldeeppoonia464@gmail.com>', // sender address
                to: req.body.Email, // list of receivers
                subject: "Enquiry Based Email ✔", // Subject line
                text: "hello?", // plain text body
                html: `<b>${req.body.Message}</b>`, // html body
            });



            let insertRes = await enquiryTable.insertOne(dbObj)
            let obj = {
                status: 1,
                msg: "data added to db",
                data: insertRes,

            }
            res.send(obj)
        }

    }
    else {
        let UpdateRes = await enquiryTable.updateOne({ _id: new ObjectId(id) }, { $set: dbObj })

        let obj = {
            status: 1,
            msg: "data added to db",
            data: UpdateRes,

        }
        res.send(obj)
    }
}

let viewData = async (req, res) => {
    let db = await dbConnection()
    let enquiryTable = await db.collection('enquiryData')
    let dbData = await enquiryTable.find().toArray()
    let obj = {
        status: 1,
        data: dbData

    }
    res.send(obj)
}

let deleteData = async (req, res) => {
    let { delId } = req.params
    let db = await dbConnection()
    let enquiryTable = await db.collection('enquiryData')
    let deleteDbData = await enquiryTable.deleteOne({ _id: new ObjectId(delId) })
    let obj = {
        status: 1,
        data: deleteDbData,
        msg: "Item Deleted"

    }
    res.send(obj)
}

let editData = async (req, res) => {
    let { editId } = req.params
    let db = await dbConnection()
    let enquiryTable = await db.collection('enquiryData')
    let findDbData = await enquiryTable.findOne({ _id: new ObjectId(editId) })
    let obj = {
        status: 1,
        data: findDbData,
        msg: "Item Deleted"

    }
    res.send(obj)
}


module.exports = { sendformDataFunction, viewData, deleteData, editData }