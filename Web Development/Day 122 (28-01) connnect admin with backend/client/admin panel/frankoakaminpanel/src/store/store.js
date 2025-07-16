import { configureStore } from "@reduxjs/toolkit";
import  loginSlice from "../slice/AdminAuthSlice";


export const store = configureStore ({
    reducer: {
      loginStore: loginSlice,
    },
  })