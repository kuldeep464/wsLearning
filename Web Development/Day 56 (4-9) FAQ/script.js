let question = document.querySelectorAll(".faqItems h2")

question.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        element.nextElementSibling.classList.toggle("ansShow")
        element.children[0].classList.toggle("fa-plus")
        element.children[0].classList.toggle("fa-minus")


        question.forEach((el,elindex)=>{
            if(index!=elindex){
                el.nextElementSibling.classList.remove("ansShow")
                el.children[0].classList.add("fa-plus")
                el.children[0].classList.remove("fa-minus")
            }
        })
    })

    
})