import React from 'react'

export default function AddSubCategory() {
    return (
        <div>
            <div className='py-3 px-4'>
                Home / Sub Category / <span className='text-blue-700 font-semibold'>Add Sub Category</span>
            </div> <hr />

            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className='p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        Add Sub Category
                    </div>
                    <div className='p-3'>
                        <form action="">
                            <div className='flex flex-col mb-4 gap-2'>
                                <label htmlFor="" className='font-semibold'>Category Name</label>
                                <input type="text" name='subcategoryName' className='border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Enter Category Name' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='font-semibold'>Parent Category Name</label>
                                <input type="text" name='subparentcategoryName' className='border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Enter Category Name' />
                            </div>
                            <div className='py-5 flex flex-col gap-2'>
                                <label htmlFor="" className='font-semibold'>Category Image</label>
                                <input type="file" name="subcategoryFileImage" className=" w-full border border-gray-200 shadow-sm rounded-lg text-sm  file:bg-gray-50 file:border-0 file:me-4  file:py-3 file:px-4 " multiple="" />
                            </div>
                            <div className='mb-5 flex flex-col gap-2'>
                                <label htmlFor="" className='font-semibold'>Category Description</label>
                                <textarea name="" id="" className='border-[1px] rounded-lg border-gray-300 resize-none p-2 h-[100px]' placeholder='Add Product Description...'></textarea>
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
                            <button className='p-2 bg-purple-600 px-5 text-white font-semibold rounded-md'>Add Sub Category</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}