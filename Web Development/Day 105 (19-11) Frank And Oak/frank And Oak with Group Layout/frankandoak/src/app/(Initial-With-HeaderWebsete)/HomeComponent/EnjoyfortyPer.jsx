'use client'
import React from 'react'
import "./EnjoyfortyPer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Carousel } from 'flowbite-react';
import { FaAngleLeft, FaAngleRight, FaCaretLeft, FaCaretRight, FaHeart } from 'react-icons/fa6'

export default function EnjoyfortyPer() {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
               
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true
              }
            }
          ]
    };


    return (
        <div className='px-4'>
            <div className='flex flex-col md:flex-row py-5 justify-between items-start md:items-center'>
                <h1 className='text-3xl mb-3'>
                Treat yourself with an additional 25% off everything*
                </h1>
                <div className='flex gap-5'>
                    <span className='underline text-2xl'>Women's</span>
                    <span className='text-gray-600 text-2xl'>Men's</span>
                </div>
            </div>
            <div className='px-[20px]'>
                <Slider {...settings}>
                    <ProductItems />
                    <ProductItems />
                    <ProductItems />
                    <ProductItems />
                    <ProductItems />
                </Slider>
            </div>
        </div>

    )
}

function ProductItems() {
    return (
        <div className='p-3'>
            <div className='inneritems '>
                <Carousel leftControl=<FaAngleLeft className='text-gray-400' /> rightControl=<FaAngleRight className='text-gray-400' /> slide={false}   className='h-[250px] md:h-[400px] rounded-none'>
                    <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2410193-4GB.01_450x.jpg?v=1726772116" alt="..." className='h-[100%]' />
                    <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2410193-4GB.02_450x.jpg?v=1726772117" alt="..." className='h-[100%]' />
                    <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2410193-4GB.03_450x.jpg?v=1726772117" alt="..." className='h-[100%]' />
                </Carousel>
            </div>
            <div className='p-2'>
                <div className='flex justify-between items-center'>
                    <span className='bg-black text-white text-sm px-2'> FewLeft </span>
                    <FaHeart className={` `} />
                </div>
                <div>
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


