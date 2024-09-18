let input=document.querySelector("input")
let table=document.querySelector("table")

table.addEventListener("click",(event)=>{
    let opr=["+","-","*","/","."]
    let targetPoint=event.target
    let oldvalue=input.value
    let lastChar=oldvalue[oldvalue.length-1]
    let removelastChar=oldvalue.slice(0,oldvalue.length-1)
    if(targetPoint.tagName=="BUTTON"){
        if(targetPoint.innerHTML=="C"){
            input.value=''
        }
        else if(targetPoint.innerHTML=="="){
            input.value=eval(input.value)
        }
        else{
            if(opr.includes(targetPoint.innerHTML) && opr.includes(lastChar)){
                input.value=removelastChar+targetPoint.innerHTML
            }
            else{
                input.value=oldvalue+targetPoint.innerHTML
            }
   
        }
    }
})