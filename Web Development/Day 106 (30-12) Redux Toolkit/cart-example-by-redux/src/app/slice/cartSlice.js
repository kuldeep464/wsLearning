
import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

const initialState = {
  cart: localStorage.getItem('CartByRedux') ? JSON.parse(localStorage.getItem('CartByRedux')) : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(oldData,newData)=>{
       
        oldData.cart.push(newData.payload)
        localStorage.setItem('CartByRedux',JSON.stringify(oldData.cart))
        Swal.fire({
          title: "Good job!",
          text: "Item added to Cart",
          icon: "success",
          timer: 1500
        });
        
    },
    deleteFromCart:(oldData,newData)=>{
        oldData.cart=oldData.cart.filter((items)=>items.id!=newData.payload.id)
        localStorage.setItem('CartByRedux',JSON.stringify(oldData.cart))
        Swal.fire({
              title: "Good job!",
              text: "Item Removed Successfully",
              icon: "success",
              timer: 1500
            });
    },
    changeQtyy:(oldData,newData)=>{
      let {id,qty}=newData.payload

      let index=oldData.cart.findIndex((items)=>items.id===id)
      oldData.cart[index].qty=qty
      localStorage.setItem('CartByRedux',JSON.stringify(oldData.cart))

    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,deleteFromCart,changeQtyy } = cartSlice.actions

export default cartSlice.reducer