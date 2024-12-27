import React from 'react'

export default function Banner() {
  return (
    <div>
      <div className='flex justify-around items-center px-3  py-20'>
        <div className='w-[50%]'>
          <div className='w-[60%] mx-auto'>
            <h1 className='text-[108px] font-bold'>BLACK <br /> FRIDAY</h1>
            <h3 className='text-[32px] font-semibold'>40% off everything*</h3>
            <div className='flex gap-7 py-5'>
              <button className='bg-black text-white w-[40%] py-2'>Women</button>
              <button className='bg-black text-white w-[40%] py-2'>Men</button>
            </div>
          </div>
        </div>
        <div className='w-[50%] h-[80vh]'>
          <img className='h-[100%]' src="https://www.frankandoak.com/cdn/shop/files/Black-Friday-HP-anim_1_4665964b-1c42-47b1-bf0b-1a7f7e4b7ae0.gif?v=1731429015" alt="" />
        </div>
      </div>
      <div className='bg-black py-3 text-white'>
        <div className='flex justify-center gap-14'>
          <div className='flex gap-2 items-center'>
            <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/shipping-holiday-thin-v1.svg?v=1732295425" className='h-[20px]' alt="" />
            <p className='text-[14px]'>Free Shipping over $99</p>
          </div>
          <div className='flex gap-2 items-center'>
            <img className='h-[20px]' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/returns-holiday-thin-v1.svg?v=1732295425" alt="" />
            <p className='text-[14px]'>Extended Returns until Jan. 12 </p>
          </div>
          <div className='flex gap-2 items-center'>
            <img className='h-[20px]' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/franks-club-icon-1.png?v=1725563403" alt="" />
            <p className='text-[14px]'>Earn Points</p>
          </div>
          <div className='flex gap-2 items-center'>
            <img className='h-[20px]' src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/bnpl-holiday-holiday-thin-v1.svg?v=1732295425" alt="" />
            <p className='text-[14px]'>Buy Now, Pay Later</p>
          </div>
        </div>
      </div>

    </div>
  )
}
