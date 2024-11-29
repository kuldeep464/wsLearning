import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiStopwatch } from 'react-icons/ci';

export default function HomeColddrinks() {
  let HomeColddrinksvar = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    // autoplay:true,
    // autoplayspeed:500
  };

  return (
    <div className='px-[40px] py-12' id='HomeColddrinks'>
      <div className='flex justify-between'>
        <h1 className='text-[25px] font-bold'>Cold drink & juices</h1>
        <button className='text-[20px] font-semibold text-green-700'>see all</button>
      </div>
      <Slider {...HomeColddrinksvar}>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
        <div>
          <Homecolddrinks />
        </div>
      </Slider>
    </div>
  )
}

function Homecolddrinks() {
  return (

    <div className='mx-3 shadow-lg p-2'>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6b98633c-7c6a-4708-a372-e2b49da568ab.jpg?ts=1707312322" alt="" />
      <span className='flex gap-[5px] items-center text-[12px]'><CiStopwatch />  9 MINS</span>
      <h2 className='font-semibold'>Amul Gold Full Cream Fresh Milk</h2>
      <span className='text-[14px]'>500 ml</span>
      <div className='flex justify-between items-center'>
        <div>Rs34</div>
        <div>
          <button className='border-[1px] border-[rgb(49_134_22)] text-[rgb(49_134_22)] px-4 py-1 rounded-[8px]' >ADD</button>
        </div>
      </div>
    </div>

  )
}
