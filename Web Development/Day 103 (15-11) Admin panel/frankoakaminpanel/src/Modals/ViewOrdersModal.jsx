import React from 'react'
import { RxCross1 } from 'react-icons/rx'

export default function ViewOrdersModal({ openModal, setOpenModal }) {
    return (
        <div className={`${openModal ? 'block0' : 'hidden'}`}>
            <div className='w-[100%] h-[100%] z-10 bg-black opacity-50 fixed top-0 left-0' onClick={()=>setOpenModal(false)}></div>

            <div className='relative'>
                <div className='w-[80%] h-[70%]  bg-white rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20'>
                    <div className='flex justify-between items-center border-b-2 py-4 px-4'>
                        <h2 className='text-xl font-semibold'>Product Image's & Price</h2>
                        <button className='cursor-pointer' onClick={()=>setOpenModal(false)}><RxCross1 /></button>
                    </div>
                    <div className='p-3 h-[85%] grid grid-cols-[68%_auto]'>
                        <div className='flex flex-col gap-4 overflow-auto mx-3'>
                            <OrderItems />
                            <OrderItems />
                            
                        </div>
                        <div className='border-2 p-2 h-full rounded-lg'>
                            <h2 className='font-semibold text-2xl'>Product Details</h2>
                            <p className='mb-5'>Roshan Chaurasia, First Floor , Laxmi Tower, Bhaskar Circle, Ratanada, PRAYAGRAJ, UTTAR PRADESH 211003 India</p>
                            <h2 className='font-semibold text-2xl'>Order Summary</h2>
                            <div className='flex gap-3 items-center py-2'> 
                                <h3 className='text-lg  font-semibold'> Item(s) Subtotal : </h3>
                                  ₹ 3500
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
                                  ₹ 3500
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function OrderItems() {
    return (
        <div className='flex gap-3 items-center mt-2'>
            <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19796322/2022/9/15/e17ac111-a42a-48be-b5ef-c627ae91db811663233930653-Roadster-Mens--Printed-Navy-Blue-Round-Neck-Short-Sleeves-T--1.jpg" className='w-[120px] h-[150px]' alt="" />
            <div className='flex flex-col gap-2'>
                <h2 className='font-semibold text-red-500'>Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt</h2>
                <div> <span className='font-semibold text-[17px]'>Price :</span>   ₹ 1500</div>
                <div> <span className='font-semibold text-[17px]'>Quantity :</span>    1</div>
                <div> <span className='font-semibold text-[17px]'>Size : </span>    Xl</div>
                <div> <span className='font-semibold text-[17px]'>Color : </span>    Red</div>
            </div>
        </div>
    )
}
