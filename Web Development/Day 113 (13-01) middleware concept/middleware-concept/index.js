let express=require('express')
const { checkToken } = require('./app/middleware/checkToken')
let app=express()
app.use(express.json())

//apply middleware on all api's or routes
// app.use(checkToken) 

app.get('/',(req,res)=>{ // http://localhost:8080
    let obj={
        status:1,
        data:{
            msg:'home',
            id:1
        }
    }
    res.send(obj)
})


//middleware applied on particular api
app.get('/stories',checkToken,(req,res)=>{ // http://localhost:8080/stories 
    let obj={
        status:1,
        data:{
            msg:'stories',
            id:1
        }
    }
    res.send(obj)
})

app.get('/news',(req,res)=>{ // http://localhost:8080/news
    let obj={
        status:1,
        data:{
            msg:'news',
            id:1
        }
    }
    res.send(obj)
})

app.get('/product',(req,res)=>{ // http://localhost:8080/product
    let obj={
        status:1,
        data:{
            msg:'product',
            id:1
        }
    }
    res.send(obj)
})

app.listen('8080') // http://localhost:8080