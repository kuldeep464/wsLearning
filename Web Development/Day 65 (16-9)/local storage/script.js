let form = document.querySelector("form")
let tbody=document.querySelector("tbody")
let clearStorage=document.querySelector("#clearstorage")
let particularDelete=document.querySelector("#particularDelete")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let userOldData = JSON.parse(localStorage.getItem("user")) ?? []
    let userobj ={
        name:event.target.name.value,
        email:event.target.email.value,
        phone:event.target.phone.value
    }
    userOldData.push(userobj)
    localStorage.setItem("user", JSON.stringify(userOldData))
    console.log(userOldData)
    event.target.reset()
        userlist()
})

let userlist =()=>{
    let rows='';
    tbody.innerHTML=''
    let userOldData = JSON.parse(localStorage.getItem("user")) ?? []

    console.log(userOldData)
    userOldData.forEach((element,index) => {
        rows+= ` <tr>
                    <td>${index + 1}</td>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.phone}</td>
                    <td><button onclick=deleteparticular(${index})>Delete</button></td>
                    <td>Edit</td>
                </tr>`
       
    });
    tbody.innerHTML=rows

    
}
userlist()

clearStorage.addEventListener("click",()=>{
    let userOldData = JSON.parse(localStorage.getItem("user")) ?? []
    localStorage.removeItem("user")
    userlist()

})

function deleteparticular (index){
    console.log(index)
    let userOldData = JSON.parse(localStorage.getItem("user")) ?? []
    userOldData.splice(index,1)
    localStorage.setItem("user", JSON.stringify(userOldData))
    userlist()
}