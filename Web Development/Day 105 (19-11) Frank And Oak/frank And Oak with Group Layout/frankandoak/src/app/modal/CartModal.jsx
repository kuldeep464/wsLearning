'use client'
import React, { useContext, useState } from 'react'
import { LuMoveLeft } from "react-icons/lu";
import { cartModalsliderContext } from '../context/cartContext';
import { RxCross1 } from 'react-icons/rx';
import { CiHeart } from 'react-icons/ci';
import { FaChevronDown, FaChevronUp, FaMinus } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdLockOutline } from 'react-icons/md';

export default function CartModal() {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1
    };
    let { cartModalSlider, setCartModalSlider } = useContext(cartModalsliderContext)
    return (
        <div className={`h-[100vh] overflow-y-scroll w-[40vw] bg-white fixed top-0 duration-500  z-20 ${cartModalSlider ? 'right-0' : 'right-[-1000px]'} `}>
            <button className='p-3 flex gap-2 items-center ps-6 cursor-pointer' onClick={() => setCartModalSlider(false)}>
                <LuMoveLeft />
                <span>Continue Shopping</span>
            </button>
            <div className='p-1 font-semibold bg-black text-white text-center text-sm'>Enjoy free shipping on orders $99+ and free returns.</div>
            <div>
                <CartItems />
            </div>
            <div className='mt-5 mb-14'>
                <div className='bg-gray-100 py-2 ps-6'>Most popular right now</div>
                <div className='px-7 py-4'>
                    <Slider {...settings}>
                        <div>
                            <PopularItems />
                        </div>
                        <div>
                            <PopularItems />
                        </div>
                        <div>
                            <PopularItems />
                        </div>
                        <div>
                            <PopularItems />
                        </div>
                        <div>
                            <PopularItems />
                        </div>
                        <div>
                            <PopularItems />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='bg-gray-100 px-4 py-4 fixed bottom-0 z-10 w-[39.4%]'>
                <div className='flex justify-between items-center'>
                    <div><span className='font-semibold'>Subtotal </span><span className='text-gray-500'>(2 items)</span></div>
                    <div className='flex gap-3'>
                        <span className='text-gray-400 font-semibold line-through'>$718.00</span>
                        <span className='font-semibold'>$515.98</span>
                    </div>
                    
                </div>
                <div className='text-end text-[13px] py-1'>You're saving : $202.02</div>
                <a href={'/secure-checkout'}  className='flex gap-2 items-center w-[100%] bg-black text-white justify-center py-3 text-[18px]'>Secure Checkout <MdLockOutline /></a>
            </div>
        </div>
    )
}

function CartItems() {
    return (
        <div>
            <div className='grid p-3 grid-cols-[20%_auto]'>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2130242-719.01_320x.jpg?v=1729610640" className='h-[150px]' alt="" />
                </div>
                <div className='ps-3'>
                    <div className='relative my-2'>
                        <h2 className='text-sm font-semibold'>The Seawool® Crewneck Sweater in Fade Rose</h2>
                        <button className='absolute top-2 right-3'><RxCross1 /></button>
                    </div>
                    <div className='text-gray-400 mb-2 text-sm'>
                        Size : M
                    </div>
                    <div>
                        <button className='flex gap-2 items-center underline text-gray-500 text-sm'>Move to Wishlist <CiHeart /></button>
                    </div>
                    <div className='flex justify-end mb-2 items-center gap-3 text-[13px]'>
                        <span className='bg-yellow-200'> -43%</span>
                        <span className='line-through'>$119.00</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <button className='p-1 px-3 border-[0.5px]'><FaMinus className='text-[14px]' /> </button>
                            <div className=' px-3 border-[0.5px]'>1</div>
                            <button className='p-1 px-3 border-[0.5px]'><IoMdAdd /></button>
                        </div>
                        <div className='text-red-500 font-semibold'>$66.99</div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

function PopularItems() {
    let [dropdown, setDropdown] = useState(false)
    return (
        <div className='grid grid-cols-[25%_auto] h-[140px]'>
            <div className=''>
                <img className='h-[100%] w-[100%]' src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/1410254-1FH.01_450x.jpg?v=1727114662" alt="" />
            </div>
            <div className='px-2'>
                <div className='flex justify-between items-center text-[13px] font-semibold'>
                    <h2>The Capital Parka in Dart Grey</h2>
                    <span className='line-through'>$599.00</span>
                </div>
                <div className='text-red-500 text-end text-[14px] font-semibold'>$448.99</div>
                <div className='py-3'>
                    <button onClick={()=>setDropdown(!dropdown)} className='flex items-center gap-2 text-[13px] border-[0.5px] w-[100px]'>Select a size {dropdown ?<FaChevronUp />  :<FaChevronDown />  } </button>
                    {dropdown ?
                        <div className='absolute ps-4 overflow-y-scroll bg-white border-2 w-[100px] h-[70px] z-30'>
                            <div className='text-[12px] cursor-pointer hover:font-semibold my-1'>XS</div>
                            <div className='text-[12px] cursor-pointer hover:font-semibold my-1'>S</div>
                            <div className='text-[12px] cursor-pointer hover:font-semibold my-1'>L</div>
                            <div className='text-[12px] cursor-pointer hover:font-semibold my-1'>M</div>
                        </div>

                        :

                        ''

                    }
                </div>
                <div className='absolute bottom-2'>
                    <button className='py-1 px-3 text-sm border-[0.5px] border-black hover:bg-black hover:text-white duration-200'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
