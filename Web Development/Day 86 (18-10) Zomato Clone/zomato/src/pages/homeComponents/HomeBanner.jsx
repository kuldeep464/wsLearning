import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaLocationDot } from 'react-icons/fa6'
import { IoPhonePortrait } from 'react-icons/io5'

export default function HomeBanner() {
    return (
        <header className='bg-[url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")] bg-center bg-no-repeat bg-cover  w-[100%] pb-[100px]'>


            <nav class=" border-gray-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <IoPhonePortrait className='text-[20px] text-[white]' />
                        <span class="self-center text-md font-normal  dark:text-white">Get the App</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white text-[18px]  md:dark:hover:text-blue-500 duration-300 font-normal" aria-current="page">Investors Relations</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-[18px] font-normal duration-300">Add Restaurant</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-[18px] font-normal duration-300">Log In</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-[18px] font-normal duration-300">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className='max-w-[150px] md:max-w-[200px] lg:max-w-[300px] mx-auto'>
                <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" className='w-[100%] mt-[50px]' alt="" />
            </div>

            <h1 className='text-white text-[40px] py-8 text-center'>Discover the best food & drinks in Jaipur</h1>

            <div>
                <form action="" className='max-w-[700px] mx-auto grid grid-cols-[35%_auto] bg-white p-2 rounded-[10px]'>
                    <div className="flex ">
                        <FaLocationDot className='text-[18px] text-red-400'/>
                        <input type="text" placeholder='Jaipur' className='placeholder:text-[16px] placeholder:text-[#4e4e4e] focus:outline-none border-r-2 border-[#4e4e4e] px-[10px]' />
                    </div>
                    <div className='flex '>
                        <CiSearch className='text-[25px] text-gray-500'/>
                        <input type="text" placeholder='Search for restaurant , cuisine or a dish' className='placeholder:text-[16px] placeholder:text-[#4e4e4e] focus:outline-none px-[10px] w-[100%]' />
                    </div>
                </form>
            </div>

        </header>
    )
}
