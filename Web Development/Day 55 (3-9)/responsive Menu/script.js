let micon=document.querySelector(".micon")
let navigation=document.querySelector("header nav")

micon.addEventListener("click",()=>{
    navigation.classList.toggle('showNav')
    micon.classList.toggle('fa-bars')
    micon.classList.toggle('fa-xmark')
})