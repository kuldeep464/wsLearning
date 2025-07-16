"use client";
import React, { useEffect, useState } from 'react'
import { Button, Modal } from "flowbite-react";
import { FaArrowLeftLong, FaFacebookF, FaGoogle } from 'react-icons/fa6';
import { MdArrowRightAlt } from "react-icons/md";
import Link from 'next/link';
import { IoEye, IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { IoMdEyeOff } from 'react-icons/io';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { saveLogin } from '../slice/authSlice';
import { useRouter } from 'next/navigation';

export default function LoginModal({ modalFunction ,setshowAccountDrop }) {
    let { openModal, setOpenModal } = modalFunction
    let [loginsignupModal, setLoginSignupModal] = useState(true)
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

                {loginsignupModal == true ? <LoginSwitch setshowAccountDrop={setshowAccountDrop} loginsignupModal={loginsignupModal} setOpenModal={setOpenModal} setLoginSignupModal={setLoginSignupModal} /> : <NewUserSwitch setOpenModal={setOpenModal} setLoginSignupModal={setLoginSignupModal} loginsignupModal={loginsignupModal} />}


                {/* <NewUserSwitch /> */}


            </Modal.Body>

        </Modal>
    )
}

function LoginSwitch({ setLoginSignupModal, loginsignupModal ,setOpenModal,setshowAccountDrop}) {
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    let [passwordType, setPasswordType] = useState(false)
    let dispatch=useDispatch()
    let route=useRouter()
    let loginUser = (event) => {
        event.preventDefault()
        let obj = {
            userEmail: event.target.userEmail.value,
            userPassword: event.target.userPassword.value,
        }

        axios.post(`${apiBaseUrl}web/auth/login`, obj)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status == 1) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: finalRes.msg,
                        timer: 1500
                    });
                    dispatch(saveLogin({webAuth:finalRes.checkEmail,token:finalRes.token}))
                    setOpenModal(false)
                    setshowAccountDrop(true)
                    route.push('/account')
                    
                }
                else if (finalRes.status == 0) {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: finalRes.msg,
                        showConfirmButton: true,
                    });
                }
                else if (finalRes.status == 2) {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: finalRes.msg,
                        showConfirmButton: true,
                    });
                }
                else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: 'Something Went Wrong...!',
                        showConfirmButton: true,
                    });
                }
            })

    }

    return (
        <div>
            <div className='py-3'>
                <form action="" onSubmit={loginUser}>
                    <input type="email" placeholder='Email Address' name='userEmail' required className='border-[0.1px] w-[100%]' />
                    <div className='grid grid-cols-[90%_auto] items-center my-3 border-[0.1px] border-gray-500'>
                        <input type={passwordType ? 'text' : 'password'} name='userPassword' required placeholder='Password' className='border-0 focus:ring-0' autoComplete='true' />
                        <span className='underline text-[20px] cursor-pointer' onClick={() => setPasswordType(!passwordType)}>{passwordType ? <IoEyeOffOutline /> : <IoEyeOutline />} </span>
                    </div>
                    <div className='mb-4'>
                        <a href={'/forget-password'} className='text-[13px] underline font-semibold'>Forget Password? </a>
                    </div>
                    <button type='submit' className='w-[100%] bg-black text-white text-xl py-2.5'>Log In</button>
                </form>
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

            </div>
        </div>
    )
}

function NewUserSwitch({ setLoginSignupModal, loginsignupModal }) {
    let [loading, setLoading] = useState(false)
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    let [formDataValue, setFormDataValue] = useState(null)
    let [passwordType, setPasswordType] = useState(false)
    let [inputOtp, setInputOtp] = useState(false)
    let sendOtp = (event) => {
        event.preventDefault()
        let obj = {
            userFirstName: event.target.userFirstName.value,
            userLastName: event.target.userLastName.value,
            userEmail: event.target.userEmail.value,
            userPassword: event.target.userPassword.value,
            shopFor: event.target.shopFor.value
        }
        setFormDataValue(obj)
        setLoading(true)

        axios.post(`${apiBaseUrl}web/auth/sendOtp`, obj)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    setInputOtp(true)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: finalRes.msg,
                        timer: 1500
                    });
                    setLoading(false)
                }
                else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: finalRes.msg,
                        showConfirmButton: true,
                    });
                    setLoading(false)
                }
            })

    }


    return (
        <div>
            {inputOtp ?
                <OTPBox formDataValue={formDataValue} setInputOtp={setInputOtp} setLoginSignupModal={setLoginSignupModal} />
                :

                <div>
                    <div className='flex items-center gap-2 justify-center py-3'>
                        <p>Already have an account?</p>
                        <button className='flex gap-2 items-center' onClick={() => setLoginSignupModal(true)}>Log in <MdArrowRightAlt className='text-2xl' /></button>
                    </div>
                    <hr className='py-4' />
                    <form action="" className='mb-5' onSubmit={sendOtp}>
                        <div className='grid grid-cols-2 gap-5 items-center py-3 mb-3'>
                            <input type="text" name='userFirstName' placeholder='First Name' required />
                            <input type="text" name='userLastName' placeholder='Last Name' />
                        </div>
                        <div className='py-2'>
                            <input type="email" name='userEmail' required placeholder='Email Address' className='w-[100%]' />
                        </div>
                        <div className='grid grid-cols-[90%_auto] my-3 border-[0.1px] items-center border-gray-500'>
                            <input type={passwordType ? 'text' : 'password'} name='userPassword' required placeholder='Password' className='border-0' autoComplete='true' />
                            <span className='underline text-[20px] cursor-pointer' onClick={() => setPasswordType(!passwordType)}>{passwordType ? <IoEyeOffOutline /> : <IoEyeOutline />} </span>
                        </div>
                        <div className='flex gap-5 items-center py-3'>
                            <p className='text-[13px]'>I shop for</p>
                            <div className='flex gap-2 items-center'>
                                <input type="radio" name='shopFor' id='Men' value='Men' />
                                <label htmlFor="Men" className='text-[14px]'>Men</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="radio" name='shopFor' id='Women' value='Women' />
                                <label htmlFor="Women" className='text-[14px]'>Women</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="radio" name='shopFor' id='All' value='All' />
                                <label htmlFor="All" className='text-[14px]'>All</label>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center py-3'>
                            <input type="checkbox" id='Checkbox' name='userCheckBox' required />
                            <label htmlFor="Checkbox" className='text-[13px]'> <span className='font-semibold'>Yes, </span> sign me up to the Frank And Oak newsletter to never miss out on product launches and exclusive promotions.</label>
                        </div>
                        <button type='submit' className='py-2 rounded-lg bg-black text-white text-lg w-[100%] my-4'>
                            {loading ?



                                <div role="status" className='flex justify-center items-center'>
                                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>

                                :
                                'Sign Up'
                            }
                        </button>
                    </form>
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


                    <hr />
                    <p className='text-[10px] py-3'>
                        By joining, you agree to Frank And Oak’s Terms & Conditions and Privacy Policy and to receive Frank And Oak’s electronic communications.</p>

                </div>

            }
        </div>
    )
}

function OTPBox({ formDataValue, setLoginSignupModal, setInputOtp }) {
    let [resendLoading, setResendLoading] = useState(false)
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    let [currentTime, setCurrentTime] = useState(30)
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (currentTime <= 0) {
            setIsDisabled(false); // Enable the button when the timer reaches 0
            return;
        }

        const timer = setInterval(() => {
            setCurrentTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [currentTime])
    const handleResend = () => {

        setResendLoading(true)
        // Trigger OTP resend API call here
        axios.post(`${apiBaseUrl}web/auth/sendOtp`, formDataValue)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: finalRes.msg,
                        timer: 1500
                    });
                    setIsDisabled(true);  // Disable the button again
                    setCurrentTime(30);  // Reset the timer
                    setResendLoading(false)
                }
                else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: finalRes.msg,
                        showConfirmButton: true,
                    });
                    setResendLoading(false)
                }
            })
        console.log("OTP Resent!");
    };
    let checkOTPandSaveData = (event) => {
        event.preventDefault()
        let otp = event.target.inputOtp.value
        let obj = { ...formDataValue }
        obj['OTP'] = otp


        axios.post(`${apiBaseUrl}web/auth/signUp`, obj)

            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status == 1) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: finalRes.msg,
                        timer: 1500
                    });
                    setLoginSignupModal(true)
                }
                else if (finalRes.status == 0) {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: finalRes.msg,
                        timer: 1500
                    });
                }
                else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Something Went Wrong...!",
                        showConfirmButton: true,
                    });
                }
            })

    }
    return (
        <div>
            <button onClick={() => setInputOtp(false)} className='flex items-center gap-2'><FaArrowLeftLong />Go to Sign-up</button>
            <form action="" onSubmit={checkOTPandSaveData}>
                <div className='text-center my-7 flex flex-col items-center gap-4'>
                    <input name='inputOtp' required type="text" maxLength={4} placeholder='Enter OTP' className='text-center w-[90%] md:w-[50%] border-2 rounded-lg' />
                    <button type='submit' className='py-2 border-2 border-black w-[90%] md:w-[50%] rounded-lg hover:bg-black hover:text-white duration-500'>Confirm OTP</button>

                </div>

            </form>
            <div className='text-center'>
                <p className='flex gap-3 justify-center'>Didn't receive code?
                    <button onClick={handleResend} disabled={isDisabled} className={`flex gap-2 cursor-pointer ${isDisabled ? 'text-blue-400' : 'text-blue-800'}`}>
                        {isDisabled ? `Resend OTP in ${currentTime}s` : "Resend OTP"}
                        {resendLoading ?
                            <div role="status" className='flex justify-center items-center'>
                                <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>

                            :

                            ''

                        }


                    </button>
                </p>
            </div>
            <p className='text-[14px] text-center py-3'>
                By joining, you agree to Frank And Oak’s Terms & Conditions and Privacy Policy and to receive Frank And Oak’s electronic communications.</p>
        </div>
    )
}
