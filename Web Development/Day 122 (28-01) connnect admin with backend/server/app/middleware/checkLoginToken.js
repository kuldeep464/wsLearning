var jwt = require('jsonwebtoken');
let checkLoginToken = (req, res, next) => {
    let token=req.headers.authorization.split(" ")[1]
    try{
        var decoded = jwt.verify(token, process.env.TOKENKEY);
        req.user=decoded.user._id
            if(decoded.user){
                next()
        
            }

    }
    catch{
        let obj={
            status:0,
            msg:"Invalid Token"
        }
        res.send(obj)
    }
}

module.exports = { checkLoginToken }