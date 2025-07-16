"use client"
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import LoginModal from '../modal/LoginModal';
import { Carousel } from "flowbite-react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import CartModal from '../modal/CartModal';
import MegaMenuSlider from '../modal/MegaMenuSlider';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '../slice/authSlice';
import Swal from 'sweetalert2';
import { fetchCart } from '../slice/cartSlice';

export default function Header() {
    let [showAccountDrop, setshowAccountDrop] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const [MegaMenu, setMegaMenu] = useState(-1)
    const [accountMenu, setAccountMenu] = useState(-1)
    let [mobileMegaMenuOpen, setMobileMegaMenuOpen] = useState(false)
    let [cartModalSlider, setCartModalSlider] = useState(false)
    let modalData = { openModal, setOpenModal }
    let route = useRouter()
    // let mobileMenu={mobileMegaMenuOpen,setMobileMegaMenuOpen}
    let data = useSelector((Store) => Store.loginStore.webAuthDetails)
    let dispatch = useDispatch()
    let openAccount = () => {
        if (data) {
            route.push('/account')
        }
        else {
            setOpenModal(true)
        }
    }
    useEffect(()=>{
        dispatch(fetchCart())
    },[])
    let cartData=useSelector((store)=>store.cartStore.cartItems.data)
    let openWishlist = () => {
        if (data) {
            route.push('/pages/wishlist')
        }
        else {
            setOpenModal(true)
        }
    }
    let logoutUser = () => {
        route.push('/')
        dispatch(logout())
        setshowAccountDrop(false)
        Swal.fire({
            position: "center",
            icon: "success",
            title: 'You have been logged out',
            timer: 3000
        });
    }
    useEffect(() => {
        if (data) {
            setshowAccountDrop(true)
        }
        else {
            setshowAccountDrop(false)
        }
    }, [])
    return (
        <header className='sticky top-0 lg:top-[-28px] z-50 bg-white' >


            <CartModal cartModalSlider={cartModalSlider} setCartModalSlider={setCartModalSlider} />
            <MegaMenuSlider mobileMegaMenuOpen={mobileMegaMenuOpen} setMobileMegaMenuOpen={setMobileMegaMenuOpen} />

            <LoginModal modalFunction={modalData} setshowAccountDrop={setshowAccountDrop} />
            <div className='hidden bg-gray-900 lg:flex justify-between h-[30px] items-center px-4 '>
                <Carousel leftControl=<FaChevronCircleLeft className='text-white' /> rightControl=<FaChevronCircleRight className='text-white' /> indicators={false} className='w-[60%] mx-auto'>
                    <h5 className='text-white text-center w-[90%] font-semibold text-[13px]'>Enjoy free shipping on orders $99+ and extended returns until January 12th</h5>
                    <h5 className='text-white text-center w-[90%] font-semibold text-[13px]'>Let's share the magic! Frank And Oak's Holiday Shop is here. Explore now</h5>
                    <h5 className='text-white text-center w-[90%] font-semibold text-[13px]'>Brrrrr! Warmth right this way. Sweaters for Women Sweaters for Men</h5>
                    <h5 className='text-white text-center w-[90%] font-semibold text-[13px]'>There's still time—but not much. Shop 40% off everything*. Shop Women Shop Men</h5>
                </Carousel>
                <div className='text-white flex items-center gap-2'>
                    <svg width="23" height="16" viewBox="0 0 23 16"><g fill="none" fillRule="evenodd"><path fill="#FFF" d="M0.5 0H22.5V16H0.5z"></path><path fill="#fa4b21" d="M22.4 14.933V16H0v-1.067h22.4zm0-2.133v1.067H0V12.8h22.4zm0-2.133v1.066H0v-1.066h22.4zm0-2.134V9.6H0V8.533h22.4zm0-2.133v1.067H0V6.4h22.4zm0-2.133v1.066H0V4.267h22.4zm0-2.134V3.2H0V2.133h22.4zM22.4 0v1.067H0V0h22.4z"></path><path fill="#3560b1" d="M0 0H9.6V7.467H0z"></path><use fill="#000" filter="url(#prefix__a)"></use><use fill="url(#prefix__c)"></use></g></svg>
                    <span className='text-[14px]'>$USD</span> <IoIosArrowDown />
                </div>
            </div>
            <div className='flex relative justify-between px-5 shadow-md'>
                <div className='w-[70%] flex justify-start gap-4 md:gap-0 md:justify-between  items-center'>
                    <div className='md:hidden' onClick={() => setMobileMegaMenuOpen(true)}>
                        <FaBarsStaggered />

                    </div>
                    <div>
                        <h2 className='text-[18px] font-bold'>Frank And Oak</h2>
                    </div>
                    <div className='hidden md:flex gap-10 md:w-[80%] '>
                        <div onMouseLeave={() => setMegaMenu(-1)} >
                            <div className='text-[14px] group bg-blue-200 py-2 flex gap-1 items-center text-red-600 font-semibold' onMouseEnter={() => setMegaMenu(1)}  >
                                <span className='group-hover:border-b-[0.1px] cursor-pointer border-black'>BLACK FRIDAY</span>
                                <svg className="sale-badge-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H6C6.13261 0.5 6.25979 0.552678 6.35355 0.646447L10.6496 4.9425C10.929 5.22355 11.0858 5.60372 11.0858 6C11.0858 6.39628 10.929 6.77646 10.6496 7.0575L10.6486 7.05856L7.06375 10.6434C6.92444 10.7828 6.75901 10.8935 6.57691 10.969C6.39481 11.0444 6.19962 11.0833 6.0025 11.0833C5.80538 11.0833 5.61019 11.0444 5.42809 10.969C5.24609 10.8935 5.08074 10.7829 4.94148 10.6436C4.9414 10.6435 4.94155 10.6437 4.94148 10.6436L0.646653 6.35376C0.552758 6.25998 0.5 6.13271 0.5 6V1ZM1.5 1.5V5.79272L5.64875 9.93665C5.69519 9.98314 5.75033 10.02 5.81103 10.0452C5.87173 10.0703 5.93679 10.0833 6.0025 10.0833C6.06821 10.0833 6.13327 10.0703 6.19397 10.0452C6.25467 10.02 6.30981 9.98314 6.35625 9.93665L9.9404 6.3525C9.94055 6.35235 9.9407 6.35219 9.94086 6.35204C10.0337 6.2584 10.0858 6.13188 10.0858 6C10.0858 5.86813 10.0337 5.7416 9.94086 5.64796C9.9407 5.64781 9.94055 5.64766 9.9404 5.6475L5.79289 1.5H1.5Z" fill="#ed2e00"></path><path fillRule="evenodd" clipRule="evenodd" d="M3 3.5C3 3.22386 3.22386 3 3.5 3H3.505C3.78114 3 4.005 3.22386 4.005 3.5C4.005 3.77614 3.78114 4 3.505 4H3.5C3.22386 4 3 3.77614 3 3.5Z" fill="#ed2e00"></path></svg>
                            </div>

                            <div className={`w-[100%] shadow-lg p-7 bg-white absolute top-[100%] duration-300 left-0 z-20 ${MegaMenu == 1 ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <div className='grid grid-cols-[16%_16%_33%_auto] gap-5'>
                                    <div className='border-e-[0.1px] mx-3'>
                                        <div className='py-2 border-b-[0.1px] border-black inline'>Women's winter sale</div>
                                        <ul className='mt-4 text-[15px]'>
                                            <Link href='/products'>
                                                <li className='hover:underline py-1 cursor-pointer'>
                                                    Shop All
                                                </li>
                                            </Link>
                                            <li className='hover:underline py-1 cursor-pointer'>Jackets</li>
                                            <li className='hover:underline py-1 cursor-pointer'>Sweaters</li>
                                            <li className='hover:underline py-1 cursor-pointer'>Tops</li>
                                            <li className='hover:underline py-1 cursor-pointer'>Bottoms</li>
                                        </ul>
                                    </div>
                                    <div className=' mx-3'>
                                        <div className='py-2 border-b-[0.1px] border-black inline'>Men's winter sale</div>
                                        <ul className='mt-4 text-[15px]'>
                                            <li className='hover:underline py-1 cursor-pointer'>Shop All</li>
                                            <li className='hover:underline py-1 cursor-pointer'>Jackets</li>
                                            <li className='hover:underline py-1 cursor-pointer'>Sweaters</li>
                                            <li className='hover:underline py-1 cursor-pointer'>Tops</li>
                                            <li className='hover:underline py-1 cursor-pointer'>Bottoms</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className=' flex cursor-pointer items-end pb-5 text-[24px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                            <h2 className='text-white'>Women's Winter</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=' flex cursor-pointer items-end pb-5 text-[24px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                            <h2 className='text-white'>Men's Winter</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='group  cursor-pointer group  py-2 ' onMouseEnter={() => setMegaMenu(2)} onMouseLeave={() => setMegaMenu(-1)}>
                            <div className='font-semibold text-[14px]  group-hover:border-b-[0.1px] border-black'>
                                Women
                            </div>
                            <div className={`w-[100%] p-7 bg-white shadow-lg top-[100%] absolute duration-300  left-0 z-20 ${MegaMenu == 2 ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='grid grid-cols-3 gap-3'>
                                        <div className='border-e-[0.1px]'>
                                            <h2 className='py-2 border-b-[0.1px] border-black inline'>Featured</h2>
                                            <ul className='mt-5 text-[15px]'>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Sale</li>
                                                <li className='hover:underline py-1 cursor-pointer'>New In</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Best Sellers</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Holiday Outfits</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Jackets</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Work Wear</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Gift Cards</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h2 className='py-2 border-b-[0.1px] border-black inline'>Clothing</h2>
                                            <ul className='mt-5 text-[15px]'>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Sale</li>
                                                <li className='hover:underline py-1 cursor-pointer'>New In</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Best Sellers</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Holiday Outfits</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Jackets</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Work Wear</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Gift Cards</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h2 className='py-2 border-b-[0.1px] border-black inline'>Accessories</h2>
                                            <ul className='mt-5 text-[15px]'>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Sale</li>
                                                <li className='hover:underline py-1 cursor-pointer'>New In</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Best Sellers</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Holiday Outfits</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Jackets</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Work Wear</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Gift Cards</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className=' flex cursor-pointer items-end pb-5 text-[20px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                            <h2 className='text-white'>Jackets</h2>
                                        </div>
                                        <div className=' flex cursor-pointer items-end pb-5 text-[20px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                            <h2 className='text-white'>Winter Accessories</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=' group  py-2 cursor-pointer ' onMouseEnter={() => setMegaMenu(3)} onMouseLeave={() => setMegaMenu(-1)}>
                            <div className='group-hover:border-b-[0.1px] border-black font-semibold text-[14px]  '>
                                Men
                            </div>
                            <div className={`w-[100%] p-7 bg-white shadow-lg top-[100%] absolute duration-300  left-0 z-20 ${MegaMenu == 3 ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='grid grid-cols-3 gap-3'>
                                        <div className='border-e-[0.1px]'>
                                            <h2 className='py-2 border-b-[0.1px] border-black inline'>Featured</h2>
                                            <ul className='mt-5 text-[15px]'>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Sale</li>
                                                <li className='hover:underline py-1 cursor-pointer'>New In</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Best Sellers</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Holiday Outfits</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Jackets</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Work Wear</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Gift Cards</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h2 className='py-2 border-b-[0.1px] border-black inline'>Clothing</h2>
                                            <ul className='mt-5 text-[15px]'>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Sale</li>
                                                <li className='hover:underline py-1 cursor-pointer'>New In</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Best Sellers</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Holiday Outfits</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Jackets</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Work Wear</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Gift Cards</li>
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h2 className='py-2 border-b-[0.1px] border-black inline'>Accessories</h2>
                                            <ul className='mt-5 text-[15px]'>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Sale</li>
                                                <li className='hover:underline py-1 cursor-pointer'>New In</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Best Sellers</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Holiday Outfits</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Winter Jackets</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Work Wear</li>
                                                <li className='hover:underline py-1 cursor-pointer'>Gift Cards</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className=' flex cursor-pointer items-end pb-5 text-[20px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                            <h2 className='text-white'>Jackets</h2>
                                        </div>
                                        <div className=' flex cursor-pointer items-end pb-5 text-[20px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                            <h2 className='text-white'>Winter Accessories</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=' group  py-2 cursor-pointer ' onMouseEnter={() => setMegaMenu(4)} onMouseLeave={() => setMegaMenu(-1)}>
                            <div className='group-hover:border-b-[0.1px] border-black font-semibold text-[14px]  '>
                                About us
                            </div>
                            <div className={`w-[100%] p-7 bg-white shadow-lg absolute duration-300  left-0 z-20 ${MegaMenu == 4 ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <div className='grid grid-cols-6 gap-5'>
                                    <div className=' flex cursor-pointer items-end pb-5 text-[20px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                        <h2 className='text-white'>Who we are</h2>
                                    </div>
                                    <div className=' flex cursor-pointer items-end pb-5 text-[20px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                        <h2 className='text-white'>Sustainable Practices</h2>
                                    </div>
                                    <div className=' flex cursor-pointer items-end pb-5 text-[20px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                        <h2 className='text-white'>Design Philosophy</h2>
                                    </div>
                                    <div className=' flex cursor-pointer items-end pb-5 text-[20px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                        <h2 className='text-white'>Febrics</h2>
                                    </div>
                                    <div className=' flex cursor-pointer items-end pb-5 text-[20px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                        <h2 className='text-white'>Circular denim</h2>
                                    </div>
                                    <div className=' flex cursor-pointer items-end pb-5 text-[20px] md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                                        <h2 className='text-white'>Partners and Factories</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='pt-1'>
                    <div className='flex justify-end gap-4 items-center'>
                        <button>
                            <IoSearchOutline className='text-[23px] cursor-pointer' />
                        </button>
                        <div className='relative' onMouseLeave={() => setAccountMenu(-1)} >
                            <button onClick={openAccount} onMouseEnter={() => setAccountMenu(1)} className='mt-1'>
                                <FaRegCircleUser className='text-[20px] cursor-pointer' />

                            </button>
                            {showAccountDrop ?

                                <div className={`absolute top-[100%]  border-[1px] right-[0%] md:w-[250px] duration-300 bg-white shadow-lg ${accountMenu != 1 ? ' opacity-0 invisible' : '  opacity-100 visible'}`}>
                                    <div className='bg-gray-200 px-4 py-2 text-[19px]'>My account</div>
                                    <div className='bg-black px-4 py-2 pb-4'>
                                        <ul>
                                            <li className='pb-2  text-white'>Hi, Kuldeep !</li>
                                            <hr />
                                            <li className='pb-2 pt-2  text-white flex justify-between items-center'><span>Points:</span> <span>20</span></li>
                                            <hr />
                                            <li className='pb-2 pt-2  text-white flex justify-between items-center'><span>Tier:</span> <span></span></li>
                                            <hr />
                                            <button className='text-white text-[18px] border-[1px] border-white rounded-md text-center w-full mt-4 py-2 hover:shadow-sm hover:shadow-white duration-300'>View your dashboard</button>
                                            <button className='my-3 text-white border-[1px] border-white py-1 px-4 hover:shadow-sm hover:shadow-white duration-300 rounded-md' onClick={logoutUser}>Log-Out</button>
                                        </ul>
                                    </div>
                                </div>
                                :
                                ''
                            }

                        </div>
                        <button onClick={openWishlist}>
                            <CiHeart className='text-[23px] cursor-pointer' />
                        </button>
                        <button className='flex items-center' onClick={() => setCartModalSlider(true)}>
                            <IoBagHandleOutline className='text-[20px] cursor-pointer' />
                            <sup className='text-red-800'>
                                {cartData ? cartData.length : 0}
                            </sup>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

