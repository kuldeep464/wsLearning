import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { main_context } from '../context/EcomContext'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-notifications/lib/notifications.css';
// import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function Home() {
    let { cartData, setCartData } = useContext(main_context)
    const [allProducts, setAllProducts] = useState([])

    const [Categories, setCategories] = useState([])
    
    const [loading, setLoading] = useState(false)


    const categoriesData = () => {
        let categoryApi = 'https://dummyjson.com/products/categories'
        axios.get(categoryApi)
            .then((apires) => {
                setCategories(apires.data)
            })
            .catch((eror) => console.log(eror))
    }

    const allproductsData = (url) => {
        let api;

        if (url == undefined) {
            api = 'https://dummyjson.com/products?limit=16'
        }
        else {
            api = url
        }


        axios.get(api)
            .then((res) => {
                setAllProducts(res.data.products)
                setLoading(true)
            })
            .catch((error) => console.log(error))
    }

    const filterCat = (url) => {
        allproductsData(url)
    }




    useEffect(() => {
        categoriesData()
        allproductsData()
    }, [])

    return (
        <>

            <div className=' py-4 w-[100%]'>
                <div className='w-[700px] mx-auto'>
                    <input type="text" placeholder='Search Products....' className='border-[1px] w-[100%] p-2 border-gray-500 rounded-lg' />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-[20%_auto] py-10 gap-7 px-4'>
                <div>
                    <h1 className='text-[30px] font-semibold py-4'>Categories</h1>
                    <div>
                        <ul className='p-3 bg-red-200'>

                            {Categories.map((v, i) => {
                                return (
                                    <>
                                        <li className='py-2 cursor-pointer' onClick={() => filterCat(v.url)}>
                                            {v.name}
                                        </li>
                                    </>
                                )
                            })}


                        </ul>
                    </div>
                </div>
                <div className='bg-slate-100 p-3'>
                    <h1 className='text-[30px] font-semibold py-4'>Products</h1>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>


                        {loading ?
                            allProducts.map((v, i) => {
                                return (
                                    <Productitems v={v} />
                                )
                            })
                            :
                            <>
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                                <Loading />
                            </>
                        }




                    </div>
                </div>
            </div>
        </>
    )
}

let Productitems = ({ v }) => {
    let { cartData, setCartData } = useContext(main_context)


    let addToCart = (value) => {
        let newObj = {
            image: value.thumbnail,
            title: value.title,
            brand: value.brand,
            price: value.price,
            id: value.id,
            quantity: 1
        }

        let check = cartData.some((v, i) => v.id == newObj.id)
        if (!check) {
            setCartData([...cartData,newObj])
            toast.success("Item added to cart ")
        }
        else {
            toast.error("Item already exists in Cart")
        }
        
    }

    return (

        <div className="w-full max-w-sm mx-auto rounded-md shadow-md px-3 overflow-hidden">
            <ToastContainer />
            {/* <NotificationContainer/> */}
            <div className="flex items-end justify-end h-56 w-full bg-cover ">

                <img src={v.thumbnail} className='w-[100%] h-[100%] object-cover' alt="" />

                <button onClick={()=>addToCart(v)} className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 absolute z-10">
                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </button>
            </div>
            <Link to={`/Product-Detail/${v.id}`} >
                <div className="py-3 h-[100px] relative">
                    <h3 className="text-gray-700 uppercase">{v.title}</h3>
                    <div className='absolute bottom-2 w-[100%]'>
                        <div className='flex items-center justify-between w-[100%]'>
                            <span className="text-gray-500 mt-2">$ {v.price}</span>
                            <span className='text-red-500'>view details...</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}



let Loading = () => {
    return (


        <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
        </div>

    )
}
