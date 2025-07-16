'use client'
import { Carousel } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight, FaHeart } from 'react-icons/fa6';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function WishlistPage() {
    let [showWishlistPage, setShowWishlistPage] = useState(false)
    let data = useSelector((Store) => Store.loginStore.webAuthDetails)
    useEffect(() => {
        if (data) {
            setShowWishlistPage(true)
        }
        else {
            setShowWishlistPage(false)
        }
    }, [])
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,

        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,

        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             dots: true
        //         }
        //     }
        // ]
    };

    return (
        <div>
            {showWishlistPage ?
                <div className='max-w-[1390px] mx-auto grid gap-6 grid-cols-[25%_auto]'>
                    <div>
                        <div className='text-[13px] flex items-center gap-2 mb-7 mt-3'>
                            <span className='cursor-pointer hover:underline'>Home /</span>
                            <span className='cursor-pointer hover:underline'> My Account /</span>
                            <span className='cursor-pointer hover:underline'> Account Settings</span>
                        </div>
                        <div className='bg-gray-200 p-4 mb-5'>
                            <ul>
                                <li className='cursor-pointer hover:underline my-2'>Orders & returns</li>
                                <li className='cursor-pointer hover:underline my-2'>Address book</li>
                                <Link href={'/account'} className='cursor-pointer hover:underline my-2 '>Account Settings</Link>
                                <li className='cursor-pointer hover:underline my-2 font-semibold flex items-center gap-2'>Wishlist <CiHeart className='text-[18px]' /></li>
                                <li className='cursor-pointer hover:underline my-2'>Frank's Club</li>
                                <li className='cursor-pointer hover:underline my-2'>Refer a friend</li>

                            </ul>
                        </div>
                        <div className='bg-gray-200 p-4 mb-5'>
                            <h3 className='text-[25px]'>Need Help?</h3>
                            <p>Our Member Services team is online daily</p>
                            <div>/ <span className='underline cursor-pointer' >Email</span></div>
                        </div>
                    </div>
                    <div>
                        <div className='text-[35px] mt-10'> Wishlist</div>
                        <div className='grid grid-cols-4'>
                            <WishlistItems />
                            <WishlistItems />
                        </div>
                        <div className='my-5'>
                            <div className='bg-gray-100 py-2 ps-6'>Discover</div>

                        </div>
                    </div>
                </div>

                :


                <div className='h-screen  text-[35px] flex items-center justify-center'>
                    Please login to access this page...!
                </div>
            }
        </div>
    )
}


function WishlistItems() {
    return (
        <div className='p-3  mainBox '>
            <div className='inneritems '>

                <div className='relative mainImage'>
                    <div className='h-[200px] md:h-[300px] absolute top-0 left-0 z-10 w-[100%]   imghoverDiv  ' >
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/LOOK2WW_1504_450x.jpg?v=1731357713" alt="..." className='h-[100%] w-[100%] ' />
                    </div>


                    <Carousel leftControl=<FaAngleLeft className='text-gray-400' /> rightControl=<FaAngleRight className='text-gray-400' /> slide={false} className='h-[200px] md:h-[300px] '>
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2310177-155.01_0abecc60-1f1f-45b8-870d-a2a5faf5d95f_450x.jpg?v=1730925130" alt="..." className='h-[100%]' />
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/LOOK2WW_1504_450x.jpg?v=1731357713" alt="..." className='h-[100%]' />
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2310177-155.02_450x.jpg?v=1730925130" alt="..." className='h-[100%]' />
                    </Carousel>

                </div>





            </div>
            <div className=' relative'>
                <div className='absolute bottom-[105%] z-0 w-[100%]  quickbtnDiv '>
                    <div className='hidden'>
                        <div className='grid grid-cols-3 gap-3 bg-white justify-around text-center mx-2 '>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>XXS</button>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>XS</button>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>S</button>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>M</button>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>L</button>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>XL</button>
                        </div>
                    </div>
                    <button className=' bg-white py-2 text-black quickbtnDivButton w-[100%]'>Quick add</button>
                </div>
                <div className='flex p-2 justify-between items-center'>
                    <span className='bg-black text-white text-sm px-2'> FewLeft </span>
                    <FaHeart className={` `} />
                </div>
                <div className='p-2'>
                    <h3 className='py-2 text-sm '>The Compact Mini Skirt in Black</h3>
                    <div className='flex gap-3'>
                        <span className='line-through'>$89.50</span>
                        <span className='text-red-500'>$66.99</span>
                    </div>
                    <p className='text-sm text-gray-500 pt-2'>2 Colours</p>
                </div>
            </div>
        </div>
    )
}

