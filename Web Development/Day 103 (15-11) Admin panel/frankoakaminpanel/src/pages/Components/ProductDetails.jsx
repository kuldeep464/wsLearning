import React from 'react'

export default function ProductDetails() {
    return (
        <div>
            <div className='py-3 px-4'>
                Home / Product / <span className='text-blue-700 font-semibold'>Product Details</span>
            </div> <hr />

            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className='p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        Product Details
                    </div>
                    <div className='p-3'>
                        <form action="">
                            <div className='flex flex-col mb-4 gap-2'>
                                <label htmlFor="" className='font-semibold'>Product Name</label>
                                <input type="text" name='productname' className='border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Enter Product Name' />
                            </div>
                            <div className='mb-5 flex flex-col gap-2'>
                                <label htmlFor="" className='font-semibold'>Product Description</label>
                                <textarea name="productdescription" id="" className='border-[1px] rounded-lg border-gray-300 resize-none p-2 h-[100px]' placeholder='Add Product Description...'></textarea>
                            </div>
                            <div className='mb-5 flex flex-col gap-2'>
                                <label htmlFor="" className='font-semibold'>Short Description</label>
                                <textarea name="shortdescription" id="" className='border-[1px] rounded-lg border-gray-300 resize-none p-2 h-[100px]' placeholder='Add Product Short Description...'></textarea>
                            </div>

                            <div className='py-5 flex flex-col gap-2'>
                                <label htmlFor="" className='font-semibold'>Product Image</label>
                                <input type="file" name="productimage" className=" w-full border border-gray-200 shadow-sm rounded-lg text-sm  file:bg-gray-50 file:border-0 file:me-4  file:py-3 file:px-4 " multiple="" />
                            </div>
                            <div className='py-5 flex flex-col gap-2'>
                                <label htmlFor="" className='font-semibold'> Image Animation</label>
                                <input type="file" name="productimageanimation" className=" w-full border border-gray-200 shadow-sm rounded-lg text-sm  file:bg-gray-50 file:border-0 file:me-4  file:py-3 file:px-4 " multiple="" />
                            </div>

                            <div className='py-5 flex flex-col gap-2'>
                                <label htmlFor="" className='font-semibold'> Product Gallery</label>
                                <input type="file" name="productgallery" className=" w-full border border-gray-200 shadow-sm rounded-lg text-sm  file:bg-gray-50 file:border-0 file:me-4  file:py-3 file:px-4 " multiple="" />
                            </div>

                            <div className='grid grid-cols-2 pb-7 gap-6'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="" className='font-semibold'>Price</label>
                                    <input type="text" name='productprice' className='border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Product Price' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="" className='font-semibold'>MRP</label>
                                    <input type="text" name='productMRP' className='border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Product MRP' />
                                </div>
                            </div>


                            <div className='flex flex-col gap-2 pb-7'>
                                <label htmlFor="" className='font-semibold'>Select Parent Category</label>
                                <select name="selectparentcatproduct" id="" className='border-[1px] border-gray-300 p-2 rounded-lg'>
                                    <option value="">
                                        --Select Parent Category--
                                    </option>
                                    <option value="">
                                        Men's
                                    </option>
                                    <option value="">Women</option>
                                    <option value="">Sale</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 pb-7'>
                                <label htmlFor="" className='font-semibold'>Select Sub Category</label>
                                <select name="selectsubcatproduct" id="" className='border-[1px] border-gray-300 p-2 rounded-lg'>
                                    <option value="">
                                        --Select Sub Category--
                                    </option>
                                    <option value="">Shirt</option>
                                    <option value="">T-Shirt</option>
                                </select>
                            </div>


                            <div className='grid grid-cols-2 gap-6 pb-7'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="" className='font-semibold'>Size</label>
                                    <select name="selectsubcatproduct" id="" className='border-[1px] border-gray-300 p-2 rounded-lg'>
                                        <option value="">
                                            --Select Size--
                                        </option>
                                        <option value="">S</option>
                                        <option value="">M</option>
                                        <option value="">L</option>
                                        <option value="">Xl</option>
                                        <option value="">XXl</option>
                                    </select>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="" className='font-semibold'>Color</label>
                                    <select name="selectcolorproduct" id="" className='border-[1px] border-gray-300 p-2 rounded-lg'>
                                        <option value="">
                                            --Select Color--
                                        </option>
                                        <option value="">Red</option>
                                        <option value="">Black</option>
                                        <option value="">Orange</option>
                                    </select>
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
                                <button className='p-2 bg-purple-600 px-5 text-white font-semibold rounded-md'>Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
