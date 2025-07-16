import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


export let loginSlice=createSlice({
    name:"login",
    initialState:{
        adminDetails:Cookies.get('adminAuth') ? JSON.parse(Cookies.get('adminAuth')) : null
    },
    reducers:{
        saveLogin:(state,reqData)=>{
            state.adminDetails=reqData.payload.admin
            Cookies.set('adminAuth', JSON.stringify(reqData.payload.admin))
        },
        logout:(state)=>{
            state.adminDetails=null
            Cookies.set('adminAuth',JSON.stringify(null))
        }
    }
})

export const { saveLogin, logout } = loginSlice.actions
export default loginSlice.reducer