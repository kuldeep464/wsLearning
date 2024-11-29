import React, { useContext } from 'react'
import { main_context } from '../context/EcomContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function Wishlist() {

  let { wishData, setWishData, cartData, setCartData } = useContext(main_context)

  let removeItem = (deleteIndex) => {
    let finalData = wishData.filter((p, k) => k != deleteIndex)
    setWishData(finalData)
    toast.success('Item Removed Successfully')
  }

  let addToCart = (value, deleteIndex) => {
    let check = cartData.some((v, i) => v.id == value.id)
    if (!check) {
      setCartData([...cartData, value])
      toast.success("Item Added to Cart")
      let finalData = wishData.filter((p, k) => k != deleteIndex)
      setWishData(finalData)

    }
    else {
      toast.error("This Item already in Wishlist")
    }

  }


  return (

    <div>
      <ToastContainer />
      <div className="max-w-[1200px] bg-gray-200 mx-auto mt-10">
        <div className=" shadow-md my-10">
          <div className="w-3/4 mx-auto bg-gray-200 px-10 py-10">
            <div className="flex justify-between border-b border-white pb-8">
              <h1 className="font-semibold text-2xl">Wishlist</h1>
              <h2 className="font-semibold text-2xl">{wishData.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
            </div>


            {wishData.length > 0 ?

              wishData.map((v, i) => {
                return (
                  <>
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                      <div className="flex w-2/5">
                        <div className="w-20">
                          <img className="h-24" src={v.image} alt="" />
                        </div>
                        <div className="flex flex-col justify-around ml-4 flex-grow">
                          <span className="font-bold text-sm">{v.title}</span>
                          <span className="text-red-500 text-sm">{v.brand}</span>
                        </div>
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">$ {v.price}</span>
                      <div className='flex gap-11'>
                        <button className='bg-green-600 px-3 py-1 rounded-md text-white' onClick={() => addToCart(v, i)}>Add to cart</button>
                        <button className='bg-red-600 px-3 py-1 rounded-md text-white' onClick={() => removeItem(i)}>Remove</button>
                      </div>
                    </div>
                  </>
                )
              })

              :
              'No Data'
            }

            <div className='flex justify-between'>
              <Link to={'/'} className="flex font-semibold text-indigo-600 text-sm mt-10">
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                Continue Shopping
              </Link>
              <Link to={'/cart'} className="flex items-center gap-2 font-semibold text-indigo-600 text-sm mt-10">
                Go To Cart
                <FaLongArrowAltRight className='font-bold text-[18px]' />
              </Link>
            </div>




          </div>


        </div>
      </div>
    </div>
  )
} 
