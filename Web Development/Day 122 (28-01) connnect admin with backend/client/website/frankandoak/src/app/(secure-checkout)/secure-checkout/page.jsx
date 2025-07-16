'use client'
import React, { useState, useEffect } from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import { GoDotFill, GoQuestion } from "react-icons/go";
import { FaRegCircle } from 'react-icons/fa6';
import { FaDotCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '@/app/slice/authSlice';
import Swal from 'sweetalert2';
import { fetchCart } from '@/app/slice/cartSlice';
import axios from 'axios';
import { useRazorpay } from 'react-razorpay';

export default function SecureCheckOut() {
    let [protectionCharge,setProtectionCharge]=useState(40.95)

    const { Razorpay } = useRazorpay()
    let [paymentOptions, setPaymentOptions] = useState(1)
    let [billingAddressFaq, setBillingAddressFaq] = useState(1)
    let [totalQty, setTotalQty] = useState(0)
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL

    let [totalMRP, setTotalMRP] = useState(0)

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCart())
    }, [])
    let cartData = useSelector((store) => store.cartStore.cartItems.data)
    let imagePath = useSelector((store) => store.cartStore.cartItems.staticPath)
    let token = useSelector((store) => store.loginStore.token)
    let userDetails = useSelector((store) => store.loginStore.webAuthDetails)


    useEffect(() => {
        let totalQty = 0
        let totalMRP = 0
        if (cartData) {
            // console.log(cartData)
            cartData.forEach((items) => {
                totalQty += items.quantity
                totalMRP += items.quantity * items.product.productMRP
                setTotalQty(totalQty)
                setTotalMRP(totalMRP)
            })
        }

    }, [cartData])
    let route = useRouter()
    let logoutUser = () => {
        route.push('/')
        dispatch(logout())
        Swal.fire({
            position: "center",
            icon: "success",
            title: 'You have been logged out',
            timer: 3000
        });
    }

    let placeOrder = (event) => {
        event.preventDefault();
        let shippingDetails = {
            orderEmail: event.target.orderEmail.value,
            orderFirstName: event.target.orderFirstName.value,
            orderLastName: event.target.orderLastName.value,
            orderCountry: event.target.orderCountry.value,
            orderAddress: event.target.orderAddress.value,
            orderApartment: event.target.orderApartment.value,
            orderCity: event.target.orderCity.value,
            orderState: event.target.orderState.value,
            orderZipCode: event.target.orderZipCode.value,
            orderContactNumber: event.target.orderContactNumber.value,

        }
        let paymentMethod = ''
        if (paymentOptions == 4) {
            paymentMethod = 'cod'
        }
        else {
            paymentMethod = 'online'
        }
        let orderAmount = totalMRP+protectionCharge
        let orderQty = totalQty
        let shippingCharge = 40
        // let orderItems = cartData.map((items) => items._id)
        let obj = {
            shippingDetails,
            paymentMethod,
            orderAmount,
            orderQty,
            shippingCharge,
            orderItems: cartData
        }
        axios.post(`${apiBaseUrl}web/order/save-order`, obj, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                if (res.data.paymentMethod == 'cod') {
                    // alert(res.data.msg)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: res.data.msg,
                        timer: 3000
                    });
                    setTimeout(() => {
                        route.push('/')

                    }, [3000]);

                }
                else if (res.data.paymentMethod == 'online') {
                    const options = {
                        key: process.env.NEXT_PUBLIC_RAZORPAYKEYID,
                        amount: res.data.razorpayOrder.amount,
                        currency: "INR",
                        name: "Frank and Oak",
                        description: "this is best website",
                        image: "https://www.wscubetech.com/images/ws-cube-white-logo.svg",
                        order_id: res.data.razorpayOrder.id,
                        handler: function (response) {
                            axios.post(`${apiBaseUrl}web/order/verify-order`, response, { headers: { Authorization: `Bearer ${token}` } })
                                .then((res) => {
                                    // alert(res.data.msg)
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: res.data.msg,
                                        timer: 3000
                                    });
                                    setTimeout(() => {
                                        route.push('/')

                                    }, [3000]);
                                })
                        },
                        prefill: {
                            name: userDetails && userDetails.userFirstName,
                            email: userDetails && userDetails.userEmail,
                            contact: 8397039304,
                        },
                        theme: {
                            color: "#3399cc",
                        }
                    }

                    let rzp = new Razorpay(options)
                    rzp.open()



                }

            })
    }
    return (
        <div>
            <div className=''>
                <div className='sticky top-0 z-20 bg-white  px-3 py-2 flex justify-between items-center'>
                    <h1 className='text-[35px] font-bold'>Frank And Oak</h1>
                    <IoBagHandleOutline className='text-[30px] cursor-pointer' />
                </div>
                <hr className='h-[2px]' />
                <div className='grid relative md:grid-cols-2 '>
                    <div className='flex p-4 justify-end order-2 lg:order-1'>
                        <div className='lg:w-[75%] '>
                            <div>
                                <p className='text-[13px] text-gray-400 text-center'>Express Checkout</p>
                                <div className='grid grid-cols-3 gap-5 py-4'>
                                    <button className='bg-[rgb(89,47,244)] items-center flex justify-center rounded py-1 px-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 341 80.035" className="PrlUn w-[60%]" ><path fillRule="evenodd" d="M227.297 0c-6.849 0-12.401 5.472-12.401 12.223v55.59c0 6.75 5.552 12.222 12.401 12.222h101.06c6.849 0 12.401-5.472 12.401-12.222v-55.59c0-6.75-5.552-12.223-12.401-12.223zm17.702 55.892v-14.09h8.994c8.217 0 12.586-4.542 12.586-11.423s-4.369-11-12.586-11h-14.788v36.513zm0-31.084h7.664c5.319 0 7.932 2.154 7.932 5.758s-2.518 5.758-7.695 5.758h-7.901zm31.796 31.833c4.417 0 7.314-1.92 8.644-5.196.38 3.65 2.613 5.523 7.457 4.26l.048-3.886c-1.948.187-2.328-.515-2.328-2.528v-9.55c0-5.617-3.752-8.94-10.686-8.94-6.84 0-10.782 3.37-10.782 9.08h5.32c0-2.714 1.947-4.353 5.367-4.353 3.609 0 5.272 1.545 5.224 4.214v1.217l-6.127.655c-6.887.749-10.686 3.324-10.686 7.818 0 3.698 2.659 7.209 8.549 7.209m1.187-4.213c-2.992 0-4.179-1.592-4.179-3.184 0-2.153 2.47-3.136 7.314-3.698l3.8-.421c-.238 4.12-3.04 7.303-6.935 7.303m32.555 5.29c-2.422 5.804-6.317 7.536-12.396 7.536h-2.613V60.48h2.803c3.324 0 4.939-1.03 6.697-3.979l-10.782-24.95h5.984l7.695 18.21 6.839-18.21h5.842z" clipRule="evenodd"></path><path d="M29.514 35.18c-7.934-1.697-11.469-2.36-11.469-5.374 0-2.834 2.392-4.246 7.176-4.246 4.207 0 7.283 1.813 9.546 5.363.171.274.524.369.812.222l8.927-4.447a.616.616 0 0 0 .256-.864c-3.705-6.332-10.55-9.798-19.562-9.798-11.843 0-19.2 5.752-19.2 14.898 0 9.714 8.96 12.169 16.904 13.865 7.944 1.697 11.49 2.36 11.49 5.374s-2.584 4.435-7.742 4.435c-4.763 0-8.297-2.15-10.433-6.321a.63.63 0 0 0-.843-.274L6.47 52.364a.623.623 0 0 0-.278.843c3.535 7.006 10.785 10.947 20.47 10.947 12.334 0 19.787-5.658 19.787-15.088s-9.001-12.169-16.935-13.865zM77.353 16.036c-5.062 0-9.536 1.77-12.75 4.92-.203.19-.534.053-.534-.221V.622a.62.62 0 0 0-.63-.622h-11.17a.62.62 0 0 0-.63.622v62.426a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-5.289 4.11-9.345 9.653-9.345 5.542 0 9.557 3.972 9.557 9.345v27.384a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-11.505-7.646-19.618-18.356-19.618zM118.389 14.255c-6.065 0-11.767 1.823-15.847 4.467a.62.62 0 0 0-.202.833l4.922 8.292c.182.295.566.4.865.22a19.8 19.8 0 0 1 10.262-2.78c9.749 0 16.914 6.785 16.914 15.75 0 7.64-5.734 13.297-13.006 13.297-5.926 0-10.037-3.403-10.037-8.207 0-2.75 1.185-5.005 4.271-6.596a.607.607 0 0 0 .246-.864l-4.645-7.754a.63.63 0 0 0-.759-.264c-6.225 2.276-10.593 7.755-10.593 15.109 0 11.126 8.981 19.428 21.507 19.428 14.629 0 25.147-9.998 25.147-24.338 0-15.372-12.237-26.603-29.066-26.603zM180.098 15.952c-5.649 0-10.689 2.054-14.373 5.678a.313.313 0 0 1-.534-.22v-4.363a.62.62 0 0 0-.63-.621H153.68a.62.62 0 0 0-.63.621v62.331a.62.62 0 0 0 .63.622h11.169a.62.62 0 0 0 .631-.622v-20.44c0-.274.331-.41.533-.231 3.674 3.371 8.532 5.342 14.096 5.342 13.102 0 23.321-10.463 23.321-24.054 0-13.592-10.23-24.054-23.321-24.054zm-2.103 37.54c-7.454 0-13.103-5.848-13.103-13.582 0-7.733 5.638-13.58 13.103-13.58s13.091 5.752 13.091 13.58-5.553 13.581-13.102 13.581z"></path></svg>
                                    </button>
                                    <button className='bg-[rgb(255,196,57)] items-center flex justify-center rounded py-1 px-3'>
                                        <img className='w-[60%]' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4" alt="" />
                                    </button>
                                    <button className='bg-black items-center flex justify-center rounded py-1 px-3'>
                                        <img className='w-[60%] h-[40px] rounded-[20px]' src="data:image/jpeg;base64,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" alt="" />
                                    </button>
                                </div>
                                <div className='grid grid-cols-[47%_6%_auto] items-center gap-2'>
                                    <hr />
                                    <span className='text-[14px] text-gray-400 ps-2'>OR</span>
                                    <hr />
                                </div>
                                <div>

                                    <form action="" className='mb-14' onSubmit={placeOrder}>
                                        <label htmlFor="" className='font-semibold text-[20px]'>Contact</label>
                                        <input type="email" name='orderEmail' placeholder='Email' className='w-[100%] rounded my-2' />
                                        <div className='flex mb-5 items-center gap-2'>
                                            <input type="checkbox" id='EmailWithNewsOffers' />
                                            <label htmlFor="EmailWithNewsOffers" className='text-[14px]'>Email me with news and offers</label>
                                        </div>
                                        <label htmlFor="" className='font-semibold text-[20px]'>Delivery</label>




                                        <div className="relative border-[0.1px] rounded my-4 border-gray-500">
                                            <select id="small_filled" className="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900  dark:bg-gray-700 border-0  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500  rounded focus:outline-none focus:ring-0 focus:border-blue-600 peer" name='orderCountry' placeholder=" " >
                                                <option value="Uk">United states</option>
                                                <option value="india">India</option>
                                                <option value="australia">Australia</option>
                                                <option value="russia">Russia</option>
                                            </select>
                                            <label htmlFor="small_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Country / Region</label>

                                        </div>

                                        <div className='grid grid-cols-2 gap-4 mb-3'>
                                            <input type="text" placeholder='First Name' name='orderFirstName' className='rounded' />
                                            <input type="text" placeholder='Last Name' name='orderLastName' className='rounded' />
                                        </div>
                                        <input type="text" placeholder='Address' name='orderAddress' className='rounded w-[100%] mb-3' />

                                        <input type="text" placeholder='Apartment, suite, etc. (optional)' name='orderApartment' className='rounded w-[100%] mb-3' />

                                        <div className='grid grid-cols-3 gap-4 mb-3'>
                                            <input type="text" placeholder='City ' name='orderCity' className='rounded' />
                                            <select name="orderState" id="" className='text-gray-500 rounded'>
                                                <option value="" className='text-gray-500' disabled>State</option>
                                                <option value="haryana">Haryana</option>
                                                <option value="punjab">Punjab</option>
                                                <option value="jammu-kashmir">Jammu Kashmir</option>
                                                <option value="uttrakhand">Uttrakhand</option>
                                                <option value="rajesthan">Rajesthan</option>
                                            </select>
                                            <input type="text" name='orderZipCode' placeholder='Zip Code ' className='rounded' />
                                        </div>

                                        <input type="tel" name='orderContactNumber' placeholder='Phone' className='rounded w-[100%] mb-6' />


                                        <label htmlFor="" className='text-lg font-semibold'>Shipping method</label>
                                        <input type="text" placeholder='Enter your shipping address to view available shipping methods.' disabled className='w-[100%] my-3 rounded bg-gray-100' />


                                        <div className='flex justify-between mb-6 '>
                                            <div className='flex items-center gap-1'>
                                                <input type="checkbox" id='shippingProtection' />
                                                <label htmlFor="shippingProtection" className='text-[14px]'>Shippig protection</label>
                                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCA2MCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggaWQ9IlVuaW9uIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuOTI4NzkgMC44MTUzNjhDOC44NDQ5MyAtMC4yNzE3ODkgNy4wODU5NyAtMC4yNzE3ODkgNi4wMDIxMSAwLjgxNTM2OEwzLjMwNDMzIDMuNTIxMzZDMy43MTU3MiAzLjU2ODk3IDQuMTE2NTYgMy42NzIxMyA0LjUwNDIyIDMuODMzNDlDNC45NDk4OSA0LjAxODY1IDUuMzU2MDEgNC4yNzc4NyA1LjcxNzMgNC41OTI2NUM1LjgwMTY5IDQuNjU4NzcgNS44ODM0NCA0LjczMDE5IDUuOTU5OTEgNC44MDY5TDEwLjMyNDQgOS4xODQ2M0MxMS40MDgyIDEwLjI3MTggMTMuMTY3MiAxMC4yNzE4IDE0LjI1MSA5LjE4NDYzTDE2LjI2MzIgNy4xNjYzOEw5LjkyODc5IDAuODE1MzY4Wk0wLjgyMDE0NSA5LjkyNzQ3QzAuNTYxNzA3IDkuNjY4MjUgMC4zNTYwMTIgOS4zNjE0MSAwLjIxMzYwNyA5LjAyMjgzQzAuMDczODM5NCA4LjY4NjkgMCA4LjMyNDUxIDAgNy45NTY4NEMwIDcuNTg5MTYgMC4wNzEyMDI0IDcuMjI2NzcgMC4yMTA5NyA2Ljg4ODE5QzAuMzUwNzM3IDYuNTQ5NjEgMC41NTY0MzMgNi4yNDI3OCAwLjgxMjIzNCA1Ljk4MzU1QzEuMDcwNjcgNS43MjQzMyAxLjM3NjU4IDUuNTE4IDEuNzE0MTMgNS4zODA0NkMyLjA1MTY4IDUuMjQwMjYgMi40MTI5NyA1LjE2ODg1IDIuNzc5NTMgNS4xNjg4NUMzLjE0NjA5IDUuMTY4ODUgMy41MDczNyA1LjI0MjkxIDMuODQyMjkgNS4zODMxQzQuMTc5ODQgNS41MjMzIDQuNDg1NzUgNS43Mjk2MiA0Ljc0NDE5IDUuOTkxNDlMMC44MjAxNDUgOS45Mjc0N1pNMjYuMDk5NiAwLjE1Nzg5NUMyNi40NDY2IDAuMTU3ODk1IDI2Ljc5MzUgMC4yMDY2ODMgMjcuMTE5NiAwLjMyNTE2N0gyNy4xMjY2QzI4LjM2MTcgMC43NTcyODYgMjkuMDYyNiAxLjYyODQ5IDI5LjE3MzYgMi45MzE4MkMyOS4yNzc3IDQuMjA3MjcgMjguODI2NiA1LjIzMTgxIDI3LjY5NTYgNS45MTQ4NEMyNy42NzA3IDUuOTI5ODMgMjcuNjQ2NyA1Ljk0NDgyIDI3LjYyMTcgNS45NjA0NkwyNy42MjE2IDUuOTYwNUMyNy41NzY5IDUuOTg4NDUgMjcuNTI4OSA2LjAxODQ5IDI3LjQ2NjYgNi4wNTQyM0wyOS45MzE1IDkuODQ1NzNMMjcuODE4NiA5LjgzODc1TDI1LjU0NDUgNi4zMzMwMkgyMy43NjEyVjkuODM4NzVIMjEuODk0NkwyMS45MDE2IDAuMTY0ODY1QzIxLjkwMTYgMC4xNjQ4NjUgMjQuNzc0MyAwLjE1Nzg5NSAyNi4wOTk2IDAuMTU3ODk1Wk0yMy43NzUxIDEuODIzNjRWNC42MzkzOUwyNi4xMTM1IDQuNjI1NDVDMjYuODkgNC42MjU0NSAyNy4zNDE3IDMuOTI4NDggMjcuMzIwOSAzLjE4OTdDMjcuMzAwMSAyLjQ1MDkxIDI2Ljg3NDcgMS44MzA2MSAyNi4xMTM1IDEuODMwNjFMMjMuNzc1MSAxLjgyMzY0Wk01OC4xNzg0IDcuNzI2OTRMNTkuMjE5MiA4Ljg2M0M1OC42ODQ5IDkuMzcxNzggNTguMDc0MyA5LjcwNjMzIDU3LjM2NjUgOS44NzM2QzU1LjU5MDIgMTAuMjk4NyA1My44NDg1IDkuNjI5NjYgNTMuMDAxOSA4LjE5MzkxQzUxLjU0NDggNS43MTk2OCA1My4yNTg3IDIuNjM5MDkgNTYuMTMxNCAyLjU3NjM2QzU4LjQ1NTkgMi41MjA2IDYwLjAxMDMgNC4yNDIxMSA1OS43MTE5IDYuNTM1MTNDNTkuNjkxMSA2LjY2NzU1IDU5LjYxNzYgNi45MjA4OCA1OS41NjUyIDcuMDUyNDZINTQuNDU5MUM1NC43NDE3IDguMjQ2NTQgNTYuNTc1NSA4LjkxODc1IDU4LjE3ODQgNy43MjY5NFpNNTQuNDU5MSA1LjU0ODU2TDU3LjkzOTkgNS41NTI1QzU3LjkwNTIgNC43MTYxNCA1Ny4yOTAyIDQuMTkzMzIgNTYuMzYwNCA0LjEzNzU3QzU1LjQ1MTQgNC4wODE4MSA1NC41NzcxIDQuNjk4MjcgNTQuNDU5MSA1LjU0ODU2Wk0zNC4wMzA4IDIuNTY5MzlDMzYuMTk1OCAyLjU2OTM5IDM3Ljg1NDIgNC4xODYzNSAzNy44NDAzIDYuMjkxMTlDMzcuODI2NCA4LjQwMyAzNi4xODE5IDkuOTk5MDUgMzQuMDEgOS45OTIwOEMzMS44NTg5IDkuOTg1MTEgMzAuMjQyMiA4LjM4MjA5IDMwLjI0OTEgNi4yNzAyOEMzMC4yNDkxIDQuMTU4NDcgMzEuODcyOCAyLjU3NjM2IDM0LjAzMDggMi41NjkzOVpNMzYuMDA4NCA2LjI3NzI1QzM2LjAwODQgNS4xNjkwOCAzNS4xNDExIDQuMzExODEgMzQuMDIzOSA0LjMxODc4QzMyLjkyNzUgNC4zMjU3NSAzMi4wNjcxIDUuMTg5OTggMzIuMDgxIDYuMjg0MjJDMzIuMDk0OSA3LjM5MjQgMzIuOTM0NSA4LjI0MjcgMzQuMDMwOCA4LjI0MjdDMzUuMTI3MiA4LjI0MjcgMzYuMDA4NCA3LjM4NTQzIDM2LjAwODQgNi4yNzcyNVpNMzkuMDgyNCAyLjcyOTdINDAuODcyNkw0MC45MTQzIDYuOTE4NDZDNDAuOTE0MyA3LjgzNzc2IDQxLjUxOCA4LjMxOTM3IDQyLjQ0MDggOC4yNjM2MUM0My4xODMzIDguMjIxNzkgNDMuNjYyMSA3LjcxMzAxIDQzLjY4OTkgNi44MzQ4M0M0My43MjQ2IDUuNjE1MTQgNDMuNzE3NiAyLjczNjY3IDQzLjcxNzYgMi43MzY2N0g0NS41MzU2QzQ1LjUzNTYgMi43MzY2NyA0NS41NzAzIDUuNTk0MjMgNDUuNTE0OCA2Ljk3NDIyQzQ1LjQzMTUgOC43NzIzOSA0NC4yMTAzIDkuOTQzMyA0Mi40NTQ3IDkuOTg1MTJDNDAuNTY3MyAxMC4wMjY5IDM5LjA4MjQgOC43NjQ3MyAzOS4wODI0IDcuMTQxNDlWMi43Mjk3Wk01MS43MDc4IDguMTQ1MTNWOS44MzE3OUM1MC45NzIzIDkuOTkyMDkgNTAuMjQzNyAxMC4wODI3IDQ5LjUxNTEgOS44NzM2QzQ4LjUyOTggOS41OTQ4MiA0Ny45MzMgOC44MDAyOCA0Ny45MDUzIDcuNzA2MDRDNDcuODc3NSA2Ljc1MTIgNDcuODkxNCA0LjQyMzMzIDQ3Ljg5MTQgNC40MjMzM0g0Ni43NDY1VjIuNzIyNzNINDcuMTkwNkM0Ny42NTEzIDIuNzEzNjcgNDcuOTI1NCAyLjQ2NDg2IDQ4LjAwMzEgMS44Nzg3MUw0OC4wOTI2IDAuNzUwMzJINDkuNzAyNVYyLjcxNTc2SDUxLjU0ODJWNC40MDkzOUg0OS43MDI1VjcuMjMyMUM0OS43MTYzIDcuOTYzOTIgNTAuMDYzMyA4LjI3MDU4IDUwLjc5ODggOC4yMjg3N0w1MS43MDc4IDguMTQ1MTNaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K" alt="" className="_1h3po424 _1h3po427 _1h3po425 _1fragem1y _1fragemkk" />

                                            </div>
                                            <div className='text-sm'>$1.95</div>

                                        </div>

                                        <div className='text-lg font-semibold'>Payment</div>
                                        <p className='text-sm text-gray-500'>All transactions are secure and encrypted</p>

                                        <div className='bg-gray-200 my-3 rounded'>
                                            <div className='flex justify-between items-center px-2' onClick={() => setPaymentOptions(1)}>
                                                <div className='flex gap-2 items-center px-2 py-3'>
                                                    {paymentOptions != 1 ? <FaRegCircle className='text-gray-700' /> : <FaDotCircle />}

                                                    <span className='text-sm'>Credit Card</span>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg" alt="" />
                                                    <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMp.svg" alt="" />
                                                    <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy.svg" alt="" />
                                                    <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/jcb.BgZHqF0u.svg" alt="" />
                                                </div>
                                            </div>

                                            {paymentOptions == 1 ?
                                                <div className='p-4'>
                                                    <input type="text" placeholder='Card Number' className='w-[100%] my-3 rounded' />
                                                    <div className='grid grid-cols-2 gap-3'>
                                                        <input type="text" placeholder='Expiration Data (MM /  YY)' className='w-[100%] rounded' />
                                                        <input type="text" placeholder='Security Code' className='w-[100%] rounded' />
                                                    </div>
                                                    <input type="text" placeholder='Name on Card' className='w-[100%] my-3 rounded' />
                                                    <div className='flex gap-1 items-center'>
                                                        <input type="checkbox" id='ShippingAddressAsBillingAddress' />
                                                        <label htmlFor="ShippingAddressAsBillingAddress" className='text-sm'>
                                                            Use shipping address as billing address</label>
                                                    </div>
                                                </div>
                                                :
                                                ''
                                            }
                                        </div>

                                        <div className='bg-gray-200 my-3 rounded'>
                                            <div className='flex justify-between items-center px-2' onClick={() => setPaymentOptions(2)}>
                                                <div className='flex gap-2 items-center px-2 py-3'>
                                                    {paymentOptions != 2 ? <FaRegCircle className='text-gray-700' /> : <FaDotCircle />}

                                                    <span className='text-sm'>PayPal</span>
                                                </div>
                                                <div className=''>
                                                    <img className='h-[30px]' src="data:image/png;base64,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" alt="" />
                                                </div>
                                            </div>

                                            {paymentOptions == 2 ?
                                                <div className='p-4'>
                                                    <p className='text-sm text-center text-gray-500 py-5'>After clicking "Pay with PayPal", you will be redirected to PayPal to complete your purchase securely.</p>

                                                </div>
                                                :
                                                ''
                                            }
                                        </div>

                                        <div className='bg-gray-200 my-3 rounded'>
                                            <div className='flex justify-between items-center px-2' onClick={() => setPaymentOptions(3)}>
                                                <div className='flex gap-2 items-center px-2 py-3'>
                                                    {paymentOptions != 3 ? <FaRegCircle className='text-gray-700' /> : <FaDotCircle />}

                                                    <span className='text-sm'>Klarna - Flexible Payments</span>
                                                </div>
                                                <div className=''>
                                                    <img className='' src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/klarna.DBYYkMwk.svg" alt="" />
                                                </div>
                                            </div>

                                            {paymentOptions == 3 ?
                                                <div className='p-4'>
                                                    <p className='text-sm text-center text-gray-500 py-5'>After clicking “Pay now”, you will be redirected to Klarna - Flexible payments to complete your purchase securely.</p>

                                                </div>
                                                :
                                                ''
                                            }
                                        </div>

                                        <div className='bg-gray-200 my-3 rounded'>
                                            <div className='flex justify-between items-center px-2' onClick={() => setPaymentOptions(4)}>
                                                <div className='flex gap-2 items-center px-2 py-3'>
                                                    {paymentOptions != 4 ? <FaRegCircle className='text-gray-700' /> : <FaDotCircle />}

                                                    <span className='text-sm'>Cash On Delivery</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='py-5 text-lg'>Billing Address</div>

                                        <div className='bg-gray-200 my-3 rounded'>
                                            <div className=' px-2' onClick={() => setBillingAddressFaq(1)}>
                                                <div className='flex gap-2 items-center px-2 py-3'>
                                                    {billingAddressFaq != 1 ? <FaRegCircle className='text-gray-700' /> : <FaDotCircle />}

                                                    <span className='text-sm'>Same as Shipping Address</span>
                                                </div>

                                            </div>


                                        </div>

                                        <div className='bg-gray-200 my-3 rounded'>
                                            <div className=' px-2' onClick={() => setBillingAddressFaq(2)}>
                                                <div className='flex gap-2 items-center px-2 py-3'>
                                                    {billingAddressFaq != 2 ? <FaRegCircle className='text-gray-700' /> : <FaDotCircle />}

                                                    <span className='text-sm'>Use a different billing address</span>
                                                </div>

                                            </div>

                                            {billingAddressFaq == 2 ?
                                                <div className='p-4'>

                                                    <div className="relative border-[0.1px] rounded my-4 border-gray-500">
                                                        <select id="small_filled" className="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900  dark:bg-gray-700 border-0  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500  rounded focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " >
                                                            <option value="">United states</option>
                                                            <option value="">India</option>
                                                            <option value="">Australia</option>
                                                            <option value="">Russia</option>
                                                        </select>
                                                        <label htmlFor="small_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Country / Region</label>

                                                    </div>

                                                    <div className='grid grid-cols-2 my-3'>
                                                        <div>
                                                            <input type="text" placeholder='First Name' />
                                                        </div>
                                                        <div>
                                                            <input type="text" placeholder='Last Name' />
                                                        </div>
                                                    </div>
                                                    <input type="text" placeholder='Address' className='w-[100%]' />
                                                    <input type="text" placeholder='Apartment, suite, etc. (optional)' className='rounded w-[100%] my-3' />

                                                    <div className='grid grid-cols-3 gap-4 mb-3'>
                                                        <input type="text" placeholder='City ' className='rounded' />
                                                        <select name="" id="" className='text-gray-500 rounded'>
                                                            <option value="" className='text-gray-500'>State</option>
                                                            <option value="">Haryana</option>
                                                            <option value="">Punjab</option>
                                                            <option value="">Jammu Kashmir</option>
                                                            <option value="">Uttrakhand</option>
                                                            <option value="">Rajesthan</option>
                                                        </select>
                                                        <input type="text" placeholder='Zip Code ' className='rounded' />
                                                    </div>

                                                    <input type="tel" placeholder='Phone' className='rounded w-[100%] mb-6' />
                                                </div>
                                                :
                                                ''
                                            }
                                        </div>

                                        <button className='w-[100%] bg-blue-600 py-2 text-white text-xl rounded'>
                                            {paymentOptions == 2 ? "Pay with PayPal" : paymentOptions == 4 ? "Order Now Pay Later" : "Pay now"}

                                        </button>
                                    </form>
                                    <hr className='mb-5' />

                                    <div className='flex gap-3 items-center'>
                                        <button className='text-sm underline'>Refund Policy</button>
                                        <button className='text-sm underline'>Shipping Policy</button>
                                        <button className='text-sm underline'>Privacy Policy</button>
                                        <button className='text-sm underline'>Terms of Service</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-100 md:h-[100vh] md:sticky md:overflow-y-scroll md:top-[60px] lg:top-[60px] p-5 order-1 lg:order-2'>
                        <div className='lg:w-[60%]'>
                            <CartAddedItems cartData={cartData} imagePath={imagePath} />
                            <ShippingProtection protectionCharge={protectionCharge} />

                            <form action="">
                                <div className='grid md:grid-cols-[80%_auto] gap-5'>
                                    <input type="text" placeholder='Discount code or gift card' className='placeholder:text-[13px]' />
                                    <button className='bg-gray-300 rounded text-[15px] py-2 hover:bg-black hover:text-white duration-300'>Apply</button>
                                </div>
                            </form>
                            <div className='flex my-4 justify-between items-center'>
                                <div className='text-[14px] flex items-center gap-1'>
                                    <span>Subtotal </span>
                                    <GoDotFill className='text-[12px]' />
                                    <span>{totalQty} Items</span>
                                </div>
                                <div className='text-[14px]'>Rs {totalMRP}</div>
                            </div>
                            <div className='flex my-4 justify-between items-center'>
                                <div className='text-[14px] flex items-center gap-1'>
                                    <span>Shipping</span>
                                    <GoQuestion />
                                </div>
                                <div className='text-[13px] text-gray-400'>Enter shipping address</div>
                            </div>
                            <div className='flex my-4 justify-between items-center'>
                                <div className='font-semibold text-[18px]'>
                                    Total
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='text-[13px] text-gray-400'>Rs</span>
                                    <span className='font-semibold text-[18px]'>{totalMRP+protectionCharge}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CartAddedItems({ cartData, imagePath }) {
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    return (
        <div className='my-3'>
            {cartData &&
            cartData.length>0 ? 
                cartData.map((items, index) => {
                    return (
                        <div key={index} className='flex mb-5 items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='relative w-[67px] bg-gray-300 flex justify-center'>
                                    <img src={apiBaseUrl + imagePath + items.product.productImage} className='' alt="" />
                                    <div className='w-[20px] h-[20px] rounded-[50%] flex justify-center items-center absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] text-[12px] bg-gray-500 text-white'>{items.quantity}</div>
                                </div>
                                <div>
                                    <h2 className='text-[13px]'>{items.product.productName}</h2>
                                    <h3 className='text-[13px] text-gray-400'>{items.sizeId.sizeName}</h3>
                                </div>
                            </div>
                            <div className='text-[15px]'> Rs {items.product.productMRP*items.quantity}</div>
                        </div>

                    )
                })
                :
                "No Data in Cart"
            }
        </div>
    )
}

function ShippingProtection({protectionCharge}) {
    return (
        <div className='my-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='relative'>
                        <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/route-package-protection-logoV2_eb8b6574-c7ef-429f-a5f1-58023bd66f07_64x64.jpg?v=1723216690" alt="" />
                        <div className='w-[20px] h-[20px] rounded-[50%] flex justify-center items-center absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] text-[12px] bg-gray-500 text-white'>1</div>
                    </div>
                    <div>
                        <h2 className='text-[13px]'>Shipping Protection by Route</h2>
                        <h3 className='text-[13px] text-gray-400'>Rs {protectionCharge}</h3>
                    </div>
                </div>
                <div className='text-[15px]'>Rs {protectionCharge}</div>
            </div>
        </div>
    )
}
