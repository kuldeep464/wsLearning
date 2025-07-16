import React from 'react'

export default function Categories({ categoryData, categoryPath }) {
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    return (
        <div className='py-10 px-4'>
            <div>
                <h1 className='text-[32px]'>Our best categories at their best prices ever</h1>
            </div>
            <div className='pt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                {categoryData.length > 0 ?
                    categoryData.map((items, index) => {
                        return (
                            <div className='cursor-pointer' key={index}>

                                <img src={apiBaseUrl+categoryPath+items.catImage} alt="" className='h-[300px] w-full' />

                                <p className=' px-4 font-semibold'>{items.catName}</p>
                            </div>
                        )
                    })


                    :

                    ''
                }


            </div>
        </div>
    )
}
