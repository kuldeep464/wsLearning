import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    counter: 0,
  }

export let counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(oldState)=>{
            oldState.counter+=1
        },
        decrement:(oldState)=>{
            oldState.counter-=1
        }
    }
})

export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer