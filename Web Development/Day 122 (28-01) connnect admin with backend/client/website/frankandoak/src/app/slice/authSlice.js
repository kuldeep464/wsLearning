import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


export let loginSlice=createSlice({
    name:"auth",
    initialState:{
        webAuthDetails:Cookies.get('webAuth') ? JSON.parse(Cookies.get('webAuth')) : null,
        token:Cookies.get('token') ?? ''
    },
    reducers:{
        saveLogin:(state,reqData)=>{
            state.webAuthDetails=reqData.payload.webAuth
            state.token=reqData.payload.token
            Cookies.set('webAuth', JSON.stringify(reqData.payload.webAuth))
            Cookies.set('token', reqData.payload.token)
        },
        logout:(state)=>{
            state.webAuthDetails=null
            state.token=''
            Cookies.remove('webAuth')
            Cookies.remove('token')
        }
    }
})

export const { saveLogin, logout } = loginSlice.actions
export default loginSlice.reducer