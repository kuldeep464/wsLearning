let btn = document.querySelector("button")
let input = document.querySelector("input")
let myUL = document.querySelector("ul")

btn.addEventListener("click", () => {

    if (input.value == "") {
        alert("Please Enter Your To-Do")
    }

    else {
        let newLI = document.createElement("li")
        myUL.append(newLI);
        let inputValue = input.value
        newLI.innerHTML = inputValue
        input.value = ""
        let newSpan = document.createElement("span")
        newSpan.innerHTML = "X"
        newLI.append(newSpan)


        newLI.onclick = () => {
            newLI.classList.toggle("complete")
        }

        newSpan.onclick = () => {
            newLI.remove()
        }
    }
})