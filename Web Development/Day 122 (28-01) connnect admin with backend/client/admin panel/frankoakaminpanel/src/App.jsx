
import './App.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { saveLogin } from './slice/AdminAuthSlice'
import { useEffect } from 'react'

function App() {

  let navigate = useNavigate()

  let loginData = useSelector((myAllStore) => {
    return myAllStore.loginStore.adminDetails
  })


  let dispatch = useDispatch()

  let apiBasePath = import.meta.env.VITE_APIBASEPATH

  let adminLogin = (event) => {
    event.preventDefault();
    let obj = {
      adminUsername: event.target.adminUsername.value,
      adminPassword: event.target.adminPassword.value
    }
    axios.post(`${apiBasePath}admin/adminAuth/auth`, obj)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status == 1) {
          dispatch(saveLogin({ admin: finalRes.data }))
        }
        else {
          Swal.fire({
            title: "Sorry!",
            text: finalRes.msg,
            icon: "error"
          });
        }
      })
  }

  useEffect(() => {
    if(loginData){
      navigate('/home')
    }
  }, [loginData])

  return (
    <>
      <div className='flex bg-[rgb(249,250,251)] items-center justify-center h-[100vh]'>
        <div>
          <div className='flex gap-3 justify-center pb-7'>
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="" />
            <h2 className='text-[24px] font-semibold'> Frank and Oak</h2>
          </div>
          <form onSubmit={adminLogin} action="" className='shadow-xl p-7 w-[500px] bg-white mx-auto'>
            <h1 className='text-[24px] font-semibold py-4'>Sign in to your account</h1>
            <div className='pb-6'>
              <label htmlFor="" className='font-semibold text-[15px]'>Your email</label> <br />
              <input type="text" placeholder='Enter Your Username' name='adminUsername' className='bg-[rgb(249,250,251)] border border-gray-300 rounded p-2 w-[100%] mt-2' />
            </div>
            <div className='pb-6'>
              <label htmlFor="" className='font-semibold text-[15px]'>Password</label> <br />
              <input type="password" placeholder='Enter Your Password' autoComplete='true' name='adminPassword' className='border bg-[rgb(249,250,251)] border-gray-300 rounded p-2 w-[100%] mt-2' />
            </div>
            <div>

              <button type='submit' className='w-[100%] bg-blue-600 rounded-lg text-white font-semibold py-2'>
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
