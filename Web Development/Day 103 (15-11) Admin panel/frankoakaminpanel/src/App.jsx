import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  let navigate=useNavigate()

  let SignIN=()=>{
    navigate('/Home')
  }

  return (
    <>
      <div className='flex bg-[rgb(249,250,251)] items-center justify-center h-[100vh]'>
        <div>
          <div className='flex gap-3 justify-center pb-7'>
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="" />
            <h2 className='text-[24px] font-semibold'> Frank and Oak</h2>
          </div>
          <form action="" className='shadow-xl p-7 w-[500px] bg-white mx-auto'>
            <h1 className='text-[24px] font-semibold py-4'>Sign in to your account</h1>
            <div className='pb-6'>
              <label htmlFor="" className='font-semibold text-[15px]'>Your email</label> <br />
              <input type="email" placeholder='name@company.com' className='bg-[rgb(249,250,251)] border border-gray-300 rounded p-2 w-[100%] mt-2' />
            </div>
            <div className='pb-6'>
              <label htmlFor=""  className='font-semibold text-[15px]'>Password</label> <br />
              <input type="password" placeholder='company@password'  className='border bg-[rgb(249,250,251)] border-gray-300 rounded p-2 w-[100%] mt-2' />
            </div>
            <div>
              <button onClick={SignIN} className='w-[100%] bg-blue-600 rounded-lg text-white font-semibold py-2'>
                 Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
