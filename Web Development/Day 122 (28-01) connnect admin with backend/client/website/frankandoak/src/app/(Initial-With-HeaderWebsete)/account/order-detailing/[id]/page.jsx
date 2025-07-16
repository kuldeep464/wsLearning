'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function OrderDetailing() {
    let [singleOrderData, setSingleOrderData] = useState(null)
    let [staticPath, setStaticPath] = useState('')
    let { id } = useParams()
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    let token = useSelector((store) => store.loginStore.token)
    let singleOrder = () => {
        axios.get(`${apiBaseUrl}web/order/single-order/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        )
            .then((res) => {
                setSingleOrderData(res.data.data)
                setStaticPath(res.data.staticPath)
            })
            
    }
    useEffect(() => {
        singleOrder()
        
    }, [])
    return (
        <div>
            {singleOrderData ?
                <div>
                    <div>
                        <h1 className='text-[30px] text-center my-5 font-semibold'>My Order Details</h1>
                    </div>
                    <div className='max-w-[1170px] mx-auto border-[1px] py-6 border-gray-600 my-7 rounded-[10px] p-4'>
                        <div className='flex justify-between items-center '>
                            <div>
                                <h3 className='mb-2'>Order Id : <span className='text-blue-500'>{singleOrderData._id}</span></h3>
                                <h3>Order Date: <span className='text-gray-500'>{singleOrderData.createdAt.split('T')[0]}</span></h3>
                            </div>
                            <div>
                                <button className='bg-black px-4 py-2 rounded-xl text-white'>Track your order</button>
                            </div>
                        </div>
                        <hr className='mt-4 border-gray-600' />
                        {singleOrderData.orderItems.map((item, index) => {
                            console.log(item)
                            return (
                                <div key={index} className='mt-6 grid grid-cols-[50%_auto]  items-center'>
                                    <div className='flex gap-3 items-center'>
                                        <div>
                                            <img className='w-[100px] h-[100px]' src={apiBaseUrl + staticPath + item.product.productImage} alt="" />
                                        </div>
                                        <div>
                                            <h3 className='font-semibold text-[17px] capitalize'>{item.product.productName}</h3>
                                            <p className='text-gray-600'>{item.product.productShortDescription}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-10 items-center '>
                                        <div>
                                            <h4>Price</h4>
                                            <p className='text-gray-600'>Rs {item.product.productMRP}</p>
                                        </div>
                                        <div>
                                            <h4>Quantity</h4>
                                            <p className='text-gray-600'>{item.quantity} </p>
                                        </div>
                                        <div>
                                            <h4>Order Status</h4>
                                            <p className='text-green-500'>Ready for delivery</p>
                                        </div>
                                        <div>
                                            <h4>Expected Delivery Date</h4>
                                            <p className='text-green-500'>15-04-2025</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>

                :


                <div className='flex justify-center my-20'>
                    <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">Loading...</div>
                    </div>
                </div>


            }
        </div>
    )
}
