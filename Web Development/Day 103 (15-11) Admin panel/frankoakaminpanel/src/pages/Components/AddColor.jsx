import React from 'react'

export default function AddColor() {
    return (
        <div>
            <div className='py-3 px-4'>
                Home / Color / <span className='text-blue-700 font-semibold'>Add Color</span>
            </div> <hr />

            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className='p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        Add Colors
                    </div>

                    <div className='p-3'>
                        <form action="">
                            <div className='flex gap-3 flex-col'>
                                <label htmlFor="" className='font-semibold'>Color Name</label>
                                <input type="text" name='colorName' placeholder='Color Name' className='border-[1px] border-gray-300 rounded-[10px] p-2 w-full' />
                            </div>

                            <div className='flex flex-col gap-3 py-7'>
                                <label htmlFor="" className='font-semibold'>Color Picker</label>

                                <div>

                                    <input type="color" name='colorPicker' className='border-[1px] border-gray-300 rounded-[10px] p-1' />
                                </div>
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
                            <button className='p-2 bg-purple-600 px-5 text-white font-semibold rounded-md'>Select Color</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
