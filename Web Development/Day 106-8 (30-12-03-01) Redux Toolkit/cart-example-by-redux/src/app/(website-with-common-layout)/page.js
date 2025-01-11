'use client'
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../slice/cartSlice";
import Swal from "sweetalert2";


export default function Home() {
  let [products, setProducts] = useState([])
  let getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalRes) => {
        setProducts(finalRes.products)

      })
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            {products.map((item, index) => {

              return (
                <ProductItems item={item} key={index} index={index} />
              )
            })}



          </div>
        </div>
      </div>
    </div>
  );
}

function ProductItems({ item, index }) {
  let dataInCart = useSelector((store) => store.cartData.cart)

  let checkData = dataInCart.filter((cartData) => cartData.id === item.id)

  let dispatch = useDispatch()
  let addItemsToCart = () => {
    let obj = {
      id: item.id,
      qty: 1,
      title: item.title,
      image: item.thumbnail,
      price: item.price
    }
    dispatch(addToCart(obj))
   
  }
  return (
    <div className="group relative">
      <img src={item.thumbnail} alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              {item.title}
            </a>
          </h3>

        </div>
        <p className="text-sm font-medium text-gray-900">$ {item.price}</p>
      </div>
      <div className="flex justify-end">
        {checkData.length == 1 ?
          <button className="bg-red-500 py-1 px-2 mt-3 rounded-lg text-white" onClick={()=>dispatch(deleteFromCart({id:item.id}))}>
            Remove from cart
          </button>
          :
          <button className="bg-blue-500 py-1 px-2 mt-3 rounded-lg text-white" onClick={addItemsToCart}>
            Add to cart
          </button>
        }

      </div>
    </div>
  )
}
