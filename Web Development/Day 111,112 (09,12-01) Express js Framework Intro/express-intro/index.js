let express=require('express')
let app=express()
let cors=require('cors')
app.use(cors())  //it resolves cors origin error and we can use api in frontend without changing urls
app.use(express.json()) // it helps in use of json transfers from frontend to backend eg:Form Data

app.get('/',(req,res)=>{
    let obj={
        status:1,
        msg:'Product'
    }
    res.send(obj) //it converts in json automatically
})

app.post('/login', (req,res)=>{
    //request contains body, params,query body always show data in form of object
    console.log(req.body)
    let obj={
        status:1,
        msg:'login',
        data:req.body
    }
    res.send(obj)
})


//req.param
app.get('/news/:id?',(req,res)=>{  //question mark is the optional parameter
    let newsId=req.params.id
    let obj={
        status:1,
        data:"news Detailing",
        newsId
    }
    res.send(obj)
})

//req.query
//adding in urls eg:-http://localhost:8000/user/insert?userName=kuldeep&userEmail=kuldeep@123 but we should not add sensitive information in query strings or urls
app.get('/user/insert',(req,res)=>{ 
    let obj={
        status:1,
        msg:'Demo API',
        queryStringData:req.query
    }
    res.send(obj)
})

app.listen('8000') //http://localhost:8000