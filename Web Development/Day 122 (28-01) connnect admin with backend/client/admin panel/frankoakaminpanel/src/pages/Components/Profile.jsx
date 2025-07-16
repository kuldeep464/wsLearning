import React from 'react'

export default function Profile() {
    return (
        <div>
            <div className='py-3 px-4'>
                Home / <span className='text-blue-700 font-semibold'>Profile</span>
            </div> <hr />

            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className='p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        Profile
                    </div>
                    <div className='p-3 flex'>
                        <div className='w-[55%]'>
                            <form action="">
                                <div className='flex flex-col gap-2 pb-[30px]'>
                                    <label htmlFor="" className='font-semibold'>Name</label>
                                    <input type="text" name='name' placeholder='Enter your name' className='border-[1px] border-gray-300 rounded-[10px] p-2' />
                                </div>
                                <h2 className='font-semibold'>Social Links</h2>
                                <div className='py-4 flex items-center gap-4'>
                                    <label htmlFor="">
                                        <svg fill="black" className="w-5 h-5 me-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path></svg>
                                    </label>
                                    <input type="text" name='facebook' placeholder='Enter Facebook Account Link' className='border-[1px] border-gray-300 rounded-[10px] p-2 w-full' />
                                </div>
                                <div className='py-4 flex items-center gap-4'>
                                    <label htmlFor="">
                                        <svg fill="black" className="w-5 h-5 me-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                    </label>
                                    <input type="text" name='instagram' placeholder='Enter Instagram Account Link' className='border-[1px] border-gray-300 rounded-[10px] p-2 w-full' />
                                </div>
                                <div className='py-4 flex items-center gap-4'>
                                    <label htmlFor="">
                                        <svg fill="black" className="w-5 h-5 me-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path></svg>
                                    </label>
                                    <input type="text" name='youtube' placeholder='Enter Youtube Account Link' className='border-[1px] border-gray-300 rounded-[10px] p-2 w-full' />
                                </div>
                                <div className='py-4 flex items-center gap-4'>
                                    <label htmlFor="">
                                        <svg fill="black" className="w-5 h-5 me-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                                    </label>
                                    <input type="text" name='x' placeholder='Enter X Account Link' className='border-[1px] border-gray-300 rounded-[10px] p-2 w-full' />
                                </div>

                                <div className='font-semibold text-[18px] py-4'>Logo</div>

                                <div className='ps-4 mb-5'>
                                    <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723766400&semt=ais_hybrid" className='w-[80px] border-[2px] border-black rounded-lg' alt="" />
                                </div>

                                <div className='font-semibold text-[18px] py-4'>Sub Logo</div>

                                <div className='ps-4'>
                                    <img src="https://img.freepik.com/free-vector/vortex-abstract-modern-logo_530521-889.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723680000&semt=ais_hybrid" className='w-[80px] border-[2px] border-black rounded-lg' alt="" />
                                </div>

                                <div className='py-[30px] mt-[50px] flex flex-col gap-4'>
                                    <label htmlFor="" className='font-semibold'>Change Password</label>
                                    <div className='flex justify-between items-center'>
                                        <input type="text" name='changePassword' placeholder='Enter X Account Link' className='border-[1px] border-gray-300 rounded-[10px] p-2 w-[60%] shadow-lg' />
                                        <button className='p-2 bg-purple-600 px-5 text-white font-semibold rounded-md'>Submit</button>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                        <div className='pt-[100px] ps-[100px]'>
                            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='w-[170px] h-[160px] rounded-[50%]' alt="" />
                            <h2 className='text-[18px] text-center pt-[20px] font-semibold'>Profile Image</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
