let headerbookbtnElement=document.querySelector(".headerbookbtn")
let buttonBook=document.querySelector(".buttonBook")
let blackpopupoverlay=document.querySelector(".blackpopupoverlay")
let closespanbtn=document.querySelector(".headerbookbtn h2 span")

buttonBook.addEventListener("click",()=>{
    headerbookbtnElement.classList.add("headerbookbtnShow")
    blackpopupoverlay.classList.add("blackpopupoverlayShow")
})

let closemodel=()=>{
    headerbookbtnElement.classList.remove("headerbookbtnShow")
    blackpopupoverlay.classList.remove("blackpopupoverlayShow")
}

closespanbtn.addEventListener("click",closemodel)

blackpopupoverlay.addEventListener("click",closemodel)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let galleryitems=document.querySelector(".galleryItems")
let galleryModel=document.querySelector(".galleryModel")
let modalimage=document.querySelector(".galleryModel img")
let gallerycross=document.querySelector(".galleryModel span")

galleryitems.addEventListener("click",(event)=>{
    let element=event.target
    if(element.tagName=='IMG'){
        let currentimagesrc=element.src
        modalimage.src=currentimagesrc
        blackpopupoverlay.classList.add("blackpopupoverlayShow")
        galleryModel.classList.add("galleryModelShow")
    }
})

let galleryClose=()=>{
    galleryModel.classList.remove("galleryModelShow")
    blackpopupoverlay.classList.remove("blackpopupoverlayShow")
}

gallerycross.addEventListener("click",galleryClose)

blackpopupoverlay.addEventListener("click",galleryClose)