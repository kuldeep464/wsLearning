
import { createSlice } from '@reduxjs/toolkit'

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
        
    },
    deleteFromCart:(oldData,newData)=>{
        oldData.cart=oldData.cart.filter((items)=>items.id!=newData.payload.id)
        localStorage.setItem('CartByRedux',JSON.stringify(oldData.cart))
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,deleteFromCart } = cartSlice.actions

export default cartSlice.reducer