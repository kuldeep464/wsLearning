'use client'
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6';
import Slider from 'react-slick';

export default function Comments() {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.7,
        slidesToScroll: 2,

    };
    return (
        <div className='px-4 py-6 bg-gray-200'>
            <h1 className=' py-5 text-[36px] text-center'>You didn’t hear it from us</h1>

            <div className='px-[30px]'>
                <Slider {...settings}>
                    <StoriesItems />
                    <StoriesItems />
                    <StoriesItems />
                    <StoriesItems />
                    <StoriesItems />
                    <StoriesItems />
                    <StoriesItems />
                </Slider>
            </div>
        </div>
    )
}


function StoriesItems() {
    return (
        <div className='shadow-xl mx-3 bg-gray-100 grid grid-cols-2'>
            <div className='flex flex-col  justify-between  p-5'>
                <div className='flex flex-col gap-3 pt-7'>
                    <div className='flex gap-2'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <span>Based on 112 reviews</span>
                    </div>
                    <p className='font-semibold'>This is so warm! It’s kind of like wearing a sleeping bag in the best way.</p>
                    <h4 className='text-gray-700 flex'>Jessica M.</h4>
                </div>
                <div>
                    <button className='underline  text-lg'>Shop now</button>
                </div>
            </div>
            <div>
                <img src="https://www.frankandoak.com/cdn/shop/files/LOOK4WW_1086.jpg?crop=center&height=880&v=1731602941&width=672" alt="" className='h-[60vh]' />
            </div>
        </div>
    )
}
