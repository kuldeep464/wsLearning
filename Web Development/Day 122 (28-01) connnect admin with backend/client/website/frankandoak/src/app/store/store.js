import { configureStore } from "@reduxjs/toolkit";
import  loginSlice  from "../slice/authSlice";
import cartSlice  from "../slice/cartSlice";


export const store = configureStore ({
    reducer: {
      loginStore: loginSlice,
      cartStore:cartSlice
    },
  })