'use client'
import React, { useEffect, useState } from 'react'
import "./EnjoyfortyPer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Carousel } from 'flowbite-react';
import { FaAngleLeft, FaAngleRight, FaCaretLeft, FaCaretRight, FaHeart } from 'react-icons/fa6'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { fetchCart } from '@/app/slice/cartSlice';
import { useRouter } from 'next/navigation';

export default function EnjoyfortyPer() {
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    let [productData, setProductData] = useState([])
    let [imagePath, setImagePath] = useState(null)
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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

    let getFeaturedProduct = () => {
        axios.get(`${apiBaseUrl}web/home/featured-product`)
            .then((res) => res.data)
            .then((finalRes) => {
                setProductData(finalRes.data)
                setImagePath(finalRes.staticImagePath)
            })

    }
    useEffect(() => {
        getFeaturedProduct()
    }, [])


    return (
        <div className='px-4'>
            <div className='flex flex-col md:flex-row py-5 justify-between items-start md:items-center'>
                <h1 className='text-3xl mb-3'>
                    Treat yourself with an additional 25% off everything*
                </h1>
                <div className='flex gap-5'>
                    <span className='underline text-2xl'>Women's</span>
                    <span className='text-gray-600 text-2xl'>Men's</span>
                </div>
            </div>
            <div className='px-[20px]'>
                <Slider {...settings}>
                    {productData.length > 0 ?
                        productData.map((product, index) => <ProductItems key={index} product={product} imagePath={imagePath} />)
                        :
                        <div>Loading...</div>
                    }

                </Slider>
            </div>
        </div>

    )
}

function ProductItems({ product, imagePath }) {
    let route=useRouter()
    let dispatch=useDispatch()
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
    let [colorId,setColorId]=useState(product.colorName[0]._id)
    let token=useSelector((store)=>store.loginStore.token)
    let addToCart=(sizeId)=>{
        if(token==''){
            alert('Please login to add the product to cart')
            return
        }
        let productId=product._id
        let quantity=1
        let obj={
            product:productId,
            sizeId,
            colorId,
            quantity
        }
        axios.post(`${apiBaseUrl}web/cart/add-to-cart`,obj,{
            headers:{authorization:`Bearer ${token}`}
        })
        .then((res)=>{
            console.log(res.data)
            Swal.fire({
                title: "Good job!",
                text: res.data.msg,
                icon: "success"
            });
            dispatch(fetchCart())

        })
        .catch((error)=>{
            console.log(error)
        })
    }

    let movetoDetailingPage=(id)=>{
        
        route.push(`/pages/product-detailing/${id}`)
    }
    return (
        <div className='p-3  mainBox '>
            <div className='inneritems '>

                <div className='relative mainImage'>
                    <div className='h-[250px] md:h-[400px] absolute top-0 left-0 z-10 w-[300px]  imghoverDiv  ' >
                        <img src={apiBaseUrl + imagePath.productAnimationImagePath + product.productImageAnimation} alt="..." className='h-[100%] w-full' />
                    </div>


                    <Carousel leftControl=<FaAngleLeft className='text-gray-400' /> rightControl=<FaAngleRight className='text-gray-400' /> slide={false} className='h-[250px] md:h-[400px] w-[300px] '>
                        {product.productGallery.map((images, index) => {
                            return (
                                <img key={index} src={apiBaseUrl + imagePath.productGalleryPath + images} alt="..." className='h-[100%]' />
                            )
                        })}

                    </Carousel>

                </div>





            </div>
            <div className=' relative w-[300px]'>
                <div className='absolute bottom-[105%] -z-0 w-[100%]  quickbtnDiv '>
                    <div className='hidden'>
                        <div className='grid grid-cols-5 gap-3 bg-white justify-around text-center mx-2 '>
                            {product.sizeName.map((size, index) => {
                                return (
                                    <button key={index} onClick={()=>addToCart(size._id)} className='text-center  p-1 hover:bg-black hover:text-white duration-300'>{size.sizeName}</button>
                                )
                            })}

                        </div>
                    </div>
                    <button className='w-full bg-white py-2 text-black quickbtnDivButton'>Quick add</button>
                </div>
                <div className='flex p-2 justify-between items-center'>
                    <span className='bg-black text-white text-sm px-2'> FewLeft </span>
                    <FaHeart className={` `} />
                </div>
                <div className='p-2'>
                    <div className='flex justify-between items-center'>
                    <h3 className='py-2 text-sm '>{product.productName}</h3>
                    <button onClick={()=>movetoDetailingPage(product._id)} className='text-sm bg-black text-white py-1 px-2 rounded-[7px]'>View Details...</button>
                    </div>
                    <div className='flex gap-3'>
                        <span className='line-through'>$ {product.productPrice}</span>
                        <span className='text-red-500'>$ {product.productMRP}</span>
                    </div>
                    <div className='colorDiv'>
                        <p className='text-sm text-gray-500 pt-2'>{product.colorName.length} Colours</p>
                        <div className='hidden'>
                            <div className='flex gap-3 items-center'>
                                {product.colorName.map((color, index) => {
                                    return (
                                        <div key={index} onClick={()=>setColorId(color._id)} className='border-[0.1px] rounded-[50%] p-[2px] border-black cursor-pointer' >
                                            <div className={`w-[10px] h-[10px] rounded-[50%] `} style={{background:color.colorName}}></div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


