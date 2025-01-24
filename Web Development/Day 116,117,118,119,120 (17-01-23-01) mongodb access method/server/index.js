let express=require("express")
let cors=require("cors")
const { websiteRoutes } = require("./app/modals/websiteroutes")
let app=express()
app.use(cors())
app.use(express.json())

app.use("/web",websiteRoutes)

app.listen('8100') //http://localhost:8100/web/home/form-data