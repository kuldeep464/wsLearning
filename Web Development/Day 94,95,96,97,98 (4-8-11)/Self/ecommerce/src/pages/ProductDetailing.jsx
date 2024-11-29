import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { main_context } from '../context/EcomContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetailing() {
    const [storeData, setStoreData] = useState(null)
    let [loading, setLoading] = useState(false)
    let [childImg, setChildImg] = useState([])
    let [smallToBig, setSmallToBig] = useState(null)

    let Id = useParams().id


    let displaySingleProductDetail = () => {
        axios.get(`https://dummyjson.com/products/${Id}`)
            .then((res) => {
                // console.log(res.data)
                setStoreData(res.data)
                setChildImg(res.data.images)
                setSmallToBig(res.data.thumbnail)
                setLoading(true)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    /// wishlist work
    let { wishData, setWishData } = useContext(main_context)
    let [heart, setHeart] = useState(false)
    let check

    let addToWishlist = (Data) => {

        let newObj = {
            image: Data.thumbnail,
            title: Data.title,
            brand: Data.brand,
            price: Data.price,
            id: Data.id,
            quantity: 1
        }

        check = wishData.some((v, i) => v.id == newObj.id)
        if (!check) {
            setWishData([...wishData, newObj])
            toast.success("Item added to Wishlist!")
            setHeart(true)

        }
        else {
            toast.error("This Item already in Wishlist")
        }

        console.log(wishData)
    }
    useEffect(() => {
        displaySingleProductDetail()
    }, [])

    return (
        <div className='max-w-[1320px] mx-auto'>
            <Link to={'/'} className="flex font-semibold text-indigo-600 text-sm mt-10">

                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                Go To Home Page
            </Link>
            <ToastContainer />

            {loading ?
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                    <div className="max-w-[1200px] px-5 py-24 mx-auto" style={{ cursor: 'auto' }}>
                        <div className="grid grid-cols-[auto_30%_50%]">
                            <div>

                                {childImg.map((v) => {
                                    return (
                                        <img src={v} alt="" className='w-[50%] bg-gray-300 rounded-md my-5' onMouseOver={() => setSmallToBig(v)} />
                                    )
                                })}


                            </div>
                            <img
                                alt="ecommerce"
                                className="object-cover object-center rounded h-[70%] "
                                src={smallToBig}
                                style={{ cursor: 'auto' }}
                            />
                            <div
                                className="w-[70%] lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                                style={{ cursor: 'auto' }}
                            >
                                <h2 className="text-sm title-font text-gray-500 tracking-widest" style={{ cursor: 'auto' }}>
                                    ON SALE
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" style={{ cursor: 'auto' }}>
                                    {storeData.title}
                                </h1>

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
                                                    fill='none'
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M6 9l6 6 6-6" ></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-900">$ {storeData.price}</span>
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                        Buy
                                    </button>
                                    <button onClick={() => addToWishlist(storeData)} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">

                                        {heart ?
                                            <svg
                                                fill="red"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                            </svg>
                                            :
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                            </svg>
                                        }




                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                'Please Wait.....'
            }



        </div>
    );
}
