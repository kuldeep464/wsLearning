import React, { useContext, useEffect, useState } from 'react';
import Header from './comman/Header';
import { json, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { main_context } from './context/EcommContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


export default function ProductDetail() {

  // console.log(useLocation())
  const [storeData, setStoreData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [bigImg, setBigImg] = useState([])
  const [smallImg, setsmallImg] = useState(null)


  let Id = useParams().id;

  const displaySingleData = () => {
    axios.get(`https://dummyjson.com/products/${Id}`)
      .then((ress) => {
        setStoreData(ress.data)
        setBigImg(ress.data.images)
        setsmallImg(ress.data.thumbnail)
        setLoading(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    displaySingleData()
  }, [])


  //wishlist-work
  let { wishData, setWishData } = useContext(main_context)
  const [heart, setHeat] = useState(false)

  let addtoCart = (data) => {

    let newObj = {
      image: data.thumbnail,
      price: data.price,
      title: data.title,
      brand: data.brand,
      quntity: 1,
      id:data.id
    }
    let isCheckItem=wishData.some((p)=>p.id==newObj.id  )

    if(!isCheckItem){
      setWishData([...wishData, newObj])
      toast.success("item Add in Wishlist")
      setHeat(true)
    }
    else{
      toast.error("this Item already add in wishlist ")
    }
    
    
   


  }
  return (
    <div>
      <ToastContainer />
      {loading == true ?
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
          <div className="container px-5 py-24 mx-auto">
            <div className="grid grid-cols-[auto_40%_50%]">
              <div className=''>
                {bigImg.map((v) => {
                  return (
                    <>
                      <div className='border w-[120px] m-[10px] bg-slate-200 ' onMouseOver={() => setsmallImg(v)} >
                        <img src={v} />
                      </div>
                    </>
                  )
                })}


              </div>

              <div className='border  '>
                <img
                  alt="ecommerce"
                  className=" w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={smallImg}
                />
              </div>

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">ON SALE</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"> {storeData.title} </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        fill={index < 4 ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-3">20 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                    {['facebook', 'twitter', 'instagram'].map((platform) => (
                      <a key={platform} className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          {/* Path data for each icon */}
                        </svg>
                      </a>
                    ))}
                  </span>
                </div>
                <p className="leading-relaxed">
                  {storeData.description}
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">$ {storeData.price} </span>

                    
                  <button onClick={() => addtoCart(storeData)} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  {heart ?
                      <FaHeart className='text-[red]' />
                      : 
                      <CiHeart className='text-[18px]' /> 
                      }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        "Please Wait........"
      }


    </div>
  );
}
