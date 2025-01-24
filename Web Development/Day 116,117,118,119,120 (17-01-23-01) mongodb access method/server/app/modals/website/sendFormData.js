let express = require("express")
const { sendformDataFunction, viewData, deleteData, editData } = require("../../controllers/website/formdata")
let sendFormData = express.Router()

sendFormData.post("/form-data", sendformDataFunction) // http://localhost:8100/web/home/form-data

sendFormData.get("/view-data", viewData)  //http://localhost:8100/web/home/view-data

sendFormData.delete("/delete-data/:delId", deleteData)  //http://localhost:8100/web/home/delete-data

sendFormData.get("/edit/:editId", editData)  //http://localhost:8100/web/home/edit



module.exports = { sendFormData }