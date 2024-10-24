import React from 'react'

export default function GetZomato() {
  return (
    <section className='bg-[rgb(255,251,247)] p-3 py-[50px]'>
      <div className='max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[40%_auto]'>
        <div>
          <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="getappMobilePic" />
        </div>

        <div className='px-[20px]'>
          <h1 className='text-[35px] font-semibold'>Get the Zomato app</h1>
          <p>We will send you a link, open it on your phone to download <br /> the app</p>
          <form action="" className='py-[30px]'>
            <div className='flex gap-[40px] my-[20px]'>
              <div className='flex gap-3 text-[18px]'>
                <input type="radio" name='mode' id='email'/>
                <label htmlFor="email" >Email</label>
              </div>
              <div className='flex gap-3 text-[18px]'>
                <input type="radio" name='mode' id='phone'  />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-[60%_auto] gap-[10px]' >
              <input type="text" placeholder='Email' className='border-[1px] py-[5px] px-[10px] rounded-[10px]' />
              <button className='border-[1px] bg-red-500 rounded-[10px] py-[5px] px-[10px] text-[20px] text-white'>Share App Link</button>
            </div>
            <div>
              <p className='py-[20px]'>Download app from</p>
              <div className='grid grid-cols-2 gap-[20px] sm:w-[50%] mx-auto'>
                <a href="">
                  <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="Googleplaydownload" />
                </a>
                <a href="">
                  <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="appstoredownload" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
