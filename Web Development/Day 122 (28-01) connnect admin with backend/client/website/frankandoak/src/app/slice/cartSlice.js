import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";


export const fetchCart=createAsyncThunk("fetchCart",async(_,thunkApi)=>{
    try{
        const token=Cookies.get("token")
        const response=await axios.get(`${process.env.NEXT_PUBLIC_APIURL}web/cart/get-cart`,{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data
    }
    catch(error){
        return thunkApi.rejectWithValue(error.message)
    }
})

export let cartSlice=createSlice({
    name: "cart",
    initialState:{
        cartItems:[],

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCart.fulfilled , (state,action)=>{
            state.loading=false
            state.cartItems=action.payload
        })
    }
})

export default cartSlice.reducer

