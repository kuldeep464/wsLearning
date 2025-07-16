const { adminAuthModel } = require("../../model/adminAuthModel")

let adminAuth = async (req, res) => {
    let { adminUsername, adminPassword } = req.body
    let adminData = await adminAuthModel.findOne({ adminUsername, adminPassword })
    if (adminData) {
        let obj = {
            status: 1,
            data: adminData
        }
        res.send(obj)
    }
    else {
        let obj = {
            status: 0,
            msg: "invalid username or password"
        }
        res.send(obj)
    }
}

module.exports = { adminAuth }