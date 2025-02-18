import React, { useContext, useEffect, useState } from 'react'
import { main_context } from '../context/EcomContext'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function Cart() {
  let { cartData, setCartData } = useContext(main_context)


  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartData.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
            </div>

            {cartData.length > 0 ?

              cartData.map((v, i) => {
                return (

                  <AllCartData v={v} index={i} />
                )
              })

              :
              'No Data in Cart'
            }







            <Link to={'/'} className="flex font-semibold text-indigo-600 text-sm mt-10">

              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Continue Shopping
            </Link>
          </div>

          <PurchaseData />


        </div>
      </div>
    </>
  )
}

let AllCartData = ({ v, index }) => {
  let [count, setCount] = useState(v.quantity)
  let {wishData,setWishData, cartData, setCartData } = useContext(main_context)

  let updateData = () => {
    let newData = cartData.map((v, i) => {
      if (i == index) {
        let copyData = { ...v, quantity: count }
        return copyData
      }
      return v
    })

    setCartData(newData)
  }

  //delete work

  let removeItem = (deleteIndex) => {
    let finalData = cartData.filter((v, i) => i != deleteIndex)
    setCartData(finalData)
    toast.success("Item Removed Successfully")
  }

  // add to wishlist

  let addToWishlist = (value, deleteIndex) => {
    setWishData([...wishData, value])

    let finalData = cartData.filter((p, k) => k != deleteIndex)
    setCartData(finalData)
  }

  useEffect(() => {
    updateData()
  }, [count])

  let deValue = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  return (
    <>
      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <ToastContainer />
        <div className="flex w-2/5">
          <div className="w-20">
            <img className="h-24" src={v.image} alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{v.title}</span>
            <span className="text-red-500 text-xs"> {v.brand} </span>
            <div className='flex gap-28'>
              <button className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => removeItem(index)}>Remove</button>
              <button className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={()=>addToWishlist(v,index)}>Add to wishlist</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <button onClick={() => deValue()}>
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>

          <input className="mx-2 border text-center w-8" type="text" value={count} />

          <button onClick={() => setCount(count + 1)}>
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">$ {v.price} </span>
        <span className="text-center w-1/5 font-semibold text-sm">$ {(count * v.price).toFixed(2)}</span>
      </div>
    </>
  )
}

let PurchaseData = () => {
  let { cartData, setCartData } = useContext(main_context)
  let [amount, setAmount] = useState(0)
  let [finalAmount, setFinalAmount] = useState(0)

  let calcAmount = () => {
    let sum = 0
    cartData.forEach((v) => {

      sum = sum + (v.price * v.quantity)


    })
    setAmount(sum)

  }

  let finalCalcAmount = () => {
    if (amount > 0) {
      setFinalAmount(amount * 118 / 100 + 2)
    }
    else{
      setFinalAmount(0)
    }
  }



  useEffect(() => {
    calcAmount()
    finalCalcAmount()
  }, [cartData])

  return (
    <>
      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items {cartData.length}</span>
          <span className="font-semibold text-sm">{(amount).toFixed(2)}$</span>
        </div>
        <div className='font-semibold flex justify-between pb-4'>
          <span>GST</span>
          <span>18%</span>
        </div>
        <div className='font-semibold flex justify-between'>
          <span>Delivery Charge</span>
          <span>2$</span>
        </div>
        <div className="py-10">
          <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$ {(finalAmount).toFixed(2)} </span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>
    </>
  )
}

