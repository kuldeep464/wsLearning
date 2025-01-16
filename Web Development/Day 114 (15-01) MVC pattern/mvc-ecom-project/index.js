let express=require("express")
let cors=require("cors")
const { websiteRoutes } = require("./app/routes/websiteRoutes")
require("dotenv").config()
let app=express()
app.use(cors())
app.use(express.json())

app.use("/web",websiteRoutes)





app.listen(process.env.PORT || 8100) 

//http://localhost:8000/web/home/slider