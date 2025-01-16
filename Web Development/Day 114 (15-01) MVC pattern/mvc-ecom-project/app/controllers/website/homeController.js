let homeSlider=(req,res)=>{
    let obj={
        status:1,
        data:"Home Slider API"
    }
    res.send(obj)
}

let newProduct=(req,res)=>{
    let obj={
        status:1,
        data:"Home new Product API"
    }
    res.send(obj)
}

let enquirySave=(req,res)=>{
    let obj={
        status:1,
        data:"Home enquiry API"
    }
    res.send(obj)
}

module.exports={homeSlider,newProduct,enquirySave}