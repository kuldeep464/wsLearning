let aboutTeam=(req,res)=>{
    let obj={
        status:1,
        data:'about team data'
    }
    res.send(obj)
}

module.exports={aboutTeam}