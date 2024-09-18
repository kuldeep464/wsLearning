let form = document.querySelector("form")
let box = document.querySelector(".box")
box.style.display = "none"
form.addEventListener("submit", async (event) => {
    event.preventDefault()
    let cityName = event.target.cityName.value

    let getapi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`)
    let finalapi = await getapi.json()
    console.log(finalapi)

    if (finalapi.cod == 404 || finalapi.cod == 400) {
        alert(finalapi.message)
    }

    else {
        box.style.display = "block"
        let { name, sys, main, weather } = finalapi

        box.innerHTML = `<h2>${name}
                <mark>
                    ${sys.country}
                </mark>
            </h2>
            <h1>${main.temp} <span>&deg;C</span>
            </h1>
            <figure>
                <img src="https://openweathermap.org/img/w/${weather[0].icon}.png" alt="">
            </figure>
            <p>${weather[0].description}</p>`

    }
})

let heading = document.querySelector("#heading")
setInterval(() => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    console.log(red)
    heading.style.color = `rgb(${red}, ${green},${blue})`
}, 500);
