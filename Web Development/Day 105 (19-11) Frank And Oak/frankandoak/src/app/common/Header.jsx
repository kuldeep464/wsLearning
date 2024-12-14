"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import LoginModal from '../modal/LoginModal';
import { Carousel } from "flowbite-react";

export default function Header() {
    const [openModal, setOpenModal] = useState(false);
    let modalData = { openModal, setOpenModal }
    return (
        <header >

            <LoginModal modalFunction={modalData} />
            <div className='bg-gray-900 flex justify-between h-[30px] items-center px-4 '>
                <Carousel indicators={false} className='w-[60%] mx-auto'>
                    <h5 className='text-white text-center w-[90%] font-semibold text-[13px]'>Enjoy free shipping on orders $99+ and extended returns until January 12th</h5>
                    <h5 className='text-white text-center w-[90%] font-semibold text-[13px]'>Let's share the magic! Frank And Oak's Holiday Shop is here. Explore now</h5>
                    <h5 className='text-white text-center w-[90%] font-semibold text-[13px]'>Brrrrr! Warmth right this way. Sweaters for Women Sweaters for Men</h5>
                    <h5 className='text-white text-center w-[90%] font-semibold text-[13px]'>There's still time—but not much. Shop 40% off everything*. Shop Women Shop Men</h5>
                </Carousel>
                <div className='text-white flex items-center gap-2'>
                    <svg width="23" height="16" viewBox="0 0 23 16"><g fill="none" fillRule="evenodd"><path fill="#FFF" d="M0.5 0H22.5V16H0.5z"></path><path fill="#fa4b21" d="M22.4 14.933V16H0v-1.067h22.4zm0-2.133v1.067H0V12.8h22.4zm0-2.133v1.066H0v-1.066h22.4zm0-2.134V9.6H0V8.533h22.4zm0-2.133v1.067H0V6.4h22.4zm0-2.133v1.066H0V4.267h22.4zm0-2.134V3.2H0V2.133h22.4zM22.4 0v1.067H0V0h22.4z"></path><path fill="#3560b1" d="M0 0H9.6V7.467H0z"></path><use fill="#000" filter="url(#prefix__a)"></use><use fill="url(#prefix__c)"></use></g></svg>
                    <span className='text-[14px]'>$USD</span> <IoIosArrowDown />
                </div>
            </div>
            <div className='flex sticky z-10 top-[20px] justify-between items-center px-5 py-2 shadow-md'>
                <div className='w-[50%] flex justify-around items-center'>
                    <div>
                        <h2 className='text-[18px] font-bold'>Frank And Oak</h2>
                    </div>
                    <div className='text-[14px] flex gap-1 items-center text-red-600 font-semibold'>
                        <span className='hover:border-b-[0.1px] cursor-pointer border-black'>BLACK FRIDAY</span>
                        <svg className="sale-badge-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H6C6.13261 0.5 6.25979 0.552678 6.35355 0.646447L10.6496 4.9425C10.929 5.22355 11.0858 5.60372 11.0858 6C11.0858 6.39628 10.929 6.77646 10.6496 7.0575L10.6486 7.05856L7.06375 10.6434C6.92444 10.7828 6.75901 10.8935 6.57691 10.969C6.39481 11.0444 6.19962 11.0833 6.0025 11.0833C5.80538 11.0833 5.61019 11.0444 5.42809 10.969C5.24609 10.8935 5.08074 10.7829 4.94148 10.6436C4.9414 10.6435 4.94155 10.6437 4.94148 10.6436L0.646653 6.35376C0.552758 6.25998 0.5 6.13271 0.5 6V1ZM1.5 1.5V5.79272L5.64875 9.93665C5.69519 9.98314 5.75033 10.02 5.81103 10.0452C5.87173 10.0703 5.93679 10.0833 6.0025 10.0833C6.06821 10.0833 6.13327 10.0703 6.19397 10.0452C6.25467 10.02 6.30981 9.98314 6.35625 9.93665L9.9404 6.3525C9.94055 6.35235 9.9407 6.35219 9.94086 6.35204C10.0337 6.2584 10.0858 6.13188 10.0858 6C10.0858 5.86813 10.0337 5.7416 9.94086 5.64796C9.9407 5.64781 9.94055 5.64766 9.9404 5.6475L5.79289 1.5H1.5Z" fill="#ed2e00"></path><path fillRule="evenodd" clipRule="evenodd" d="M3 3.5C3 3.22386 3.22386 3 3.5 3H3.505C3.78114 3 4.005 3.22386 4.005 3.5C4.005 3.77614 3.78114 4 3.505 4H3.5C3.22386 4 3 3.77614 3 3.5Z" fill="#ed2e00"></path></svg>
                    </div>
                    <div className='font-semibold text-[14px] hover:border-b-[0.1px] cursor-pointer border-black'>Women</div>
                    <div className='font-semibold text-[14px] hover:border-b-[0.1px] cursor-pointer border-black'>Men</div>
                    <div className='font-semibold text-[14px] hover:border-b-[0.1px] cursor-pointer border-black'>The Holiday Shop</div>
                    <div className='font-semibold text-[14px] hover:border-b-[0.1px] cursor-pointer border-black'>About Us</div>
                </div>
                <div>
                    <div className='flex justify-end gap-4 items-center'>
                        <button>
                            <IoSearchOutline className='text-[23px] cursor-pointer' />
                        </button>
                        <button onClick={() => setOpenModal(true)}>
                            <FaRegCircleUser className='text-[20px] cursor-pointer' />
                        </button>
                        <button>
                            <CiHeart className='text-[23px] cursor-pointer' />
                        </button>
                        <button className='flex items-center'>
                            <IoBagHandleOutline className='text-[20px] cursor-pointer' />
                            <sup className='text-red-800'>0</sup>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
