import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'

export default function ViewOrdersModal({ openModal, setOpenModal ,order , imageStaticPath}) {
    let [subTotal,setSubTotal]=useState(0)
    
    useEffect(()=>{
        let totalPrice = 0
        if (order) {
            // console.log(cartData)
            order.orderItems.forEach((items) => {
                console.log(items)
                totalPrice += items.product.productMRP * items.quantity
                setSubTotal(totalPrice)
            })
        }
    },[order])
    // console.log(order)
    let apiBasePath = import.meta.env.VITE_APIBASEPATH
    return (
        <div className={`${openModal ? 'block0' : 'hidden'}`}>
            
            <div className='w-[100%] h-[100%] z-10 bg-black opacity-50 fixed top-0 left-0' onClick={()=>setOpenModal(false)}></div>

            <div className='relative'>
                <div className='w-[80%] h-[70%]  bg-white rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20'>
                    <div className='flex justify-between items-center border-b-2 py-4 px-4'>
                        <h2 className='text-xl font-semibold'>Order Image's & Price</h2>
                        <button className='cursor-pointer' onClick={()=>setOpenModal(false)}><RxCross1 /></button>
                    </div>
                    <div className='p-3 h-[85%] grid grid-cols-[68%_auto]'>
                        <div className='flex flex-col gap-4 overflow-auto mx-3'>

                            {  order &&
                            order.orderItems.map((item,index)=>{
                                return(
                                    <OrderItems key={index} item={item} imageStaticPath={imageStaticPath} />

                                )
                            })}
                        
                            
                            
                        </div>
                        <div className='border-2 p-2 h-full rounded-lg'>
                            <h2 className='font-semibold text-2xl'>Order Details</h2>
                            <p className='mb-5'>
                               {order &&  order.shippingDetails.orderFirstName+ ' ' + order.shippingDetails.orderLastName + ', ' +order.shippingDetails.orderApartment + ' ' + order.shippingDetails.orderAddress + ' ' +order.shippingDetails.orderCity + ' ' + order.shippingDetails.orderState + ' ' + order.shippingDetails.orderZipCode + ' ' + order.shippingDetails.orderCountry }
                            </p>
                            <h2 className='font-semibold text-2xl'>Order Summary</h2>
                            <div className='flex gap-3 items-center py-2'> 
                                <h3 className='text-lg  font-semibold'> Item(s) Subtotal : </h3>
                                  ₹ {subTotal}
                            </div>
                            <div className='flex gap-3 items-center py-2'> 
                                <h3 className='text-lg  font-semibold'> Cash / Pay on Delivery : </h3>
                                ₹ 0
                            </div>
                            <div className='flex gap-3 items-center py-2'> 
                                <h3 className='text-lg  font-semibold'> Shipping :</h3>
                                ₹ 0
                            </div>
                            <div className='flex gap-3 items-center py-2'> 
                                <h3 className='text-lg  font-semibold'> Grand Total:  </h3>
                                  ₹ {order.orderAmount}
                                  <h4 className='text-sm'>(inclusive of all Taxes)</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function OrderItems({item,imageStaticPath}) {
    let apiBasePath = import.meta.env.VITE_APIBASEPATH
    return (
        <div className='flex gap-3 items-center mt-2'>
            <img src={ `${apiBasePath+imageStaticPath.productImage+item.product.productImage}`} className='w-[120px] h-[150px]' alt="" />
            <div className='flex flex-col gap-2'>
                <h2 className='font-semibold text-red-500'>{item.product.productName}</h2>
                <div> <span className='font-semibold text-[17px]'>Price :</span>   ₹ {item.product.productMRP}</div>
                <div> <span className='font-semibold text-[17px]'>Quantity :</span>    {item.quantity}</div>
                <div> <span className='font-semibold text-[17px]'>Size : </span>    {item.sizeId.sizeName}</div>
                <div> <span className='font-semibold text-[17px]'>Color : </span>  {item.colorId.colorName}  </div>
            </div>
        </div>
    )
}
