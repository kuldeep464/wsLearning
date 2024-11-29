import React  from 'react'
import { useContext } from 'react'
import { main_context } from './context/EcommContext'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Wishlist() {

  let {wishData,setWishData,cartData,setCartData}=useContext(main_context)


    let deleteItem=(deleteId)=>{
        let FinalData=wishData.filter((p,k)=>k!=deleteId)
        setWishData(FinalData)
    }
    
    // moveToBag
    let moveToBag=(Item,deleteId)=>{
      setCartData([...cartData,Item])
      let FinalData=wishData.filter((p,k)=>k!=deleteId)
        setWishData(FinalData)
     
    }
    

 

  return (
    <div>
    <ToastContainer />
      <div className="w-3/4 mx-auto bg-[#ccc] px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">WishList Cart</h1>
          <h2 className="font-semibold text-2xl">{wishData.length} Items</h2>
        </div>
        
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>

          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>

        </div>
        
        {wishData.length>0 
        ? 
        wishData.map((v,i)=>{
          
          return(
            <>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> 
            <div className="w-20">
              <img className="h-24" src={v.image} alt=""/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{v.title}</span>
              <span className="text-red-500 text-xs"> {v.brand} </span>
              <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs"></a>
            </div>
          </div>
          
          <span className="text-center w-1/5 font-semibold text-sm">$ {v.price} </span>
          <button onClick={()=>moveToBag(v,i)} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Move To Bag </button>
          <button onClick={()=>deleteItem(i)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
        </div>
            </>
          )
        })
         :
          "No Item Addedd in Wishlist !" }

        

       

       

       
      </div>
    </div>
  )
}
