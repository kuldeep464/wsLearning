import React from 'react'
import { CiFacebook, CiInstagram, CiMail, CiTwitter } from 'react-icons/ci'
import { FaBitcoin, FaPinterest } from 'react-icons/fa6'
import { SlSocialLinkedin } from "react-icons/sl";

export default function Footer() {
    return (
        <footer className='bg-black text-white px-2 py-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-around'>
                <div className='flex flex-col items-center'>
                    <img src="https://www.frankandoak.com/cdn/shop/files/shipping-holiday-footer-v1_40x.svg?v=1732296541" alt="" className='py-2' />
                    <h3 className='text-[14px] md:text-[16px]' >Free Shipping</h3>
                    <span className='text-[14px] md:text-[16px]' >On orders over $99</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://www.frankandoak.com/cdn/shop/files/returns-holiday-footer-v1_40x.svg?v=1732296541" alt="" className='py-2' />
                    <h3 className='text-[14px] md:text-[16px]' >Extended Returns</h3>
                    <span className='text-[14px] md:text-[16px]' >until January 12th</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://www.frankandoak.com/cdn/shop/files/Group_127_40x.png?v=1726686224" alt="" className='py-2' />
                    <h3 className='text-[14px] md:text-[16px]' >Frank's Club</h3>
                    <span className='text-[14px] md:text-[16px]' >Earn points and get rewards.</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://www.frankandoak.com/cdn/shop/files/bnpl-holiday-holiday-footer-v1_40x.svg?v=1732296541" alt="" className='py-2' />
                    <h3 className='text-[14px] md:text-[16px]' >Buy Now, Pay Later</h3>
                    <span className='text-[14px] md:text-[16px]' >Select Klarna at checkout.</span>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center md:items-start justify-around pt-[50px] md:pt-[120px]'>
                <div className=''>
                    <div>
                        <img src="https://www.frankandoak.com/cdn/shop/files/Group_127_40x.png?v=1726686224" alt="" className='h-[80px] w-[80px]' />
                    </div>
                    <div className='grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center py-4'>
                        <CiInstagram className='text-[22px] cursor-pointer' />
                        <CiFacebook className='text-[22px] cursor-pointer' />
                        <CiMail className='text-[22px] cursor-pointer' />
                        <FaPinterest className='text-[22px] cursor-pointer' />
                        <CiTwitter className='text-[22px] cursor-pointer' />
                        <SlSocialLinkedin className='text-[19px] cursor-pointer' />
                    </div>
                    <div>
                        <FaBitcoin className='text-white text-[45px] mt-5' />
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-[18px] py-4'>About us</h2>
                    <ul>
                        <li className='py-2 text-[14px] cursor-pointer'>Who we are</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Sustainable practices</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Design ideology</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Fabrics</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Circular Denim <sup className='text-[8px]'>TM</sup></li>
                        <li className='py-2  text-[14px] cursor-pointer'>Partners and factories</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-semibold text-[18px] py-4'>Discover</h2>
                    <ul>
                        <li className='py-2 text-[14px] cursor-pointer'>Gift cards</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Franks club</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Give $15, Get $15</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Affiliate</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Blog </li>
                        <li className='py-2  text-[14px] cursor-pointer'>Work with us</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Our stores</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-semibold text-[18px] py-4'>Customer Care</h2>
                    <ul>
                        <li className='py-2 text-[14px] cursor-pointer'>Shipping informations</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Return and exchanges</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Coupen codes</li>
                        <li className='py-2  text-[14px] cursor-pointer'>FAQ</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Terms and conditions <sup className='text-[8px]'>TM</sup></li>
                        <li className='py-2  text-[14px] cursor-pointer'>Refund policy</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Accessibility statement</li>
                        <li className='py-2  text-[14px] cursor-pointer'>Customer data requests</li>
                    </ul>
                </div>
                <div className='px-4 md:w-[30%]'>
                    <h2 className='font-semibold text-[18px] py-4'>Stay in touch</h2>
                    <p>Join our newsletter and stay in the know about new collections, outfit inspiration, sales, and more.</p>
                    <form action="" className='pt-5'>
                        <input type="email" placeholder='Email' className='border-[1px] border-white bg-black p-2 w-[100%] placeholder:text-white mb-3' />
                        <input type="text" placeholder='First Name' className='border-[1px] border-white bg-black p-2 w-[100%] placeholder:text-white' />

                        <h3 className='mt-5'>I shop for</h3>
                        <div className='flex justify-around'>
                            <div className='flex items-center gap-2'>
                                <input type="radio" id='women' name='gender' />
                                <label htmlFor="women">Women</label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input type="radio" id='men' name='gender' />
                                <label htmlFor="men">Men</label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input type="radio" id='all' name='gender' />
                                <label htmlFor="all">All</label>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <button className='w-[100%] border-white border-[1px] py-2 duration-500 hover:shadow-sm hover:shadow-white'>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='w-[80%] mx-auto text-[14px] text-center md:text-start font-semibold'>
            © Frank And Oak 2024 , All Rights Reserved.
            </div>
        </footer>
    )
}
