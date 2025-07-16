'use client'
import { fetchCart } from '@/app/slice/cartSlice'
import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export default function ProductDetailing() {
    let [product, setProduct] = useState(null)
    let [colorId,setColorId]=useState(null)
    let [sizeId,setSizeId]=useState(null)
    let token=useSelector((store)=>store.loginStore.token)

   
    let [staticImagePath, setStaticImagePath] = useState(null)
    let { id } = useParams()
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    let dispatch=useDispatch()

    let getProduct = () => {
        axios.get(`${apiBaseUrl}web/product/product-detail/${id}`)
            .then((res) => {
                // console.log(res.data.data)
                setProduct(res.data.data)
                setStaticImagePath(res.data.staticImagePath)
                setColorId(res.data.data.colorName[0]._id)
                setSizeId(res.data.data.sizeName[0]._id)
            })
    }

    useEffect(() => {
        getProduct()
    }, [])

    let addToCart=()=>{
        if(token==''){
            alert('Please login to add the product to cart')
            return
        }
        let productId=product._id
        let quantity=1
        let obj={
            product:productId,
            sizeId,
            colorId,
            quantity
        }
        console.log(obj)
        axios.post(`${apiBaseUrl}web/cart/add-to-cart`,obj,{
            headers:{authorization:`Bearer ${token}`}
        })
        .then((res)=>{
            console.log(res.data)
            Swal.fire({
                title: "Good job!",
                text: res.data.msg,
                icon: "success"
            });
            dispatch(fetchCart())

        })
        .catch((error)=>{
            console.log(error)
        })
    }


    return (
        <div>
            {product &&


                <div>
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                <Link href="/" className="hover:underline hover:text-gray-600">Go To Home Page</Link>
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                            <div className="flex flex-col items-center md:flex-row -mx-4">
                                <div className="md:flex-1  px-4">
                                    <div className='flex justify-center'>
                                        <img className='w-[200px] h-[300px]' src={`${apiBaseUrl + staticImagePath.productImagePath + product.productImage}`} alt="" />
                                    </div>
                                </div>
                                <div className="md:flex-1 px-4">
                                    <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.productName}</h2>
                                    <p className="text-gray-500 text-sm">By <a href="#" className="text-indigo-600 hover:underline">ABC Company</a></p>

                                    <div className="flex items-center space-x-4 my-4">
                                        <div>
                                            <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                                <span className="text-indigo-400 mr-1 mt-1">Rs</span>
                                                <span className="font-bold text-indigo-600 text-3xl">{product.productMRP}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-green-500 text-xl font-semibold">Saved Rs {product.productPrice - product.productMRP}</p>
                                            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-500">{product.productDescription}</p>

                                    <div className=" flex gap-6 py-4 mt-3 space-x-4">
                                        <button onClick={addToCart} type="button" className='bg-blue-700 hover:shadow-xl hover:scale-110 duration-300 py-2 px-4 rounded-[10px] text-white'>
                                            Add to Cart
                                        </button>

                                        <button type="button" className='bg-red-700 hover:shadow-xl hover:scale-110 duration-300 py-2 px-4 rounded-[10px] text-white'>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-20'>
                                <div className='flex justify-start mt-10 gap-5'>
                                    {product.productGallery.map((items, index) => {
                                        return (
                                            <img key={index} className='w-[150px] h-[200px]' src={`${apiBaseUrl + staticImagePath.productGalleryPath + items}`} alt="" />
                                        )
                                    })}
                                </div>
                                <div>
                                    <span className='text-[22px] font-semibold'>Sizes:</span>
                                    <div className='flex gap-4'>
                                        {product.sizeName.map((item, index) => {
                                            console.log(sizeId)
                                            return (

                                                <button key={index} onClick={()=>setSizeId(item._id)} className='bg-black text-white py-1 px-2 rounded '>{item.sizeName}</button>
                                            )
                                        })}
                                    </div>

                                </div>

                                <div>
                                    <span className='text-[22px] font-semibold'>Colors:</span>
                                    <div className='flex gap-4'>
                                        {product.colorName.map((color, index) => {
                                            return (
                                                <div key={index} onClick={() => setColorId(color._id)} className='border-[0.1px] rounded-[50%] p-[2px] border-black cursor-pointer' >
                                                    <div className={`w-[10px] h-[10px] rounded-[50%] `} style={{ background: color.colorName }}></div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}
