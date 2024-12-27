import React from 'react'

export default function ForgetPassword() {
  return (
    <div className='flex flex-col py-5 items-center'>
    <div>
        <h1 className='text-3xl py-3 font-semibold'>Forget Password ?</h1>
        <p className='text-[14px] pb-4'>Please enter your email below and we will send you a link to reset your password.</p>
        <form action="">
            <label htmlFor="" className='text-[13px] font-semibold'>Email Address</label>
            <input type="email" placeholder='Enter Email' className='w-[100%] my-2' />
            <button className='bg-black my-4 text-white w-[40%] py-3 text-sm hover:bg-gray-600  duration-300'> Send</button>
        </form>
    </div>
    </div>
  )
}
