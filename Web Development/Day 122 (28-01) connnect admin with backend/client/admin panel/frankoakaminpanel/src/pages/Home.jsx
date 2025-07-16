import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp, FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { IoMdRadioButtonOn } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Home() {

    let navigate=useNavigate()
    let loginData=useSelector((myAllStore)=>{
        return myAllStore.loginStore.adminDetails
    })
    useEffect(()=>{
        if(loginData==null){
            navigate("/")
        }
    },[loginData])
    

    
    let[asideDropDown,setAsideDropDown]=useState(-1)

    return (

        <div className='flex'>
            <aside className=' px-2 text-white w-[17%]   bg-[rgb(31,41,55)] scroll-m-0 ' >
                <div className='flex justify-center py-4 gap-3'>
                    <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                    <h2 className='text-[20px] font-semibold'>Frank and Oak</h2>
                </div>
                <hr />


                <div className='py-6'>
                    <Link to={'/home'} className='flex gap-3 items-center cursor-pointer group hover:bg-gray-600 p-2 rounded-md mb-2'>
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition duration-75 dark:text-gray-400  dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21"><path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"></path><path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"></path></svg>
                        <span className='text-[17px] font-semibold'>Dashboard</span>
                    </Link>
                    <Link to={'/home/profile'} className='flex cursor-pointer gap-3 group items-center mb-2  hover:bg-gray-600 p-2 rounded-md '>
                        <svg fill="currentColor" className="group-hover:text-white flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path></svg>
                        <span className='text-[17px] font-semibold'>Profile</span>
                    </Link >
                </div>

                <div>
                    <h2 className='uppercase font-semibold text-[13px] px-2 text-gray-400 mb-3'>Ecommerce components</h2>
                </div>

                <div className='w-[100%]'>
                    <div className='flex cursor-pointer gap-3 group  w-[100%] hover:bg-gray-600 p-2 rounded-md ' onClick={()=>asideDropDown!=1 ? setAsideDropDown(1) : setAsideDropDown(-1)}>
                        <svg fill="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"></path></svg>
                        <div className='w-[100%]' >
                            <span className='w-[100%] flex justify-between items-center mb-1 text-[17px] font-semibold'>Colors

                                {asideDropDown==1 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}

                            </span>

                        </div>
                    </div>
                    <div className={` group-hover:bg-gray-800 w-[100%] px-4 ${asideDropDown==1 ? '' : 'hidden'} `}>
                        <Link to={'/home/color/add-color'} className='group flex items-center gap-2 mb-2  hover:bg-gray-600 p-1 rounded-md '> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> Add Color </Link>
                        <Link to={'/home/color/view-color'} className='flex items-center gap-2 group  hover:bg-gray-600 p-1 rounded-md'> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> View Color </Link>
                    </div>
                </div>



                <div className='w-[100%]'>
                    <div className='flex cursor-pointer gap-3 group  w-[100%] hover:bg-gray-600 p-2 rounded-md ' onClick={()=>asideDropDown!=2 ? setAsideDropDown(2): setAsideDropDown(-1)}>
                        <svg fill="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M200 32L56 32C42.7 32 32 42.7 32 56l0 144c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312l0 144c0 13.3 10.7 24 24 24l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l144 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-144c0-13.3-10.7-24-24-24L312 32c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z"></path></svg>
                        <div className='w-[100%]' >
                            <span className='w-[100%] flex justify-between items-center mb-1 text-[17px] font-semibold'>Size

                                {asideDropDown==2 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}

                            </span>

                        </div>
                    </div>
                    <div className={` group-hover:bg-gray-800 w-[100%] px-4 ${asideDropDown==2 ? '' : 'hidden'} `}>
                        <Link to={'/home/size/size-details'} className='group flex items-center gap-2 mb-2  hover:bg-gray-600 p-1 rounded-md '> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> Size Details</Link>
                        <Link to={'/home/size/view-size'} className='flex items-center gap-2 group hover:bg-gray-600 p-1 rounded-md'> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> View Size </Link>
                    </div>
                </div>


                <div className='w-[100%]'>
                    <div className='flex cursor-pointer gap-3 group  w-[100%] hover:bg-gray-600 p-2 rounded-md ' onClick={()=>asideDropDown!=3 ? setAsideDropDown(3) : setAsideDropDown(-1)}>
                        <svg fill="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"></path></svg>
                        <div className='w-[100%]' >
                            <span className='w-[100%] flex justify-between items-center mb-1 text-[17px] font-semibold'>Parent Category

                                {asideDropDown==3 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}

                            </span>

                        </div>
                    </div>
                    <div className={` group-hover:bg-gray-800 w-[100%] px-4 ${asideDropDown==3 ? '' : 'hidden'} `}>
                        <Link to={'/home/parent-category/add-category'} className='group flex items-center gap-2 mb-2  hover:bg-gray-600 p-1 rounded-md '> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> Add Category</Link>
                        <Link to={'/home/parent-category/view-category'} className='flex items-center gap-2 group hover:bg-gray-600 p-1 rounded-md'> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> View Category </Link>
                    </div>
                </div>


                <div className='w-[100%]'>
                    <div className='flex cursor-pointer gap-3 group  w-[100%] hover:bg-gray-600 p-2 rounded-md ' onClick={()=>asideDropDown!=4 ? setAsideDropDown(4) : setAsideDropDown(-1)} >
                        <svg fill="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32L360 32l0 102.1 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23L312 32 120.1 32C111 12.8 91.6 0 69.5 0L24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"></path></svg>
                        <div className='w-[100%]' >
                            <span className='w-[100%] flex justify-between items-center mb-1 text-[17px] font-semibold'>Sub Category

                                {asideDropDown==4 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}

                            </span>

                        </div>
                    </div>
                    <div className={` group-hover:bg-gray-800 w-[100%] px-4 ${asideDropDown==4 ? '' : 'hidden'} `}>
                        <Link to={'/home/sub-category/add-sub-category'} className='group flex items-center gap-2 mb-2  hover:bg-gray-600 p-1 rounded-md '> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> Add Sub Category</Link>
                        <Link to={'/home/sub-category/view-sub-category'} className='flex items-center gap-2 group hover:bg-gray-600 p-1 rounded-md'> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> View Sub Category </Link>
                    </div>
                </div>


                <div className='w-[100%]'>
                    <div className='flex cursor-pointer gap-3 group  w-[100%] hover:bg-gray-600 p-2 rounded-md ' onClick={()=>asideDropDown!=5 ? setAsideDropDown(5) : setAsideDropDown(-1)}>
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"><path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"></path></svg>
                        <div className='w-[100%]' >
                            <span className='w-[100%] flex justify-between items-center mb-1 text-[17px] font-semibold'>Product

                                {asideDropDown==5 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}

                            </span>

                        </div>
                    </div>
                    <div className={` group-hover:bg-gray-800 w-[100%] px-4 ${asideDropDown==5 ? '' : 'hidden'} `}>
                        <Link to={'/home/product/product-details'} className='group flex items-center gap-2 mb-2  hover:bg-gray-600 p-1 rounded-md '> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> Product Details</Link>
                        <Link to={'/home/product/product-items'} className='flex items-center gap-2 group hover:bg-gray-600 p-1 rounded-md'> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> Product Items </Link>
                    </div>
                </div>


                <div className='w-[100%]'>
                    <div className='flex cursor-pointer gap-3 group  w-[100%] hover:bg-gray-600 p-2 rounded-md ' onClick={()=>asideDropDown!=6 ? setAsideDropDown(6): setAsideDropDown(-1)}>
                        <svg fill="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"></path></svg>
                        <div className='w-[100%]' >
                            <span className='w-[100%] flex justify-between items-center mb-1 text-[17px] font-semibold'>Story

                                {asideDropDown==6 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}

                            </span>

                        </div>
                    </div>
                    <div className={` group-hover:bg-gray-800 w-[100%] px-4 ${asideDropDown==6 ? '' : 'hidden'} `}>
                        <Link to={'/home/story/story-details'} className='group flex items-center gap-2 mb-2  hover:bg-gray-600 p-1 rounded-md '> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> Story Details</Link>
                        <Link to={'/home/story/story-view'} className='flex items-center gap-2 group hover:bg-gray-600 p-1 rounded-md'> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> Story View </Link>
                    </div>
                </div>


                <div className='w-[100%]'>
                    <div className='flex cursor-pointer gap-3 group  w-[100%] hover:bg-gray-600 p-2 rounded-md ' onClick={()=>asideDropDown!=7 ? setAsideDropDown(7) : setAsideDropDown(-1)}>
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"></path><path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"></path><path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"></path></svg>
                        <div className='w-[100%]' >
                            <span className='w-[100%] flex justify-between items-center mb-1 text-[17px] font-semibold'>Orders

                                {asideDropDown==7 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}

                            </span>

                        </div>
                    </div>
                    <div className={` group-hover:bg-gray-800 w-[100%] px-4 ${asideDropDown==7 ? '' : 'hidden'} `}>
                    <Link to={'/home/orders'} className='group flex items-center gap-2 mb-2  hover:bg-gray-600 p-1 rounded-md '> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> Orders</Link>

                    </div>
                </div>


                <div className='w-[100%]'>
                    <div className='flex cursor-pointer gap-3 group  w-[100%] hover:bg-gray-600 p-2 rounded-md ' onClick={()=>asideDropDown!=8 ? setAsideDropDown(8) : setAsideDropDown(-1)}>
                        <svg fill="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"></path></svg>
                        <div className='w-[100%]' >
                            <span className='w-[100%] flex justify-between items-center mb-1 text-[17px] font-semibold'>Slider

                                {asideDropDown==8 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}

                            </span>

                        </div>
                    </div>
                    <div className={` group-hover:bg-gray-800 w-[100%] px-4 ${asideDropDown==8 ? '' : 'hidden'} `}>
                        <Link to={'/home/slider/slider-details'} className='group flex items-center gap-2 mb-2  hover:bg-gray-600 p-1 rounded-md '> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> Slider Details</Link>
                        <Link to={'/home/slider/slider-view'} className='flex items-center gap-2 group hover:bg-gray-600 p-1 rounded-md'> <IoMdRadioButtonOn className='text-gray-500 group-hover:text-white cursor-pointer ' /> Slider View </Link>
                    </div>
                </div>

                <div className='w-[100%]'>
                    <div className='flex cursor-pointer gap-3 group  w-[100%] hover:bg-gray-600 p-2 rounded-md ' onClick={()=>asideDropDown!=9 ? setAsideDropDown(9) : setAsideDropDown(-1)}>
                        <svg fill="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
                        <div className='w-[100%]' >
                            <span className='w-[100%] flex justify-between items-center mb-1 text-[17px] font-semibold'>Terms & Conditions

                                {asideDropDown==9 ? <FaChevronUp className='text-[12px]' /> : <FaChevronDown className='text-[12px]' />}

                            </span>

                        </div>
                    </div>
                    <div className={` group-hover:bg-gray-800 w-[100%] px-4 ${asideDropDown==9 ? '' : 'hidden'} `}>


                    </div>
                </div>

            </aside>
            <section className='w-[83%] '>

                <div className='min-h-[95vh]'>
                    <div>
                        <div className='px-4 py-3 flex items-center justify-between w-[100%]'>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <svg fill="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"></path></svg>
                                    <h2 className='text-[20px] text-gray-500 font-semibold'>Dashboard</h2>
                                </div>
                            </div>
                            <div className='relative group'>
                                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='w-[50px] h-[50px] rounded-[50%]' alt="" />

                                <div className='shadow-lg absolute w-[180px] right-[50%] top-[-1000px] group-hover:top-[100%] bg-white z-30 rounded-lg'>
                                    <div>
                                        <div className='bg-black rounded-[10px_10px_0px_0px] text-white p-2 text-[17px] font-semibold'> Account
                                        </div>
                                        <div className='p-2 group flex gap-2 items-center hover:text-blue-700'>
                                            <svg fill="currentColor" className=" w-4 h-4 me-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg>
                                            <span className=''>Updates</span>
                                            <div className='px-2 rounded-md text-white bg-red-500'>42</div>
                                        </div> <hr />


                                        <div className='p-2 flex gap-2 items-center  hover:text-blue-700'>
                                            <svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor"><path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor"></path><path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor"></path></svg>
                                            <span>Message</span>
                                            <div className='px-2 rounded-md text-white bg-yellow-500'>42</div>
                                        </div> <hr />

                                        <div className='p-2 flex gap-2 items-center  hover:text-blue-700'>
                                            <svg fill="currentColor" className="w-4 h-4 me-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                                            <span>Task</span>
                                            <div className='px-2 rounded-md text-white bg-green-500'>42</div>
                                        </div> <hr />

                                        <div className='p-2 flex gap-2 items-center  hover:text-blue-700'>
                                            <svg fill="currentColor" className="w-4 h-4 me-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"></path></svg>
                                            <span>Comment</span>
                                            <div className='px-2 rounded-md text-white bg-blue-500'>42</div>
                                        </div> <hr />
                                    </div>


                                    <div>
                                        <div className='bg-black text-white p-2 text-[17px] font-semibold'> Settings
                                        </div>
                                        <div className='p-2 group flex gap-2 items-center hover:text-blue-700'>
                                            <svg fill="currentColor" className=" w-4 h-4 me-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg>
                                            <span className=''>Updates</span>
                                            <div className='px-2 rounded-md text-white bg-red-500'>42</div>
                                        </div> <hr />


                                        <div className='p-2 flex gap-2 items-center  hover:text-blue-700'>
                                            <svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor"><path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor"></path><path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor"></path></svg>
                                            <span>Message</span>
                                            <div className='px-2 rounded-md text-white bg-yellow-500'>42</div>
                                        </div> <hr />

                                        <div className='p-2 flex gap-2 items-center  hover:text-blue-700'>
                                            <svg fill="currentColor" className="w-4 h-4 me-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                                            <span>Task</span>
                                            <div className='px-2 rounded-md text-white bg-green-500'>42</div>
                                        </div> <hr />

                                        <div className='p-2 flex gap-2 items-center  hover:text-blue-700'>
                                            <svg fill="currentColor" className="w-4 h-4 me-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"></path></svg>
                                            <span>Comment</span>
                                            <div className='px-2 rounded-md text-white bg-blue-500'>42</div>
                                        </div> <hr />
                                    </div> <hr className='h-[2px] bg-black' />


                                    <div className='p-2 flex gap-2 items-center  hover:text-blue-700'>
                                        <svg fill="currentColor" className="w-4 h-4 me-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"></path></svg>
                                        <span>Lock Account</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />



                    </div>

                    <Outlet />
                </div>




                <footer className='w-[100%]'>
                    <hr />
                    <div className='flex justify-between items-center px-5'>
                        <p className='text-gray-800 px-3 py-2 text-[14px]'>© 2024 Frank and Oak™. All Rights Reserved.</p>
                        <div className='flex gap-2'>
                            <p className='text-gray-700'>Design by :</p>
                            <p className='text-blue-700 mb-4' title='꧁乂✰Ḱ𝘂𝐥₫ĕĕῥ✰乂꧂'>꧁乂✰Ḱ𝘂𝐥₫ĕĕῥ✰乂꧂</p>
                        </div>
                    </div>
                </footer>


            </section>


        </div>
    )
}
