import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  let userNameRef=useRef()
  let userEmailRef=useRef()
  let userLogin=(event)=>{
    event.preventDefault()
    let obj={
      'email':event.target.email.value,
      'password':event.target.password.value
    }
    axios.post(`http://localhost:8000/login`,obj)
    .then((res)=>{
      console.log(res.data)
    })
  }

  let SearchUser = ()=>{
    
    axios.get(`http://localhost:8000/user/insert?uname=${userNameRef.current.value}&uemail=${userEmailRef.current.value}`)
    .then((res)=>{
      console.log(res.data)
    })


  }

  return (
    <>
      <div className='max-w-[400px] mx-auto'>
        <form action="" className='border-[0.5px] p-5 mt-6 border-gray-500 rounded-xl shadow-lg' onSubmit={userLogin}>
          <div className='text-2xl font-semibold py-4'>Login</div>
          <div className='flex flex-col'>
            <label htmlFor="" className='font-semibold py-1'>Your Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' className='border-2 p-1' required/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='font-semibold py-1'>Your Password</label>
            <input type="password" placeholder='Enter Your Password' name='password' className='border-2 p-1' required/>
          </div>
          <div>
            <button className='bg-violet-600 text-white w-full my-3 py-2 font-semibold text-lg rounded-lg hover:bg-blue-900 duration-300'>Login</button>
          </div>
        </form>
      </div>

      <form className='max-w-[400px] border-[0.5px] border-gray-500 rounded-lg mx-auto my-10 shadow-lg p-3'>
        <input type="text" className='border-2 p-1 w-full my-2' ref={userNameRef} placeholder='Enter username' required />
        <input type="email" className='border-2 p-1 w-full my-2' ref={userEmailRef} placeholder='Enter Email' required />
        <button className='bg-violet-600 text-white w-full my-3 py-2 font-semibold text-lg rounded-lg hover:bg-blue-900 duration-300' onClick={SearchUser}>Search Users</button>
      </form>
    </>
  )
}

export default App
