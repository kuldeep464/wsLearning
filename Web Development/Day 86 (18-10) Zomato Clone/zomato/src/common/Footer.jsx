import React from 'react'
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <section className='py-[50px] bg-[rgb(248,248,248)] p-3'>
      <div className='max-w-[1100px] mx-auto border-b-2 border-gray-300'>
        <div className='flex sm:flex-row flex-col sm:justify-around md:justify-between'>
          <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" className='py-5' />
          <div className='flex gap-[50px] items-center'>
            <select name="" id="" className='border-[1px] border-black rounded'>
              <option value="">
                India
              </option>
              <option value="">
                UAE
              </option>
            </select>
            <select name="" id="" className='border-[1px] border-black rounded'>
              <option value="">
                English
              </option>
              <option value="">
                Hindi
              </option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 py-[50px]'> 
            <div>
              <h3 className='tracking-[3px] font-semibold py-3'>ABOUT ZOMATO</h3>
              <ul>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Who We Are</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Blog</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Work With Us</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Investor Relations</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Report Fraud</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Press Kit</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className='tracking-[3px] font-semibold py-3 uppercase'>Zomaverse</h3>
              <ul>
              <li className='py-1 text-gray-600 hover:text-black '><a href="">Zomato</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Blinkit</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Feed India</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Hyperpure</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Zomato Live</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Zomaland</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Weather Union</a></li>
              </ul>
            </div>

            <div>
              <h3 className='tracking-[3px] font-semibold py-3 uppercase'>For Restaurants</h3>
              <ul>
              <li className='py-1 text-gray-600 hover:text-black '><a href="">Partners With Us</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Apps For You</a></li>
              </ul>
            </div>

            <div>
              <h3 className='tracking-[3px] font-semibold py-3 uppercase'>Learn More</h3>
              <ul>
              <li className='py-1 text-gray-600 hover:text-black '><a href="">Privacy</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Security</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Terms</a></li>
                <li className='py-1 text-gray-600 hover:text-black '><a href="">Sitemap</a></li>
              </ul>
            </div>


            <div>
              <h3 className='tracking-[3px] font-semibold py-3 uppercase'>Social Links</h3>
              <div className='flex gap-[10px] text-[25px]'>
                <a href=""><FaLinkedin className=''/></a>
                <a href=""><FaInstagramSquare/></a>
                <a href=""><FaSquareXTwitter/></a>
                <a href=""><FaYoutubeSquare/></a>
                <a href=""><FaFacebook/></a>
              </div>
              <div className='py-6'>
                <a href="">
                  <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="appstoreDownload" className='w-[50%] sm:w-[40%] lg:[60%] ' />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="googleplaystoreDownload" className='w-[50%] sm:w-[40%] lg:[60%] ' />
                </a>
              </div>
            </div>
        </div>
      </div>


      <div className='max-w-[1100px] mx-auto py-4'>
        <p className='text-gray-500 text-[15px]'>
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
        </p>
      </div>
    </section>
  )
}
