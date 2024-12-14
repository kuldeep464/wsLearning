import React, { useContext } from 'react'
import { LoginContext } from '../MainContext'

export default function Header() {
    let { userinfo, setUserInfo } = useContext(LoginContext)
    return (
        <div>
            <div className="setbg">
                <div className="w-full  md:max-w-[1400px] mx-auto py-4  relative px-4  sm:sticky top-0 text-xl justify-between flex text-[white] ">
                    <h1 className="text-[#45ce55] text-2xl ml-2 sm:ml-0 font-extrabold">Blog-<span className="text-[#ff4d00]">st</span></h1>
                    <div className="hidden sm:block">
                        <ul className="flex  text-lg  gap-16 cursor-pointer">
                            <a href="/">
                                <li className="hover:text-[#45ce55]  font-bold capitalize">blog</li>
                            </a>
                            <a href="/create">
                                <li className="hover:text-[#45ce55]  font-bold capitalize">create</li>
                            </a>
                            <a href="/listing">
                                <li className="hover:text-[#45ce55]  font-bold capitalize">listing</li>
                            </a>

                            {userinfo !== null ? 

                                <>
                                    {userinfo.user.displayName}
                                    <button onClick={()=>setUserInfo(null)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">LogOut</button>
                                    
                                </>

                            
                            :

                                <li><a href="/login"><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">Login</button></a></li>

                            }


                        </ul>
                    </div>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="sm:hidden cursor-pointer text-2xl block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                    </svg>
                    <div className="sm:hidden myshadow font-bold  top-[66px] duration-75  w-[40%] bg-white text-black h-[100vh] absolute block
         left-[-100%]">
                        <ul className="flex flex-col text-lg gap-20 pt-10 items-center cursor-pointer">
                            <a href="/">
                                <li className="hover:text-[#45ce55] hover:font-bold capitalize">blog</li>
                            </a>
                            <a href="/create">
                                <li className="hover:text-[#45ce55] hover:font-bold capitalize">create</li>
                            </a>
                            <a href="/listing">
                                <li className="hover:text-[#45ce55] hover:font-bold capitalize">listing</li>
                            </a>
                            <li><a href="/login"><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">Login</button></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
