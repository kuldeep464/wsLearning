import React from 'react'

export default function Banner() {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between px-4 items-center lg:px-10 py-5 md:py-10 lg:py-20'>
        <div className='lg:w-[50%] mx-auto'>
          <div className=''>
            <h1 className='lg:text-[108px] text-center md:text-start text-[40px] md:text-[60px] font-bold'>BLACK <br /> FRIDAY</h1>
            <h3 className='text-[32px] text-center md:text-start font-semibold'>40% off everything*</h3>
            <div className='flex flex-col md:flex-row gap-7 py-5'>
              <button className='bg-black text-white w-full md:w-[40%] py-2'>Women</button>
              <button className='bg-black text-white w-full md:w-[40%] py-2'>Men</button>
            </div>
          </div>
        </div>
        <div className=' md:h-[80vh]'>
          <img className='md:h-[100%]' src="https://www.frankandoak.com/cdn/shop/files/Black-Friday-HP-anim_1_4665964b-1c42-47b1-bf0b-1a7f7e4b7ae0.gif?v=1731429015" alt="" />
        </div>
      </div>
      <div className='bg-black py-3 text-white px-3'>
        <div className='grid grid-cols-2 md:grid-cols-4 justify-between gap-14'>
          <div className='flex gap-2 items-center justify-center'>
            <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/shipping-holiday-thin-v1.svg?v=1732295425" className='h-[20px]' alt="" />
            <p className='text-[14px]'>Free Shipping over $99</p>
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <img className='h-[20px]' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/returns-holiday-thin-v1.svg?v=1732295425" alt="" />
            <p className='text-[14px]'>Extended Returns until Jan. 12 </p>
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <img className='h-[20px]' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/franks-club-icon-1.png?v=1725563403" alt="" />
            <p className='text-[14px]'>Earn Points</p>
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <img className='h-[20px]' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/bnpl-holiday-holiday-thin-v1.svg?v=1732295425" alt="" />
            <p className='text-[14px]'>Buy Now, Pay Later</p>
          </div>
        </div>
      </div>

    </div>
  )
}
