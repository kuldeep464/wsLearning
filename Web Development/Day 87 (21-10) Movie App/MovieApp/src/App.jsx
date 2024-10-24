import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  let [movieTitle , setMovieTitle] = useState('')
  const [AllMovie, setAllMovie] = useState([])

  let getMovie=()=>{
    let apiurl

    if(movieTitle===''){
      apiurl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
    }
    else{
       apiurl=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${movieTitle}`
    }

    axios.get(apiurl)
    .then((apiRes)=>apiRes.data)
    .then((finalRes)=>{
      setAllMovie(finalRes.results)
    })
  }

  useEffect(()=>{
    getMovie()
  }, [movieTitle])

  return (
    <>
      <h1 className='text-center py-5 bg-gray-500 text-[40px] font-bold text-white'>Movie App</h1>
      <div className='grid grid-cols-1 sm:grid-cols-[15%_auto] max-w-[1100px] mx-auto gap-[30px] py-8 items-center'>
        <h3 className='text-[20px] bg-red-500 rounded-[10px] p-2 text-center text-white' >Movie Search </h3>
        <form action="">
          <input type="text" value={movieTitle} onChange={(event)=>setMovieTitle(event.target.value)} className='border-[1px] border-black rounded-[10px] w-[100%] h-[30px] p-5' placeholder='Insert Movie Name Here....' />
        </form>
      </div>

      <div className='py-[40px] max-w-[1100px] mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]'>

          {
            AllMovie.length>=1
            
            ?

            AllMovie.map((items,index)=>{
              return(
                <MovieItems data={items} key={index}/>
              )
            })

            : 

            <>
              <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
            </>
          }

            

        </div>
      </div>
    </>
  )
}

export default App

function MovieItems({data}) {
  let {poster_path,release_date,original_title}=data
  let staticUrl=`https://image.tmdb.org/t/p/w1280`
  console.log(data)
  return (
    <div className='shadow-[0px_0px_10px_5px_gray] rounded-[0px_0px_10px_10px] '>
      <a href="">
        <img src={staticUrl+poster_path} alt="" />
        <div className='p-2 h-[70px] bg-red-500 text-white font-semibold rounded-[0px_0px_10px_10px] flex justify-between'>
          <h3 className=''> {original_title}</h3>
          <span className=''> {release_date} </span>
        </div>
      </a>
    </div>
  )
}
