let http=require('http')

let server=http.createServer((req,res)=>{
    if(req.url=='/'){
        let obj={
            status:1,
            data:[
                {
                    userName:'Kuldeep',
                    email:'kuldeep@gmail.com'
                },
                {
                    userName:'Sandeep',
                    email:'sandeep@gmail.com'
                }
            ]
            
        }
        res.end(JSON.stringify(obj)) //browser cannot show object directly we must change it in json form
    }

    if(req.url=='/news'){
        let obj={
            status:1,
            data:[
                {
                    Heading:'Haryana',
                    Description:'Haryana was formed at 1 nov. 1966'
                },
                {
                    Heading:'Hisar',
                    Description:'Hisar was founded by Firoj Shah tuglak'
                }
            ]
            
        }
        res.end(JSON.stringify(obj))
    }
   

})

server.listen('8000')  //http://localhost:8000