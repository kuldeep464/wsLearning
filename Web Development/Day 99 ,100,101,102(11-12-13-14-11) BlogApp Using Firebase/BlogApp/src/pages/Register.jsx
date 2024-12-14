import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
        <main className=" flex min-h-screen  items-center  justify-center bg-white text-black">
   <section>
      <form>
         <div className="flex md:w-[30rem] flex-col space-y-10">
            <div className="text-center text-4xl font-medium">Sign Up</div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"><input required="" name="name" type="text" placeholder="Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/></div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"><input required="" name="email" type="email" placeholder="Email " className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/></div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"><input required="" name="password" type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/></div>
            <button type="submit" className="transform btn-color rounded-sm   py-2 font-bold ">Register</button>
         </div>
      </form>
      <div className="text-center  flex flex-col gap-4  mt-6">
         <h1>or</h1>
         <button className="google-btn-color flex justify-center  gap-4 text-xl items-center hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
            </svg>
            Continue with Google
         </button>
      </div>
      <p className="text-center mt-4 cursor-pointer text-lg">Already have an accout?<span className="font-medium ml-4 underline text-indigo-500 underline-offset-4 hover:underline"> <Link to={'/login'} > Login Account</Link> </span></p>
   </section>
</main>
    </div>
  )
}
