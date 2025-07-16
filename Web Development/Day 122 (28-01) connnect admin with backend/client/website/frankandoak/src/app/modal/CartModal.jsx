'use client'
import React, { useEffect, useState } from 'react'
import { LuMoveLeft } from "react-icons/lu";
import { RxCross1 } from 'react-icons/rx';
import { CiHeart } from 'react-icons/ci';
import { FaChevronDown, FaChevronUp, FaMinus } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdLockOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import { fetchCart } from '../slice/cartSlice';
import Link from 'next/link';

export default function CartModal({ cartModalSlider, setCartModalSlider }) {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    let cartData = useSelector((store) => store.cartStore.cartItems.data)
    let imagePath = useSelector((store) => store.cartStore.cartItems.staticPath)

    let [totalPrice, setTotalPrice] = useState(0)
    let [totalMRP, setTotalMRP] = useState(0)

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCart())
    }, [])

    useEffect(() => {
        let totalPrice = 0
        let totalMRP = 0
        if (cartData) {
            // console.log(cartData)
            cartData.forEach((items) => {
                totalPrice += items.quantity * items.product.productPrice
                totalMRP += items.quantity * items.product.productMRP
                setTotalPrice(totalPrice)
                setTotalMRP(totalMRP)
            })
        }

    }, [cartData])

    return (
        <div className={`h-[100vh] overflow-y-scroll w-[100vw] md:w-[70vw] lg:w-[50vw] bg-white fixed top-0 duration-500  z-20 ${cartModalSlider ? 'right-0' : 'right-[-1000px]'} `}>
            <div className='relative'>
                <div className=''>
                    <button className='p-3 flex gap-2 items-center ps-6 cursor-pointer' onClick={() => setCartModalSlider(false)}>
                        <LuMoveLeft />
                        <span>Continue Shopping</span>
                    </button>
                </div>
                <div className='p-1 font-semibold bg-black text-white text-center text-sm'>Enjoy free shipping on orders $99+ and free returns.</div>
                <div className='p-2'>
                    {cartData && cartData.length > 0 ? cartData.map((cartData, index) => <CartItems key={index} cartData={cartData} imagePath={imagePath} />) : 'No Data in Cart'}


                </div>

                <div className='my-5'>
                    <div className='bg-gray-100 py-2 ps-6'>Most popular right now</div>
                    <div className='px-7 py-4'>
                        <Slider {...settings}>
                            <div className='h-[200px]'>
                                <PopularItems />
                            </div>
                            <div>
                                <PopularItems />
                            </div>
                            <div>
                                <PopularItems />
                            </div>
                            <div>
                                <PopularItems />
                            </div>
                            <div>
                                <PopularItems />
                            </div>
                            <div>
                                <PopularItems />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className='bg-gray-100 px-4 py-4 sticky bottom-0 z-10'>
                    <div className='flex justify-between items-center'>
                        <div><span className='font-semibold'>Subtotal </span><span className='text-gray-500'>({cartData && cartData.length} items)</span></div>
                        <div className='flex gap-3'>
                            <span className='text-gray-400 font-semibold line-through'>Rs {totalPrice}</span>
                            <span className='font-semibold'>{totalMRP}</span>
                        </div>

                    </div>
                    <div className='text-end text-[13px] py-1'>You're saving : Rs {totalPrice - totalMRP}</div>
                    <Link href='/secure-checkout' className='flex gap-2 items-center w-[100%] bg-black text-white justify-center py-3 text-[18px]'>Secure Checkout <MdLockOutline /></Link>
                </div>
            </div>
        </div>
    )
}

function CartItems({ cartData, imagePath }) {
    let [quantity, setQuantity] = useState(cartData ? cartData.quantity : 1)
    let dispatch = useDispatch()
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    let token = useSelector((store) => store.loginStore.token)
    let deleteCart = (id) => {
        if (token == '') {
            alert('Please login to add the product to cart')
            return
        }
        axios.delete(`${apiBaseUrl}web/cart/delete-cart/${id}`, {
            headers: { authorization: `Bearer ${token}` }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status == 1) {
                    Swal.fire({
                        position:"center",
                        title: "Good job!",
                        text: finalRes.msg,
                        icon: "success"
                    });
                    dispatch(fetchCart())

                }
                if (finalRes.status == 0) {
                    Swal.fire({
                        position:"center",
                        title: "Oops!",
                        text: finalRes.msg,
                        icon: "error"
                    });
                }
            })
    }

    let changeQty = () => {
        let id = cartData._id
        axios.put(`${apiBaseUrl}web/cart/update-cart/${id}`,
            {
                quantity
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status == 1) {
                    dispatch(fetchCart())
                }
                else if (finalRes.status == 0) {
                    Swal.fire({
                        position:"center",
                        title: "Oops!",
                        text: finalRes.msg,
                        icon: "error"
                    });
                }
                else {
                    Swal.fire({
                        position:"center",
                        title: "Oops!",
                        text: 'Something Went Wrong...',
                        icon: "error"
                    });
                }
            })

    }
    useEffect(() => {
        changeQty()
    }, [quantity])
    return (
        <div>
            <div className='grid p-3 grid-cols-[20%_auto]'>
                <div>
                    <img src={apiBaseUrl + imagePath + cartData.product.productImage} className='h-[150px]' alt="" />
                </div>
                <div className='ps-3'>
                    <div className=' my-2 flex items-start justify-between '>
                        <h2 className='text-sm font-semibold'>{cartData && cartData.product.productName}</h2>
                        <button className='' onClick={() => deleteCart(cartData._id)}><RxCross1 /></button>
                    </div>
                    <div className='text-gray-400 mb-2 text-sm'>
                        Size : {cartData && cartData.sizeId.sizeName}
                    </div>
                    <div className='text-gray-400 mb-2 text-sm'>
                        Color : {cartData && cartData.colorId.colorName}
                    </div>
                    <div>
                        <button className='flex gap-2 items-center underline text-gray-500 text-sm'>Move to Wishlist <CiHeart /></button>
                    </div>
                    <div className='flex justify-end mb-2 items-center gap-3 text-[13px]'>
                        <span className='bg-yellow-200'> -43%</span>
                        <span className='line-through'>Rs {cartData && cartData.quantity * cartData.product.productPrice}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <button className='p-1 px-3 border-[0.5px]' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}><FaMinus className='text-[14px]' /> </button>
                            <div className=' px-3 border-[0.5px]'>{quantity}</div>
                            <button className='p-1 px-3 border-[0.5px]' onClick={() => setQuantity(quantity < 6 ? quantity + 1 : quantity)}><IoMdAdd /></button>
                        </div>
                        <div className='text-red-500 font-semibold'>Rs {cartData && cartData.quantity * cartData.product.productMRP}</div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

function PopularItems() {
    let [dropdown, setDropdown] = useState(false)
    return (
        <div className='grid grid-cols-[25%_auto] h-[140px]'>
            <div className=''>
                <img className='h-[100%] w-[100%]' src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/1410254-1FH.01_450x.jpg?v=1727114662" alt="" />
            </div>
            <div className='px-2'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center text-[13px] font-semibold'>
                    <h2>The Capital Parka in Dart Grey</h2>
                    <div className='line-through text-end'>$599.00</div>
                </div>
                <div className='text-red-500 text-end text-[14px] font-semibold'>$448.99</div>
                <div className='py-3'>
                    <button onClick={() => setDropdown(!dropdown)} className='flex items-center gap-2 text-[13px] border-[0.5px] w-[100px]'>Select a size {dropdown ? <FaChevronUp /> : <FaChevronDown />} </button>
                    {dropdown ?
                        <div className='absolute ps-4  bg-white border-2 w-[100px]  z-30'>
                            <div className='text-[12px] cursor-pointer hover:font-semibold my-1'>XS</div>
                            <div className='text-[12px] cursor-pointer hover:font-semibold my-1'>S</div>
                            <div className='text-[12px] cursor-pointer hover:font-semibold my-1'>L</div>
                            <div className='text-[12px] cursor-pointer hover:font-semibold my-1'>M</div>
                        </div>

                        :

                        ''

                    }
                </div>
                <div className='mt-5'>
                    <button className='py-1 px-3 text-sm border-[0.5px] border-black hover:bg-black hover:text-white duration-200'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
