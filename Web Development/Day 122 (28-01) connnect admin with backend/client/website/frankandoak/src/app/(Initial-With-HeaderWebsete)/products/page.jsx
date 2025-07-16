"use client"
import { Carousel } from 'flowbite-react';
import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaGift, FaHeart } from 'react-icons/fa6'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RxCross1 } from "react-icons/rx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiFilter } from 'react-icons/ci';
// import Slider from "react-slick";

export default function Products() {
    let [filterBarResponsive, setFilterBarResponsive] = useState(false)
    let [sortDropDown, setSortDropDown] = useState(false)
    return (
        <div className='relative'>
            <div className='py-2 hidden md:block bg-[rgb(28,58,50)] text-white'>
                <h3 className='flex gap-2 justify-center'>Last-minute gifting: Wrap it up with
                    <span className='flex gap-2 items-center underline cursor-pointer'>E-Gift Cards <FaGift /></span>
                </h3>
            </div>
            <div className='grid md:grid-cols-[30%_auto] lg:grid-cols-[20%_auto] '>
                <aside className='hidden md:block h-screen sticky md:top-[70px] lg:top-[40px] left-0 duration-500'>
                    <div className='pt-5 pl-7 '>
                        <div>
                            <span className='underline cursor-pointer text-sm'>Home</span>
                            <span className='text-sm'> / </span>
                            <span className=' text-sm underline cursor-pointer'> Men</span>
                            <span className='text-sm'> / </span>
                            <h2 className='py-3 text-lg'>Sale</h2>
                        </div>

                        <div className='py-5 h-[72vh] overflow-y-scroll p-2'>

                            <AsideBar />

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
                </aside>
                <div className='p-4'>

                    <div className='grid grid-cols-7 gap-3 py-7'>
                        <TopItems />
                        <TopItems />
                        <TopItems />
                        <TopItems />
                        <TopItems />
                        <TopItems />


                    </div>

                    <div className='py-3 border-t-2 border-b-2 flex justify-between px-2 items-center'>
                        <div className='hidden md:block'>
                            <div className='flex gap-4'>
                                <div className='bg-gray-300 py-1 px-3 flex gap-2 items-center'>
                                    <span className='text-sm'>28</span>
                                    <span className='text-[12px] cursor-pointer '><RxCross1 /></span>
                                </div>
                                <button className='border-2 text-[13px] py-1 px-3 hover:border-black'>
                                    Clear All
                                </button>
                            </div>
                        </div>
                        <div className='md:hidden'>
                            <button className='flex gap-2 items-center' onClick={() => setFilterBarResponsive(true)}>
                                <CiFilter />
                                <p>Filter</p>
                            </button>

                            <div className={`w-screen h-screen overflow-y-scroll fixed z-50  left-0 px-5 bg-white top-0 duration-500 ${filterBarResponsive ? '' : 'translate-x-[-1000px]'}`}>
                                <div className='sticky top-0 bg-white flex justify-between py-4 items-center mb-4'>
                                    <h2 className='text-xl'>Filters</h2>
                                    <button className='text-3xl' onClick={() => setFilterBarResponsive(false)}>&times;</button>
                                </div>
                                <AsideBar />
                                <button className='w-[100%] border-[0.5px] my-7 py-2 bg-blue-500 rounded text-xl text-white'>Done</button>
                            </div>

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

                                <div className={`p-3 absolute z-20 border-2 border-black top-[100%] bg-white right-0 ${sortDropDown ? 'visible' : 'hidden'}`}>
                                    <ul className='w-[100%] flex flex-col gap-3'>
                                        <li className='cursor-pointer text-sm hover:underline '>Featured</li>
                                        <li className='cursor-pointer text-sm  hover:underline '>Best Selling</li>
                                        <li className='cursor-pointer text-sm hover:underline '>Price, Low to High</li>
                                        <li className='cursor-pointer text-sm hover:underline '>Price, High to Low</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex gap-4 md:hidden mt-3'>
                        <div className='bg-gray-300 py-1 px-3 flex gap-2 items-center'>
                            <span className='text-sm'>28</span>
                            <span className='text-[12px] cursor-pointer '><RxCross1 /></span>
                        </div>
                        <button className='border-2 text-[13px] py-1 px-3 hover:border-black'>
                            Clear All
                        </button>
                    </div>

                    <div>
                        <h2 className='text-xl mt-5'>Sale</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:py-7'>
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
        <div className='p-3  mainBox '>
            <div className='inneritems '>

                <div className='relative mainImage'>
                    <div className='h-[250px] md:h-[400px] absolute top-0 left-0 z-10 w-full  imghoverDiv  ' >
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/LOOK2WW_1504_450x.jpg?v=1731357713" alt="..." className='h-[100%] w-full' />
                    </div>


                    <Carousel leftControl=<FaAngleLeft className='text-gray-400' /> rightControl=<FaAngleRight className='text-gray-400' /> slide={false} className='h-[250px] md:h-[400px] '>
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2310177-155.01_0abecc60-1f1f-45b8-870d-a2a5faf5d95f_450x.jpg?v=1730925130" alt="..." className='h-[100%]' />
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/LOOK2WW_1504_450x.jpg?v=1731357713" alt="..." className='h-[100%]' />
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2310177-155.02_450x.jpg?v=1730925130" alt="..." className='h-[100%]' />
                    </Carousel>

                </div>





            </div>
            <div className=' relative'>
                <div className='absolute bottom-[105%] z-0 w-[100%]  quickbtnDiv '>
                    <div className='hidden'>
                        <div className='grid grid-cols-5 gap-3 bg-white justify-around text-center mx-2 '>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>XXS</button>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>XS</button>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>S</button>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>M</button>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>L</button>
                            <button className='text-center  p-1 hover:bg-black hover:text-white duration-300'>XL</button>
                        </div>
                    </div>
                    <button className='w-full bg-white py-2 text-black quickbtnDivButton'>Quick add</button>
                </div>
                <div className='flex p-2 justify-between items-center'>
                    <span className='bg-black text-white text-sm px-2'> FewLeft </span>
                    <FaHeart className={` `} />
                </div>
                <div className='p-2'>
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

function TopItems() {
    return (
        <div>
            <img src="https://www.frankandoak.com/cdn/shop/files/1410261-002.00_320x.jpg?v=1723473198&width=320" alt="" />
            <p className='text-sm py-2'>Jackets</p>
        </div>
    )
}

function AsideBar() {
    let [filterDropdown, setFilterDropDown] = useState(-1)
    return (
        <div>
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
        </div>
    )
}
