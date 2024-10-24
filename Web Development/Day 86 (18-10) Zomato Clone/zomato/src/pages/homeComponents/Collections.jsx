import React from 'react'
import { FaCaretRight } from 'react-icons/fa6'

export default function Collections() {
  return (
    <section className='py-[50px]'>
        <div className='max-w-[1100px] p-3 mx-auto'>
            <h1 className='text-[35px] font-semibold tracking-wide'>Collections</h1>
            <p className='text-[17px] relative mb-4'>Explore curated lists of top restaurants, cafes, pubs, and bars in Jaipur, based on trends <span className='text-[17px] absolute right-0'><a href="" className='text-red-400'>All collections in Jaipur &gt;</a></span></p>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[20px]'>
                <div className='bg-[url("https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171277.png?output-format=webp")] bg-center bg-cover w-[100%] h-[300px] rounded'>
                    <div className='bg-black h-[100%] bg-opacity-10  shadow-[0px_0px_50px_10px_inset] relative rounded' >
                        <div className='text-white absolute bottom-2 p-2'>
                            <h2>Newly Opened Restaurants</h2>
                            <div className='flex items-center gap-2'>
                                <p>26 Places  </p>
                                <FaCaretRight/>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='bg-[url("https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1724236685.png?output-format=webp")] bg-center bg-cover w-[100%] h-[300px] rounded'>
                    <div className='bg-black h-[100%] bg-opacity-10  shadow-[0px_0px_50px_10px_inset] relative rounded' >
                        <div className='text-white absolute bottom-2 p-2'>
                            <h2>Top Trending Spots</h2>
                            <div className='flex items-center gap-2'>
                                <p>42 Places  </p>
                                <FaCaretRight/>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='bg-[url("https://b.zmtcdn.com/data/collections/5f133a184545d3368f65f449d765b61a_1709814433.png?output-format=webp")] bg-center bg-cover w-[100%] h-[300px] rounded'>
                    <div className='bg-black h-[100%] bg-opacity-10  shadow-[0px_0px_50px_10px_inset] relative rounded' >
                        <div className='text-white absolute bottom-2 p-2'>
                            <h2>Best Royal Dining Places</h2>
                            <div className='flex items-center gap-2'>
                                <p>15 Places  </p>
                                <FaCaretRight/>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='bg-[url("https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1709813588.png?output-format=webp")] bg-center bg-cover w-[100%] h-[300px] rounded'>
                    <div className='bg-black h-[100%] bg-opacity-10  shadow-[0px_0px_50px_10px_inset] relative rounded' >
                        <div className='text-white absolute bottom-2 p-2'>
                            <h2>Best Insta-worthy Places</h2>
                            <div className='flex items-center gap-2'>
                                <p>41 Places  </p>
                                <FaCaretRight/>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>  
        </div>
    </section>
  )
}
