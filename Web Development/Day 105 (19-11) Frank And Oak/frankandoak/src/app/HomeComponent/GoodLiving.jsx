import React from 'react'

export default function GoodLiving() {
  return (
    <div className='py-10 px-3'>
        <div className='grid grid-cols-2 items-center'>
            <div className='w-[70%] mx-auto'>
                <h1 className='text-[52px] py-8'>Made for Good Living</h1>
                <p className='text-[28px] pb-8 text-gray-500'>Born and raised in Montreal, Frank And Oak is dedicated to creating conscious collections that seamlessly fit into your everyday life.</p>
                <button className='underline text-[32px]'>Learn more</button>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className=' flex items-end pb-5 text-[24px] ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213)] bg-center bg-cover h-[340px] w-[100%] bg-no-repeat '>
                    <h2 className='text-white'>Sustainable Practices</h2>
                </div>
                <div className=' flex items-end pb-5 text-[24px] ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[340px] w-[100%] bg-no-repeat '>
                    <h2 className='text-white'>Design Philosophy</h2>
                </div>
                <div className=' flex items-end pb-5 text-[24px] ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/Tile_desktop_3_900x.jpg?v=1712334263)] bg-center bg-cover h-[340px] w-[100%] bg-no-repeat '>
                    <h2 className='text-white'>Fabrics Innovation</h2>
                </div>
                <div className=' flex items-end pb-5 text-[24px] ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-partners_900x.jpg?v=1712160804)] bg-center bg-cover h-[340px] w-[100%] bg-no-repeat '>
                    <h2 className='text-white'>Partners and Factories</h2>
                </div>
            </div>
            
        </div>
    </div>
  )
}
