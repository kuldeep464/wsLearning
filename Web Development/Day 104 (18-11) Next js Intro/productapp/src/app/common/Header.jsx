import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='max-w-[1320px] mx-auto flex gap-10 py-4'>
        <div className='text-xl font-semibold'>
            Home
        </div>
        <Link href={'/product'} className='text-xl font-semibold'>
            Product
        </Link>
    </div>
  )
}
