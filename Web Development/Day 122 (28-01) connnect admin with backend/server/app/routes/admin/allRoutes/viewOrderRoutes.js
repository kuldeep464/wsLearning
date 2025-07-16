let express=require("express")
const { viewOrder } = require("../../../controller/admin/viewOrderController")

let viewOrderRoutes=express.Router()

viewOrderRoutes.get("/view-order",viewOrder)


module.exports={viewOrderRoutes}