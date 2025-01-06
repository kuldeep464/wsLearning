'use state'
import React, { useState } from 'react'
import { FaMinus } from 'react-icons/fa6'
import { IoIosSearch, IoMdAdd } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'

export default function MegaMenuSlider({ mobileMegaMenuOpen, setMobileMegaMenuOpen }) {
    let [menuTabs, setMenuTabs] = useState(1)
    let [tabsFAQ, setTabsFAQ] = useState(-1)

    return (
        <div className='bg-white'>
            <div className={`fixed z-30 duration-500 top-0 w-[90%] h-screen overflow-y-scroll bg-white left-0 ${mobileMegaMenuOpen ? 'translate-x-0' : 'translate-x-[-10000px]'}`}>
                <div className='p-4'>
                    <div className='text-[25px] flex justify-between items-center'><IoIosSearch /> <RxCross1 onClick={() => setMobileMegaMenuOpen(false)} /></div>
                </div>
                <div className='sticky top-0 overflow-x-scroll' >
                    <div className='flex justify-between bg-gray-300 w-[120%] items-center px-2'>
                        <div className={`${menuTabs == 1 ? 'bg-white' : ''} p-2`} onClick={() => setMenuTabs(1)}>Black Friday</div>
                        <div className={`${menuTabs == 2 ? 'bg-white' : ''} p-2`} onClick={() => setMenuTabs(2)} >Women</div>
                        <div className={`${menuTabs == 3 ? 'bg-white' : ''} p-2`} onClick={() => setMenuTabs(3)}>Men</div>
                        <div className={`${menuTabs == 4 ? 'bg-white' : ''} p-2`} onClick={() => setMenuTabs(4)}>About us</div>
                    </div>
                </div>
                {menuTabs == 1 ?
                    <div className='p-2'>
                        <div className='border-b-[0.5px]'>
                            <div className='flex justify-between items-center mt-2 py-2 ' onClick={() => tabsFAQ != 1 ? setTabsFAQ(1) : setTabsFAQ(-1)}>
                                Women's Winter Sale
                                {tabsFAQ != 1 ? <IoMdAdd /> : <FaMinus />}
                            </div>
                            {tabsFAQ == 1 ?
                                <ul className='text-[15px] '>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                </ul>
                                :
                                ''
                            }
                        </div>
                        <div className='border-b-[0.5px]'>
                            <div className='flex justify-between items-center mt-2 py-2 ' onClick={() => tabsFAQ != 2 ? setTabsFAQ(2) : setTabsFAQ(-1)}>
                                Men's Winter Sale
                                {tabsFAQ != 2 ? <IoMdAdd /> : <FaMinus />}
                            </div>
                            {tabsFAQ == 2 ?
                                <ul className='text-[15px] '>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                </ul>
                                :
                                ''
                            }
                        </div>
                        <div className=' flex cursor-pointer my-3 items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Women's Winter Sale</h2>
                        </div>
                        <div className=' flex my-3 cursor-pointer items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Men's Winter Sale</h2>
                        </div>
                    </div>
                    :
                    ''
                }

                {menuTabs == 2 ?
                    <div className='p-2'>
                        <div className='border-b-[0.5px] inline text-[20px] border-black'>Women's Home</div>
                        <div className='border-b-[0.5px]'>
                            <div className='flex justify-between items-center mt-2 py-2 ' onClick={() => tabsFAQ != 1 ? setTabsFAQ(1) : setTabsFAQ(-1)}>
                                Featured
                                {tabsFAQ != 1 ? <IoMdAdd /> : <FaMinus />}
                            </div>
                            {tabsFAQ == 1 ?
                                <ul className='text-[15px] '>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                </ul>
                                :
                                ''
                            }
                        </div>
                        <div className='border-b-[0.5px]'>
                            <div className='flex justify-between items-center mt-2 py-2 ' onClick={() => tabsFAQ != 2 ? setTabsFAQ(2) : setTabsFAQ(-1)}>
                                Clothing
                                {tabsFAQ != 2 ? <IoMdAdd /> : <FaMinus />}
                            </div>
                            {tabsFAQ == 2 ?
                                <ul className='text-[15px] '>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                </ul>
                                :
                                ''
                            }
                        </div>
                        <div className='border-b-[0.5px]'>
                            <div className='flex justify-between items-center mt-2 py-2 ' onClick={() => tabsFAQ != 3 ? setTabsFAQ(3) : setTabsFAQ(-1)}>
                                Accessories
                                {tabsFAQ != 3 ? <IoMdAdd /> : <FaMinus />}
                            </div>
                            {tabsFAQ == 3 ?
                                <ul className='text-[15px] '>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                </ul>
                                :
                                ''
                            }
                        </div>
                        <div className=' flex cursor-pointer my-3 items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Jackets</h2>
                        </div>
                        <div className=' flex my-3 cursor-pointer items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Winter Accessories</h2>
                        </div>
                    </div>
                    :
                    ''
                }

                {menuTabs == 3 ?
                    <div className='p-2'>
                        <div className='border-b-[0.5px] inline text-[20px] border-black'>Men's Home</div>
                        <div className='border-b-[0.5px]'>
                            <div className='flex justify-between items-center mt-2 py-2 ' onClick={() => tabsFAQ != 1 ? setTabsFAQ(1) : setTabsFAQ(-1)}>
                                Featured
                                {tabsFAQ != 1 ? <IoMdAdd /> : <FaMinus />}
                            </div>
                            {tabsFAQ == 1 ?
                                <ul className='text-[15px] '>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                </ul>
                                :
                                ''
                            }
                        </div>
                        <div className='border-b-[0.5px]'>
                            <div className='flex justify-between items-center mt-2 py-2 ' onClick={() => tabsFAQ != 2 ? setTabsFAQ(2) : setTabsFAQ(-1)}>
                                Clothing
                                {tabsFAQ != 2 ? <IoMdAdd /> : <FaMinus />}
                            </div>
                            {tabsFAQ == 2 ?
                                <ul className='text-[15px] '>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                </ul>
                                :
                                ''
                            }
                        </div>
                        <div className='border-b-[0.5px]'>
                            <div className='flex justify-between items-center mt-2 py-2 ' onClick={() => tabsFAQ != 3 ? setTabsFAQ(3) : setTabsFAQ(-1)}>
                                Accessories
                                {tabsFAQ != 3 ? <IoMdAdd /> : <FaMinus />}
                            </div>
                            {tabsFAQ == 3 ?
                                <ul className='text-[15px] '>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                    <li className='py-1'>Shop All</li>
                                </ul>
                                :
                                ''
                            }
                        </div>
                        <div className=' flex cursor-pointer my-3 items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Jackets</h2>
                        </div>
                        <div className=' flex my-3 cursor-pointer items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Winter Accessories</h2>
                        </div>
                    </div>
                    :
                    ''
                }

                {menuTabs == 4 ?
                    <div className='p-2'>
                        <div className=' flex cursor-pointer my-3 items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Jackets</h2>
                        </div>
                        <div className=' flex my-3 cursor-pointer items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Winter Accessories</h2>
                        </div>
                        <div className=' flex cursor-pointer my-3 items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Jackets</h2>
                        </div>
                        <div className=' flex my-3 cursor-pointer items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Winter Accessories</h2>
                        </div>
                        <div className=' flex cursor-pointer my-3 items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Jackets</h2>
                        </div>
                        <div className=' flex my-3 cursor-pointer items-end pb-5 text-[18px] ps-3 md:ps-8 bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] bg-center bg-cover h-[200px] md:h-[200px] lg:h-[250px] w-[100%] bg-no-repeat '>
                            <h2 className='text-white'>Winter Accessories</h2>
                        </div>
                    </div>
                    :
                    ''
                }

                <div className='p-3 mb-5'>
                    <div className='border-b-[0.5px]'>
                        <div className='flex justify-between items-center mt-2 py-2 ' onClick={() => tabsFAQ != 11 ? setTabsFAQ(11) : setTabsFAQ(-1)}>
                            About us
                            {tabsFAQ != 11 ? <IoMdAdd /> : <FaMinus />}
                        </div>
                        {tabsFAQ == 11 ?
                            <ul className='text-[15px] '>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                            </ul>
                            :
                            ''
                        }
                    </div>


                    <div className='border-b-[0.5px]'>
                        <div className='flex justify-between items-center mt-2 py-2 ' onClick={() => tabsFAQ != 12 ? setTabsFAQ(12) : setTabsFAQ(-1)}>
                            Discover
                            {tabsFAQ != 12 ? <IoMdAdd /> : <FaMinus />}
                        </div>
                        {tabsFAQ == 12 ?
                            <ul className='text-[15px] '>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                            </ul>
                            :
                            ''
                        }
                    </div>


                    <div className='border-b-[0.5px]'>
                        <div className='flex justify-between items-center mt-2 py-2 ' onClick={() => tabsFAQ != 13 ? setTabsFAQ(13) : setTabsFAQ(-1)}>
                            Customer Care
                            {tabsFAQ != 13 ? <IoMdAdd /> : <FaMinus />}
                        </div>
                        {tabsFAQ == 13 ?
                            <ul className='text-[15px] '>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                                <li className='py-1'>Shop All</li>
                            </ul>
                            :
                            ''
                        }
                    </div>
                </div>

                <div className='flex justify-center items-center mb-8'>
                    <img src="data:image/png;base64,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" className='w-[200px] h-[120px] rounded-md' alt="" />
                </div>

            </div>

        </div>
    )
}
