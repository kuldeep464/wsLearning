 
let mytoken=123456


 let checkToken=(req,res,next)=>{

    if(req.query.token==='' || req.query.token==undefined){

        let obj={
            status:0,
            msg:'please enter the token'
        }
    
        return res.send(obj)
    }

    if(req.query.token!=mytoken){

        let obj={
            status:0,
            msg:'please enter the valid token'
        }
    
       return res.send(obj)
    }

    next()


 }

 module.exports={checkToken}