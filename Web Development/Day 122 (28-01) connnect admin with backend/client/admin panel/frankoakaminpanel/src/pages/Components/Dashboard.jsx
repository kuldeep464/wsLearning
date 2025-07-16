import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp, FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { IoMdRadioButtonOn } from "react-icons/io";

export default function Dashboard() {
   
    return (
        <div>
            <div className='py-3 px-4'>
                Home / <span className='text-blue-700 font-semibold'>Dashboard</span>
            </div> <hr />

            <div className='grid grid-cols-3'>
                <div className='bg-[rgb(89,86,211)] flex justify-between h-[200px] m-7 mb-0  rounded-lg p-6'>
                    <div>
                        <div className='text-white flex gap-3 items-center'>
                            <h2 className='text-[25px] font-semibold'>26K</h2>
                            <span className='flex items-center text-[18px] font-semibold'>(-12.4% <FaLongArrowAltDown /> )</span>
                        </div>
                        <div className='text-[20px] text-white font-semibold'>Users</div>
                    </div>
                    <div className='text-white text-[25px] mt-3 h-8 cursor-pointer'>
                        <BsThreeDotsVertical />
                    </div>
                </div>


                <div className='bg-[rgb(41,152,254)] flex justify-between h-[200px] m-7 mb-0 rounded-lg p-6'>
                    <div>
                        <div className='text-white flex gap-3 items-center'>
                            <h2 className='text-[25px] font-semibold'>$ 6,200</h2>
                            <span className='flex items-center text-[18px] font-semibold'>(40.9% <FaLongArrowAltUp /> )</span>
                        </div>
                        <div className='text-[20px] text-white font-semibold'>Product</div>
                    </div>
                    <div className='text-white text-[25px] mt-3 h-8 cursor-pointer'>
                        <BsThreeDotsVertical />
                    </div>
                </div>


                <div className='bg-[rgb(252,176,30)] flex justify-between h-[200px] m-7 mb-0 rounded-lg p-6'>
                    <div>
                        <div className='text-white flex gap-3 items-center'>
                            <h2 className='text-[25px] font-semibold'>2.49%</h2>
                            <span className='flex items-center text-[18px] font-semibold'>(84.7% <FaLongArrowAltUp /> )</span>
                        </div>
                        <div className='text-[20px] text-white font-semibold'>Category</div>
                    </div>
                    <div className='text-white text-[25px] mt-3 h-8 cursor-pointer'>
                        <BsThreeDotsVertical />
                    </div>
                </div>


                <div className='bg-[rgb(233,83,83)] flex justify-between h-[200px] m-7 mb-0 rounded-lg p-6'>
                    <div>
                        <div className='text-white flex gap-3 items-center'>
                            <h2 className='text-[25px] font-semibold'>44K</h2>
                            <span className='flex items-center text-[18px] font-semibold'>( -23.6%  <FaLongArrowAltDown /> )</span>
                        </div>
                        <div className='text-[20px] text-white font-semibold'>Orders</div>
                    </div>
                    <div className='text-white text-[25px] mt-3 h-8 cursor-pointer'>
                        <BsThreeDotsVertical />
                    </div>
                </div>
            </div>
        </div>
       
    )
}
