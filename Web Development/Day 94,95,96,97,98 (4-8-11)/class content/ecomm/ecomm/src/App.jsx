
import axios, { all } from 'axios'
import './App.css'
import Header from './comman/Header'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function App() {

  

  // cat-work
  const [allCat, setAllCat] = useState([])
  let displayCat = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => {
        setAllCat(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  // product-work
  const [allproduct, setAllproduct] = useState([])
  const [myLoading,setMyLoading]=useState(false)

  const displayProduct=(url)=>{
    setMyLoading(false)

    let Api;
    
    if(url==undefined){
      Api='https://dummyjson.com/products?limit=100'
    }
    else{
      Api=url
    }

    axios.get(Api)
    .then((res)=>{
      setAllproduct(res.data.products)
      setMyLoading(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  // filter-work
  let filterCat=(url)=>{
    displayProduct(url)
  }


  useEffect(() => {
    displayCat()
    displayProduct()
  }, [])



  return (
    <>
      
      <div className="grid grid-cols-[20%_auto] px-[50px] gap-5 bg-slate-300 ">

        <div className="left ">
          <h2 className='text-[25px] font-bold text-center py-[10px] ' > All Category </h2>


          <ul className=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {allCat.map((v) => {
                
              return (
                <>
                  <li className="w-full px-4 py-2 rounded-b-lg " onClick={()=>filterCat(v.url)} > {v.name} </li>
                </>
              )
            })}

          </ul>


        </div>

        <div className="right  ">
          <h2 className='text-[25px] font-bold text-center py-[10px] ' > All Product </h2>
          <div className='grid grid-cols-4 gap-5 '>

            

            {myLoading==true ?
              allproduct.map((v)=>{
              return(
                <>
                <Card data={v} />
                </>
              )
            })
              :
               <>
               <Loading/>
               <Loading/>
               <Loading/>
               <Loading/>
               <Loading/>
               <Loading/>
               <Loading/>
               <Loading/>
               </>
               }

          </div>
        </div>

      </div>
    </>
  )
}

export default App

let Card = ({data}) => {
  
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={data.thumbnail} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {data.title} </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> $ : {data.price} </p>
        <Link to={`/product-details/${data.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more Id :- {data.id}
          
        </Link>
      </div>
    </div>
  )
}



let Loading=()=>{
  return(
    

<div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
</div>

  )
}