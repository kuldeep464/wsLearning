import React from 'react'

export default function HomeOnlineEvents() {
    return (
        <section className='py-[50px]'>
            <div className='max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-[25px]'>
                <div className='rounded-[20px_20px_0px_0px] hover:scale-105 duration-300'>
                    <a href="">
                        <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" className='h-[150px] w-[100%] object-cover rounded-[20px_20px_0px_0px]' alt="" />
                        <div className='border-[1px] border-gray-300 p-3 border-t-0  rounded-[0px_0px_20px_20px]'>
                            <h3 className='text-[22px]'>Order Online</h3>
                            <p className='text-gray-700 text-[17px]'>Stay home and order to your doorstep</p>
                        </div>
                    </a>
                </div>
                <div className='rounded-[20px_20px_0px_0px] hover:scale-105 duration-300'>
                    <a href="">
                        <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" className='h-[150px] w-[100%] object-cover rounded-[20px_20px_0px_0px]' alt="" />
                        <div className='border-[1px] border-gray-300 p-3 border-t-0  rounded-[0px_0px_20px_20px]'>
                            <h3 className='text-[22px]'>Dining</h3>
                            <p className='text-gray-700 text-[17px]'>View the city's favourite dining venues</p>
                        </div>
                    </a>
                </div>
                <div className='rounded-[20px_20px_0px_0px] hover:scale-105 duration-300'>
                    <a href="">
                        <img src="https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*" className='h-[150px] w-[100%] object-cover rounded-[20px_20px_0px_0px]' alt="" />
                        <div className='border-[1px] border-gray-300 p-3 border-t-0  rounded-[0px_0px_20px_20px]'>
                            <h3 className='text-[22px]'>Life Events</h3>
                            <p className='text-gray-700 text-[17px]'>Discover India's best events & concerts</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
