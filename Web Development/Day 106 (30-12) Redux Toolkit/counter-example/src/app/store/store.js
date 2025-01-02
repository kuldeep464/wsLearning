import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../slices/counterSlice";


export const Mystore = configureStore({
    reducer:{
        MyCounter:counterSlice,
    }
})