"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function PageDetailing() {
  let { id } = useParams()
  let [productDetailingData, setProductDetailingData] = useState(null)

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setProductDetailingData(finalRes)
      })
  }, [])



  return (
    <div>


      {productDetailingData != null ?

        <div className='max-w-[1320px] mx-auto grid grid-cols-2 items-center mt-20'>
          <div>
            <img src={productDetailingData.thumbnail} alt="" />
          </div>
          <div>
            <h2 className='text-3xl py-4 font-bold'>{productDetailingData.title}</h2>
            <p className='text-gray-700 py-5'>{productDetailingData.description}</p>
            <h3 className='pb-5 text-2xl font-semibold'>Rs {productDetailingData.price}</h3>
            <div className='flex flex-col items-start gap-5'>
              <button className='px-4 py-2 bg-blue-700 text-white font-semibold rounded-md'>Add To Cart</button>
              <button className='px-4 py-2 bg-green-700 text-white font-semibold rounded-md'>Buy Now</button>
            </div>
          </div>
        </div>

        :



        <div className='flex items-center justify-center h-screen'>
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
        </div>

      }




    </div>
  )
}
