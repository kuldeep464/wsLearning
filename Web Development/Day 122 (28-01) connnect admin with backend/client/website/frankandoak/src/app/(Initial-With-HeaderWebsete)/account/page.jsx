'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export default function AccountPage() {
    let [order, setOrder] = useState([])
    let [openTabs, setOpenTabs] = useState(-1)
    let [showAccountPage, setShowAccountPage] = useState(false)
    let data = useSelector((Store) => Store.loginStore.webAuthDetails)
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    let token = useSelector((store) => store.loginStore.token)
    let myOrder = () => {
        axios.get(`${apiBaseUrl}web/order/view-order`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        )
            .then((res) => {
                if (res.data.status) {
                    setOrder(res.data.data)
                    console.log(res.data.data)
                }
            })
    }
    useEffect(() => {
        myOrder()
    }, [])


    useEffect(() => {
        if (data) {
            setShowAccountPage(true)
        }
        else {
            setShowAccountPage(false)
        }
    }, [])


    return (

        <div>
            {showAccountPage ?
                <div className='max-w-[1390px] mx-auto grid gap-6 grid-cols-[25%_auto]'>
                    <div>
                        <div className='text-[13px] flex items-center gap-2 mb-7 mt-3'>
                            <Link href={'/'} className='cursor-pointer hover:underline'>Home /</Link >
                            <span className='cursor-pointer hover:underline'> My Account /</span>
                            <a href='' className='cursor-pointer hover:underline'> Account Settings</a>
                        </div>
                        <div className='bg-gray-200 p-4 mb-5'>
                            <ul>
                                <li className={`cursor-pointer hover:underline my-2 ${openTabs == 3 ? 'font-semibold' : ''} `} onClick={() => setOpenTabs(3)} >Orders & returns</li>
                                <li className='cursor-pointer hover:underline my-2'>Address book</li>
                                <li className={`cursor-pointer hover:underline my-2 ${openTabs == -1 ? "font-semibold" : ''}  `} onClick={() => setOpenTabs(-1)}>Account Settings</li>
                                <Link href='/pages/wishlist' className='cursor-pointer hover:underline my-2 flex items-center gap-2'>Wishlist <CiHeart className='text-[18px]' /></Link>
                                <li className='cursor-pointer hover:underline my-2'>Frank's Club</li>
                                <li className='cursor-pointer hover:underline my-2'>Refer a friend</li>

                            </ul>
                        </div>
                        <div className='bg-gray-200 p-4 mb-5'>
                            <h3 className='text-[25px]'>Need Help?</h3>
                            <p>Our Member Services team is online daily</p>
                            <div>/ <a href='mailto:kuldeeppoonia464@gmail.com' className='underline cursor-pointer' >Email</a></div>
                        </div>
                    </div>
                    {openTabs == -1 &&
                        <div>
                            <h2 className='mt-10 '><span className='text-[35px]'> Account Settings</span> <sub onClick={() => setOpenTabs(1)} className='underline text-green-400 ms-1 cursor-pointer text-[13px] font-semibold'>Edit</sub> </h2>
                            <div className='my-4 text-[13px]'>
                                <div className='my-2'>First Name : <span className='font-semibold'>Kuldeep</span></div>
                                <div className='my-2' >Last Name :  <span className='font-semibold'>Poonia</span></div>
                                <div className='my-2'>Email Address :  <span className='font-semibold'>kuldeeppoonia464@gmail.com</span></div>
                                <div className='my-2'>I shop For :  <span className='font-semibold'>All</span></div>
                                <div className='my-2'>Preffered Language :  <span className='font-semibold'>English</span></div>
                            </div>
                            <div className='my-7'>
                                <h2 className='mt-10 '><span className='text-[35px]'> Password</span> <sub onClick={() => setOpenTabs(2)} className='underline text-green-400 ms-1 cursor-pointer text-[13px] font-semibold'>Edit</sub> </h2>
                                <div className='my-4 text-[13px]'>
                                    <div className='my-2'>Password : <span className='font-semibold'>*********</span></div>

                                </div>
                            </div>
                        </div>
                    }
                    {openTabs == 1 &&
                        <UpdateProfileTab setOpenTabs={setOpenTabs} />
                    }
                    {openTabs == 2 &&
                        <ChangePasswordTab setOpenTabs={setOpenTabs} />
                    }
                    {openTabs == 3 &&

                        <OrderAndReturns setOpenTabs={setOpenTabs} order={order} />

                    }

                </div>

                :

                <div className='h-screen  text-[35px] flex items-center justify-center'>
                    Please login to access this page...!
                </div>


            }
        </div>
    )
}

function ChangePasswordTab({ setOpenTabs }) {
    let [oldPasswordType, setOldPasswordType] = useState(false)
    let [newPasswordType, setNewPasswordType] = useState(false)
    let [confirmPasswordType, setConfirmPasswordType] = useState(false)
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    let data = useSelector((Store) => Store.loginStore.webAuthDetails)
    let token = useSelector((store) => store.loginStore.token)
    let changePassword = (event) => {
        event.preventDefault()

        if (event.target.oldPassword.value == event.target.newPassword.value) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: 'Old and new password cannot be same',
                // timer: 1500
            });
        }
        else if (event.target.newPassword.value !== event.target.confirmNewPassword.value) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: 'Password doesn`t match',
                // timer: 1500
            });
        }
        else {
            let obj = {
                oldPassword: event.target.oldPassword.value,
                newPassword: event.target.newPassword.value,
                confirmNewPassword: event.target.confirmNewPassword.value,
                data
            }
            axios.post(`${apiBaseUrl}web/auth/change-password`, obj,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: finalRes.msg,
                            // timer: 1500
                        });
                        setOpenTabs(-1)

                    }
                    else {
                        Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: finalRes.msg,
                            // timer: 1500
                        });
                    }
                })

        }

    }
    return (
        <div>
            <form action="" className='my-9' onSubmit={changePassword}>
                <div className='text-[35px] mt-5'>
                    Change Password
                </div>
                <div className='flex flex-col gap-2 my-4'>
                    <label htmlFor="">
                        Old Password
                    </label>
                    <div className='grid grid-cols-[93%_auto] items-center my-3 border-[0.1px] border-gray-500 md:w-[50%] rounded-md' >
                        <input type={oldPasswordType ? 'text' : 'password'} name='oldPassword' required placeholder='Enter your old password' className='border-0 rounded-md focus:ring-0 ' autoFocus autoComplete='true' />
                        <span className='underline text-[20px] cursor-pointer' onClick={() => setOldPasswordType(!oldPasswordType)}>{oldPasswordType ? <IoEyeOffOutline /> : <IoEyeOutline />} </span>
                    </div>
                </div>
                <div className='flex flex-col gap-2 mb-4'>
                    <label htmlFor="">
                        New Password
                    </label>
                    <div className='grid grid-cols-[93%_auto] items-center my-3 border-[0.1px] border-gray-500 md:w-[50%] rounded-md' >
                        <input type={newPasswordType ? 'text' : 'password'} name='newPassword' required placeholder='Enter your new password' className='border-0 rounded-md focus:ring-0' autoComplete='true' />
                        <span className='underline text-[20px] cursor-pointer text-center' onClick={() => setNewPasswordType(!newPasswordType)}>{newPasswordType ? <IoEyeOffOutline /> : <IoEyeOutline />} </span>
                    </div>
                </div>
                <div className='flex flex-col gap-2 mb-4'>
                    <label htmlFor="">
                        Confirm New Password
                    </label>
                    <div className='grid grid-cols-[93%_auto] items-center my-3 border-[0.1px] border-gray-500 md:w-[50%] rounded-md' >
                        <input type={confirmPasswordType ? 'text' : 'password'} name='confirmNewPassword' required placeholder='Confirm your new password' className='border-0 rounded-md focus:ring-0' autoComplete='true' />
                        <span className='underline text-[20px] cursor-pointer text-center' onClick={() => setConfirmPasswordType(!confirmPasswordType)}>{confirmPasswordType ? <IoEyeOffOutline /> : <IoEyeOutline />} </span>
                    </div>
                </div>
                <div className='flex justify-around items-center md:w-[50%]'>
                    <div className='cursor-pointer border-[1px] border-gray-400 py-1 px-2 rounded-md hover:shadow-md hover:shadow-black duration-300' onClick={() => setOpenTabs(-1)}>Cancel</div>
                    <button type='submit' className='border-[1px] border-black bg-black text-white py-1 px-2 rounded-md hover:bg-white hover:text-black duration-300 hover:shadow-md hover:shadow-black'>Change Password</button>
                </div>
            </form>



        </div>
    )
}

function UpdateProfileTab({ setOpenTabs }) {
    return (
        <div>
            <button onClick={() => setOpenTabs(-1)}>Cancel</button>
            Profile
        </div>
    )
}

function OrderAndReturns({ setOpenTabs, order }) {

    return (
        <div className='mt-10'>
            <button onClick={() => setOpenTabs(-1)}>Go Back</button>
            <div className='mt-4'>
                <div className='flex justify-between'>
                    <h2 className='text-[23px] text-gray-700 font-semibold'>  Orders & returns </h2>
                    <div className='flex gap-3 items-center'>
                        <span>from </span>
                        <select name="orderFilters" id="" className='py-1 '>
                            <option value="all">All</option>
                            <option value="oneyear">One Year</option>
                            <option value="thisMonth">This Month</option>
                            <option value="thisWeek">This Week</option>
                        </select>
                    </div>
                </div>
                <div className='max-w-[970px] mx-auto mt-10 py-3  '>
                    {order.length > 0 ?
                        order.map((item, index) => {
                            return (
                                <div key={index} className='shadow-lg px-5 mb-5 py-4 flex justify-between items-center '>
                                    <div className='flex gap-6 '>
                                        <div className='mr-5'>
                                            <h3 className='text-gray-700'>Order ID:</h3>
                                            <p className='font-semibold'>{item._id}</p>
                                        </div>
                                        <div>
                                            <h3 className='text-gray-700 '>Date:</h3>
                                            <p className='font-semibold'>{item.createdAt.split('T')[0]}</p>
                                        </div>
                                        <div>
                                            <h3 className='text-gray-700 '>Price:</h3>
                                            <p className='font-semibold'>Rs {item.orderAmount}</p>
                                        </div>
                                        <div>
                                            <h3 className='text-gray-700 '>Order Status:</h3>
                                            {item.orderStatus == 'delivered' ? 
                                            <p className='font-semibold bg-green-200 px-2 text-green-800 text-sm py-1 rounded'>{item.orderStatus}</p> : item.orderStatus=='processing' ? 
                                            <p className='font-semibold bg-yellow-200 px-2 text-yellow-600 text-sm py-1 rounded'>{item.orderStatus}</p>
                                            :

                                            <p className='font-semibold bg-red-200 px-2 text-red-600 text-sm py-1 rounded'>{item.orderStatus}</p>
                                            
                                        }
                                        </div>
                                        <div>
                                            <h3 className='text-gray-700 '>Payment Status:</h3>
                                            {item.paymentStatus=='successful' ?
                                            <p className='font-semibold bg-green-200 px-2 text-green-800 text-sm py-1 rounded'>{item.paymentStatus}</p>
                                            
                                        :
                                        item.paymentStatus=='pending' ?
                                        <p className='font-semibold bg-yellow-200 px-2 text-yellow-600 text-sm py-1 rounded'>{item.paymentStatus}</p>
                                        :

                                        <p className='font-semibold bg-red-200 px-2 text-red-600 text-sm py-1 rounded'>{item.paymentStatus}</p>
                                        
                                        }
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <button className='bg-black text-white rounded-[8px] px-3 py-1'>Order again</button>
                                        <Link href={`/account/order-detailing/${item._id}`} className='bg-gray-300 rounded-[8px] px-3 py-1'>View details</Link>
                                    </div>

                                </div>

                            )
                        })
                        :

                        'No Orders Found'}
                </div>
            </div>
        </div>
    )
}
