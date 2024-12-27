"use client";
import React, { useState } from 'react'
import { Button, Modal } from "flowbite-react";
import { FaFacebookF, FaGoogle } from 'react-icons/fa6';
import { MdArrowRightAlt } from "react-icons/md";
import Link from 'next/link';

export default function LoginModal({ modalFunction }) {
    let { openModal, setOpenModal } = modalFunction
    let [loginsignupModal, setLoginSignupModal] = useState(false)
    return (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header className='py-0'>

            </Modal.Header>
            <Modal.Body className='h-[80vh] overflow-y-scroll'>
                <div className='text-center '>
                    <h1 className='text-center text-3xl pb-3'>Welcome back!</h1>
                    <p>Login to enjoy your perks</p>
                </div>
                <div className='flex justify-around items-center py-5'>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none"><g clipPath="url(#clip0_2406_20469)"><path d="M18.9397 16.0898C18.9397 15.7398 18.8797 15.3898 18.7697 15.0498C18.7397 14.9398 18.6997 14.8298 18.6497 14.7298C18.3397 13.9998 17.7997 13.3998 17.1097 13.0298C16.9097 12.9298 16.7097 12.8398 16.4897 12.7798C16.2697 12.7098 16.0497 12.6698 15.8197 12.6498C15.5897 12.6298 15.3497 12.6298 15.1197 12.6498C14.8897 12.6798 14.6697 12.7198 14.4597 12.7998C14.3497 12.8398 14.2497 12.8798 14.1497 12.9198C13.7097 13.1098 13.3197 13.3998 12.9997 13.7598C12.6797 14.1198 12.4297 14.5398 12.2797 15.0098C12.1297 15.4698 12.0697 15.9598 12.1097 16.4498C12.1497 16.9398 12.2897 17.4098 12.5297 17.8298C12.5497 17.8598 12.5697 17.8998 12.5897 17.9298C12.6497 18.0198 12.7097 18.1198 12.7697 18.1998C13.1997 18.7898 13.7997 19.2298 14.4897 19.4598C15.1797 19.6798 15.9197 19.6798 16.5997 19.4398C17.2797 19.2098 17.8797 18.7598 18.2997 18.1498C18.7197 17.5498 18.9397 16.8298 18.9297 16.0898V16.0698L18.9397 16.0898Z" fill="black"></path><path d="M8.08 3.31982L0 6.02982L5.66 23.6598C10.35 19.3498 11.28 11.8198 8.08 3.31982Z" fill="black"></path><path d="M21.8598 0.000234375L11.2598 0.150234C11.3498 6.14023 16.1598 10.9202 22.0198 10.8302L21.8698 -0.00976562L21.8598 0.000234375Z" fill="black"></path></g><defs><clipPath id="clip0_2406_20469"><rect width="22.02" height="23.66" fill="white"></rect></clipPath></defs></svg>
                        <h3>Frank's Club</h3>
                        <p className='text-[10px]'>Earn point, get Rewards</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none"><g clipPath="url(#clip0_2406_20478)"><path fillRule="evenodd" clipRule="evenodd" d="M1.94055 11.3201L11.3705 20.7501C11.5905 20.9701 11.9505 20.9701 12.1805 20.7501L21.6105 11.3201C24.2005 8.73006 24.2005 4.53006 21.6105 1.94006C19.0205 -0.649941 14.8205 -0.649941 12.2305 1.94006C11.8705 2.30006 11.7805 2.46006 11.7805 2.46006C11.7805 2.46006 11.4905 2.11006 11.3305 1.94006C8.73055 -0.649941 4.53055 -0.649941 1.94055 1.94006C-0.649453 4.53006 -0.649453 8.73006 1.94055 11.3201Z" fill="black"></path></g><defs><clipPath id="clip0_2406_20478"><rect width="23.56" height="20.92" fill="white"></rect></clipPath></defs></svg>
                        <h3>Wishlists</h3>
                        <p className='text-[10px]'>Save your favourites</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none"><g clipPath="url(#clip0_2406_20485)"><path fillRule="evenodd" clipRule="evenodd" d="M0.0208 8.73C-0.0492 9.1 0.0608 9.49 0.3008 9.78L10.8608 22.31C11.3108 22.85 12.1208 22.92 12.6608 22.46L21.7708 14.78C22.3108 14.33 22.3808 13.52 21.9208 12.98L11.3608 0.45C11.1108 0.16 10.7508 0 10.3808 0L2.3008 0.03C1.8808 0.03 1.5208 0.33 1.4508 0.75L0.0208 8.73ZM4.8308 3.93C5.2208 3.58 5.8508 3.61 6.2108 4.05C6.5308 4.44 6.4908 5.07 6.0908 5.43C5.6608 5.75 5.0708 5.71 4.7108 5.31C4.3608 4.88 4.3908 4.29 4.8308 3.93Z" fill="black"></path></g><defs><clipPath id="clip0_2406_20485"><rect width="22.21" height="22.77" fill="white"></rect></clipPath></defs></svg>
                        <h3>Early access</h3>
                        <p className='text-[10px]'>Exclusive sale perks</p>
                    </div>
                </div>

                {/* {loginsignupModal == 'Login' ? <LoginSwitch data={setLoginSignupModal} /> : <NewUserSwitch data={setLoginSignupModal} />} */}

                {loginsignupModal == true ? <LoginSwitch setLoginSignupModal={setLoginSignupModal} /> : <NewUserSwitch setLoginSignupModal={setLoginSignupModal} />}


                {/* <NewUserSwitch /> */}


            </Modal.Body>

        </Modal>
    )
}

function LoginSwitch({ setLoginSignupModal }) {



    return (
        <div>
            <div className='py-3'>
                <form action="">
                    <input type="email" placeholder='Email Address' className='border-[0.1px] w-[100%]' />
                    <div className='grid grid-cols-[90%_auto] my-3 border-[0.1px] border-gray-500'>
                        <input type="password" placeholder='Password' className='border-0' />
                        <button className='underline text-[12px]'>Show </button>
                    </div>
                    <div className='mb-4'>
                        <a href={'/forget-password'} className='text-[13px] underline font-semibold'>Forget Password? </a>
                    </div>
                    <button className='w-[100%] bg-black text-white text-xl py-2.5'>Log In</button>
                    <div className='grid grid-cols-[42%_11%_auto] gap-2 items-center py-4'>
                        <div className='border-[0.5px] '></div>
                        <div className='text-[12px]'>Social login</div>
                        <div className='border-[0.5px] '></div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                        <button className='grid grid-cols-[10%_auto] border-[0.5px] border-black items-center py-2'>
                            <FaFacebookF className='ps-3 text-[22px]' />
                            <p className='text-center'>Sign in with Facebook</p>
                        </button>
                        <button className='grid grid-cols-[10%_auto] border-[0.5px] border-black items-center py-2'>
                            <FaGoogle className='ps-3 text-[25px]' />
                            <p className='text-center'>Sign in with Google</p>
                        </button>
                    </div>
                    <div className='grid grid-cols-[40%_18%_auto] gap-2 items-center py-4'>
                        <div className='border-[0.5px] '></div>
                        <div className='text-[12px] '>Create an Account</div>
                        <div className='border-[0.5px] '></div>
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <p>Don't have an account</p>
                        <span className='flex cursor-pointer gap-2 items-center'
                            onClick={() => setLoginSignupModal(false)}
                        >Sign up <MdArrowRightAlt className='text-2xl' /></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

function NewUserSwitch({ setLoginSignupModal }) {
    return (
        <div>
            <div className='flex items-center gap-2 justify-center py-3'>
                <p>Already have an account?</p>
                <button className='flex gap-2 items-center' onClick={()=>setLoginSignupModal(true)}>Log in <MdArrowRightAlt className='text-2xl' /></button>
            </div>
            <hr className='py-4' />
            <form action="" className='mb-5'>
                <div className='grid grid-cols-2 gap-5 items-center py-3 mb-3'>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <div className='py-2'>
                    <input type="email" placeholder='Email Address' className='w-[100%]' />
                </div>
                <div className='grid grid-cols-[90%_auto] my-3 border-[0.1px] border-gray-500'>
                    <input type="password" placeholder='Password' className='border-0' />
                    <button className='underline text-[12px]'>Show </button>
                </div>
                <div className='flex gap-5 items-center py-3'>
                    <p className='text-[13px]'>I shop for</p>
                    <div className='flex gap-2 items-center'>
                        <input type="radio" name='gender' id='Men' />
                        <label htmlFor="Men" className='text-[14px]'>Men</label>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type="radio" name='gender' id='Women' />
                        <label htmlFor="Women" className='text-[14px]'>Women</label>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type="radio" name='gender' id='All' />
                        <label htmlFor="All" className='text-[14px]'>All</label>
                    </div>
                </div>
                <div className='flex gap-2 items-center py-3'>
                    <input type="checkbox" id='Checkbox' />
                    <label htmlFor="Checkbox" className='text-[13px]'> <span className='font-semibold'>Yes, </span> sign me up to the Frank And Oak newsletter to never miss out on product launches and exclusive promotions.</label>
                </div>
                <button className='py-2 bg-black text-white text-lg w-[100%] my-4'>Sign Up</button>

                <div className='grid grid-cols-[42%_11%_auto] gap-2 items-center py-4'>
                    <div className='border-[0.5px] '></div>
                    <div className='text-[12px]'>Social login</div>
                    <div className='border-[0.5px] '></div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <button className='grid grid-cols-[10%_auto] border-[0.5px] border-black items-center py-2'>
                        <FaFacebookF className='ps-3 text-[22px]' />
                        <p className='text-center'>Sign in with Facebook</p>
                    </button>
                    <button className='grid grid-cols-[10%_auto] border-[0.5px] border-black items-center py-2'>
                        <FaGoogle className='ps-3 text-[25px]' />
                        <p className='text-center'>Sign in with Google</p>
                    </button>
                </div>
                
            </form>
            <hr />
            <p className='text-[10px] py-3'>
            By joining, you agree to Frank And Oak’s Terms & Conditions and Privacy Policy and to receive Frank And Oak’s electronic communications.</p>
        </div>
    )
}
