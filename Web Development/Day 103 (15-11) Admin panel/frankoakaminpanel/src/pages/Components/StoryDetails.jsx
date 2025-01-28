import React, { useState } from 'react'

export default function StoryDetails() {
    let [storyImage, setStoryImage] = useState(null)
    let [bannerImage, setBannerImage] = useState(null)
    const storyimage = (event) => {
        const file = event.target.files[0];
        if (file) {
            setStoryImage(URL.createObjectURL(file));
        }
    };
    const bannerimage = (event) => {
        const file = event.target.files[0];
        if (file) {
            setBannerImage(URL.createObjectURL(file));
        }
    };
    return (
        <div>
            <div className='py-3 px-4'>
                Home / Story / <span className='text-blue-700 font-semibold'>Story Details</span>
            </div> <hr />

            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className='p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        Our Story's
                    </div>
                    <div className='p-3'>
                        <form action="">
                            <div className='flex flex-col mb-4 gap-2'>
                                <label htmlFor="" className='font-semibold'>Story Name</label>
                                <input type="text" name='Storyname' className='border-[1px] border-gray-300 p-2 rounded-lg' placeholder=' Story Name' />
                            </div>
                            <div className='py-5 grid items-center gap-6 grid-cols-2'>
                                <div className='py-5 flex flex-col gap-2'>
                                    <label htmlFor="" className='font-semibold'>Image </label>
                                    <input type="file" name="categoryFileImage" onChange={storyimage} className=" w-full border border-gray-200 shadow-sm rounded-lg text-sm  file:bg-gray-50 file:border-0 file:me-4  file:py-3 file:px-4 " multiple="" />
                                </div>
                                {storyImage && (
                                    <img
                                        src={storyImage}
                                        alt="Preview"
                                        className=" w-[100px] h-[100px] object-cover rounded-lg shadow-lg"
                                    />
                                )}
                            </div>

                            <div className='py-5 grid items-center gap-6 grid-cols-2'>
                                <div className='py-5 flex flex-col gap-2'>
                                    <label htmlFor="" className='font-semibold'>Banner Image</label>
                                    <input type="file" name="categoryFileImage" onChange={bannerimage} className=" w-full border border-gray-200 shadow-sm rounded-lg text-sm  file:bg-gray-50 file:border-0 file:me-4  file:py-3 file:px-4 " multiple="" />
                                </div>
                                {bannerImage && (
                                    <img
                                        src={bannerImage}
                                        alt="Preview"
                                        className=" w-[100px] h-[100px] object-cover rounded-lg shadow-lg"
                                    />
                                )}
                            </div>
                            <div className='mb-5 flex flex-col gap-2'>
                                <label htmlFor="" className='font-semibold'> Description</label>
                                <textarea name="storydescription" id="" className='border-[1px] rounded-lg border-gray-300 resize-none p-2 h-[100px]' placeholder=' Description...'></textarea>
                            </div>


                            <div>
                                <p className='font-semibold mb-2' htmlFor="">Status :</p>
                                <div className='flex items-center gap-6'>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name='status' id='active' />
                                        <label htmlFor="active">Active</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name='status' id='deactive' />
                                        <label htmlFor="deactive">Deactive</label>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-7'>
                                <button className='p-2 bg-purple-600 px-5 text-white font-semibold rounded-md'>Add Story</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
