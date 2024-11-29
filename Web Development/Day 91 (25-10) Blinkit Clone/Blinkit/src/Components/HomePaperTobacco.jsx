import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiStopwatch } from 'react-icons/ci';

export default function HomePaperTobacco() {
  let HomePaperTobaccovar = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    // autoplay:true,
    // autoplayspeed:500
  };

  return (
    <div className='px-[40px] py-12' id='HomePaperTobacco'>
      <div className='flex justify-between'>
        <h1 className='text-[25px] font-bold'>Rolling paper & tobacco</h1>
        <button className='text-[20px] font-semibold text-green-700'>see all</button>
      </div>
      <Slider {...HomePaperTobaccovar}>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
        <div>
          <HomePapertobacco />
        </div>
      </Slider>
    </div>
  )
}

function HomePapertobacco() {
  return (

    <div className='mx-3 shadow-lg p-2'>
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496996a.jpg?ts=1690814374" alt="" />
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
