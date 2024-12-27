"use client"
import { Carousel } from 'flowbite-react';
import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaGift, FaHeart } from 'react-icons/fa6'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RxCross1 } from "react-icons/rx";

export default function Products() {
    let [filterDropdown, setFilterDropDown] = useState(-1)
    let [sortDropDown, setSortDropDown] = useState(false)
    return (
        <div className='relative'>
            <div className='py-2 bg-[rgb(28,58,50)] text-white'>
                <h3 className='flex gap-2 justify-center'>Last-minute gifting: Wrap it up with
                    <span className='flex gap-2 items-center underline cursor-pointer'>E-Gift Cards <FaGift /></span>
                </h3>
            </div>
            <div className='grid grid-cols-[17%_auto] '>
                <div className='h-screen sticky top-0 left-0'>
                    <div className='pt-5 pl-7 '>
                        <div>
                            <span className='underline cursor-pointer text-sm'>Home</span>
                            <span className='text-sm'> / </span>
                            <span className=' text-sm underline cursor-pointer'> Men</span>
                            <span className='text-sm'> / </span>
                            <h2 className='py-3 text-lg'>Sale</h2>
                        </div>

                        <div className='py-5 h-[72vh] overflow-y-scroll p-2'>
                            <div className='border-t-2 border-b-2 pt-2'>
                                <h2 className='flex justify-between cursor-pointer pb-2 duration-500' onClick={() => {
                                    filterDropdown != 1 ?
                                        setFilterDropDown(1)
                                        :
                                        setFilterDropDown(-1)

                                }}>Subcategory
                                    {filterDropdown == 1 ?
                                        <span className='text-xl'>-</span>
                                        :
                                        <span className='text-xl'>+</span>
                                    }


                                </h2>
                                <div className={` ${filterDropdown == 1 ? 'scale-x-100 visible' : 'scale-x-0 hidden'} pb-5 `}>
                                    <div className='flex items-center gap-2 text-sm py-3'>
                                        <input type="checkbox" />
                                        <label htmlFor="">T-shirts</label>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm pb-3'>
                                        <input type="checkbox" />
                                        <label htmlFor="">T-shirts</label>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm pb-3'>
                                        <input type="checkbox" />
                                        <label htmlFor="">T-shirts</label>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm pb-3'>
                                        <input type="checkbox" />
                                        <label htmlFor="">T-shirts</label>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm pb-3'>
                                        <input type="checkbox" />
                                        <label htmlFor="">T-shirts</label>
                                    </div>
                                </div>
                            </div>

                            <div className='border-b-2 pt-2'>
                                <h2 className='flex justify-between cursor-pointer pb-2' onClick={() => {
                                    filterDropdown != 2 ?
                                        setFilterDropDown(2)
                                        :
                                        setFilterDropDown(-1)

                                }}>Size
                                    {filterDropdown == 2 ?
                                        <span className='text-xl'>-</span>
                                        :
                                        <span className='text-xl'>+</span>
                                    }


                                </h2>
                                <div className={` ${filterDropdown == 2 ? 'scale-x-100 visible' : 'scale-x-0 hidden'} pb-5 `}>
                                    <div className='grid grid-cols-4 gap-4'>
                                        <button className='p-[0px_2px]  text-sm border-2 hover:border-gray-300'>28</button>
                                        <button className='p-[0px_2px]  text-sm border-2  hover:border-gray-300'>28</button>
                                        <button className='p-[0px_2px]  text-sm border-2  hover:border-gray-300'>28</button>
                                        <button className='p-[0px_2px]  text-sm border-2  hover:border-gray-300'>28</button>
                                        <button className='p-[0px_2px]  text-sm border-2  hover:border-gray-300'>28</button>
                                        <button className='p-[0px_2px]  text-sm border-2  hover:border-gray-300'>28</button>
                                        <button className='p-[0px_2px]  text-sm border-2  hover:border-gray-300'>28</button>
                                        <button className='p-[0px_2px]  text-sm border-2  hover:border-gray-300'>28</button>
                                    </div>
                                </div>
                            </div>

                            <div className='border-b-2 pt-2'>
                                <h2 className='flex justify-between cursor-pointer pb-2' onClick={() => {
                                    filterDropdown != 3 ?
                                        setFilterDropDown(3)
                                        :
                                        setFilterDropDown(-1)

                                }}>Colour
                                    {filterDropdown == 3 ?
                                        <span className='text-xl'>-</span>
                                        :
                                        <span className='text-xl'>+</span>
                                    }


                                </h2>
                                <div className={` ${filterDropdown == 3 ? 'scale-x-100 visible' : 'scale-x-0 hidden'} pb-5 `}>
                                    <div className='grid gap-3'>
                                        <div className='flex items-center gap-2'>
                                            <div>
                                                <div className='h-6 w-6 rounded-[50%] bg-green-900'></div>
                                            </div>
                                            <div className='text-sm'>
                                                Green
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div>
                                                <div className='h-6 w-6 rounded-[50%] bg-green-900'></div>
                                            </div>
                                            <div className='text-sm'>
                                                Green
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div>
                                                <div className='h-6 w-6 rounded-[50%] bg-green-900'></div>
                                            </div>
                                            <div className='text-sm'>
                                                Green
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div>
                                                <div className='h-6 w-6 rounded-[50%] bg-green-900'></div>
                                            </div>
                                            <div className='text-sm'>
                                                Green
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='border-b-2 pt-2'>
                                <h2 className='flex justify-between cursor-pointer pb-2' onClick={() => {
                                    filterDropdown != 4 ?
                                        setFilterDropDown(4)
                                        :
                                        setFilterDropDown(-1)

                                }}>Price
                                    {filterDropdown == 4 ?
                                        <span className='text-xl'>-</span>
                                        :
                                        <span className='text-xl'>+</span>
                                    }


                                </h2>
                                <div className={` ${filterDropdown == 4 ? 'scale-x-100 visible' : 'scale-x-0 hidden'} pb-5 `}>
                                    <div className='flex gap-2 items-center text-sm pb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="">$0-$50</label>
                                    </div>
                                    <div className='flex gap-2 items-center text-sm pb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="">$50-$100</label>
                                    </div>
                                    <div className='flex gap-2 items-center text-sm pb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="">$100-$200</label>
                                    </div>
                                    <div className='flex gap-2 items-center text-sm pb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="">$200-$250</label>
                                    </div>
                                </div>
                            </div>

                            <div className='border-b-2 pt-2'>
                                <h2 className='flex justify-between cursor-pointer pb-2' onClick={() => {
                                    filterDropdown != 5 ?
                                        setFilterDropDown(5)
                                        :
                                        setFilterDropDown(-1)

                                }}>% off
                                    {filterDropdown == 5 ?
                                        <span className='text-xl'>-</span>
                                        :
                                        <span className='text-xl'>+</span>
                                    }


                                </h2>
                                <div className={` ${filterDropdown == 5 ? 'scale-x-100 visible' : 'scale-x-0 hidden'} pb-5 `}>
                                    <div className='flex gap-2 items-center text-sm pb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="">20%-30%</label>
                                    </div>
                                    <div className='flex gap-2 items-center text-sm pb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="">30%-40%</label>
                                    </div>
                                    <div className='flex gap-2 items-center text-sm pb-2'>
                                        <input type="checkbox" />
                                        <label htmlFor="">40%-50%</label>
                                    </div>

                                </div>
                            </div>

                            <div className='border-t-2 mt-[35px] pt-3 '>
                                <h2 className='font-semibold text-sm mb-5'>Featured</h2>
                                <h4 className='text-sm text-green-500'>Sale</h4>
                                <ul>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%]  hover:font-semibold'>New In</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold '>Best Sellers</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold '>Holiday Outfits</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold '>Winter Jackets</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold '>Workwear</li>
                                </ul>
                                <h2 className='pt-7 pb-3  font-semibold text-sm'>Clothing</h2>
                                <ul>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                </ul>
                                <h2 className='pt-7 pb-3 font-semibold text-sm'>Accessories</h2>
                                <ul>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                    <li className='mt-2 text-sm cursor-pointer w-[100%] hover:font-semibold'>Shop All</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='p-4'>

                    <div className='grid grid-cols-7 gap-3 py-7'>
                        <div>
                            <img src="https://www.frankandoak.com/cdn/shop/files/1410261-002.00_320x.jpg?v=1723473198&width=320" alt="" />
                            <p className='text-sm py-2'>Jackets</p>
                        </div>
                        <div>
                            <img src="https://www.frankandoak.com/cdn/shop/files/Group_1277_320x.jpg?v=1733944221&width=320" alt="" />
                            <p className='text-sm py-2'>Tops</p>
                        </div>
                        <div>
                            <img src="https://www.frankandoak.com/cdn/shop/files/Group_1278_320x.jpg?v=1733944221&width=320" alt="" />
                            <p className='text-sm py-2'>Bottoms</p>
                        </div>
                        <div>
                            <img src="https://www.frankandoak.com/cdn/shop/files/Group_1276_320x.jpg?v=1733944217&width=320" alt="" />
                            <p className='text-sm py-2'>Blazzers</p>
                        </div>
                        <div>
                            <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area_4105d41b-74f0-4031-9812-34eca7605210_320x.jpg?v=1732222669&width=320" alt="" />
                            <p className='text-sm py-2'>Sweaters</p>
                        </div>
                    </div>

                    <div className='py-3 border-t-2 border-b-2 flex justify-between px-2 items-center'>
                        <div className='flex gap-4'>
                            <div className='bg-gray-300 py-1 px-3 flex gap-2 items-center'>
                                <span className='text-sm'>28</span>
                                <span className='text-[12px] cursor-pointer '><RxCross1 /></span>
                            </div>
                            <button className='border-2 text-[13px] py-1 px-3 hover:border-black'>
                                Clear All
                            </button>
                        </div>
                        <div className='flex relative gap-7 items-center'>
                            <div className='grid grid-cols-2'>
                                <div className='w-3 h-3 border-2 border-black'></div>
                                <div className='w-3 h-3 border-2 border-black'></div>
                                <div className='w-3 h-3 border-2 border-black'></div>
                                <div className='w-3 h-3 border-2 border-black'></div>
                            </div>
                            <div>
                                <div className='w-6 h-6 border-2 '></div>
                            </div>
                            <div >
                                <div className='flex gap-1 items-center cursor-pointer text-sm py-3' onClick={() => setSortDropDown(!sortDropDown)} >Sort by {sortDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />} </div>

                                <div className={`p-3 absolute z-10 border-2 border-black top-[100%] bg-white right-0 ${sortDropDown ? 'visible' : 'hidden'}`}>
                                    <ul className='w-[100%] flex flex-col gap-3'>
                                        <li className='cursor-pointer text-sm '>Featured</li>
                                        <li className='cursor-pointer text-sm '>Best Selling</li>
                                        <li className='cursor-pointer text-sm '>Price, Low to High</li>
                                        <li className='cursor-pointer text-sm '>Price, High to Low</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl mt-3'>Sale</h2>
                        <div className='grid grid-cols-4 gap-4 py-7'>
                            <ProductItems />
                            <ProductItems />
                            <ProductItems />
                            <ProductItems />
                            <ProductItems />
                            <ProductItems />
                            <ProductItems />
                            <ProductItems />
                            <ProductItems />
                            <ProductItems />
                            <ProductItems />
                            <ProductItems />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )


}


function ProductItems() {
    return (
        <div>
            <div className='h-[400px]'>

                <Carousel leftControl=<FaAngleLeft className='text-gray-400' /> rightControl=<FaAngleRight className='text-gray-400' /> slide={false}   className='h-[400px] rounded-none'>
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
