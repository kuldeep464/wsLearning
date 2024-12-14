import React from 'react'

export default function SizeDetails() {
    return (
        <div>
            <div className='py-3 px-4'>
                Home / Color / <span className='text-blue-700 font-semibold'>Add Color</span>
            </div> <hr />

            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className='p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        Add Size
                    </div>

                    <div className='p-3'>
                        <form action="">
                            <div className='flex flex-col gap-2 mb-5'>
                                <label htmlFor="" className='font-semibold'>Size Name</label>
                                <input type="text" name='sizeName' placeholder='Enter Size' className='p-2 rounded-[10px] border-[1px] border-gray-300 w-full' />
                            </div>
                            <div>
                                <h3 className='font-semibold pb-2'>Status :</h3>
                                <div className='flex items-center gap-5'>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" id='Active' name='status' />
                                        <label htmlFor="Active">Active</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" id='DeActive' name='status' />
                                        <label htmlFor="DeActive">Deactive</label>
                                    </div>
                                </div>
                            </div>
                            <div className='py-5'>
                                <button className='p-2 text-white px-3 font-semibold rounded-md bg-purple-700'>Add Size</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
