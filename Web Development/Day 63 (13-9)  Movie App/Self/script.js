let apiurl;
let movieBox = document.querySelector(".movieBox")
let movieinput=document.querySelector("#movieinput")
let getmovies = async(title='')=>{

    if(title==''){
          apiurl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
    }

    else{
        apiurl=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`
    }
  

    let imgstaticurl = `https://image.tmdb.org/t/p/w1280`

    let apiData = await fetch(apiurl)
    let finalData= await apiData.json()
    let {results} = finalData
    let displayData = ''
    results.forEach((movieobj)=>{
        let {original_title , release_date , poster_path, overview}=movieobj
        displayData+= `<div class="movieItems">
                <img src="${imgstaticurl+poster_path}" alt="">
                <h3> ${original_title} | ${release_date} </h3>
            </div>`
    })
    movieBox.innerHTML= displayData
}

movieinput.addEventListener("keyup",()=>{
    getmovies(movieinput.value)
})

getmovies()