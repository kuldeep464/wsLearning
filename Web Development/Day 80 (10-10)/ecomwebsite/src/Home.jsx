import React from 'react'
import { productData } from './data'

export default function Home() {
    return (
        <div className='max-w-[1230px] m-auto'>
            <h1 className='text-[35px] py-6 font-bold text-blue-700 underline'>My Products :-</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]'>
                {productData.map((items)=>{
                    return(<Productitems pdata={items}/>)
                })}
                
            </div>
        </div>
    )
}


export function Productitems({pdata}) {
    let {price,title,thumbnail,category}=pdata
    return (
        <>
            <div class="group relative my-6 border-2 p-[10px] rounded">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src={thumbnail} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                {title}
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">{category}</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">${price}</p>
                </div>
            </div>
        </>
    )
}

