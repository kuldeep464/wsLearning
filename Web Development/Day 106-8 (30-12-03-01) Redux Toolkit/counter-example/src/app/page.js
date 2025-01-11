'use client'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";



export default function Home() {
  let myData = useSelector((store) => store.MyCounter.counter)
  let dispatches=useDispatch()


  return (
    <div>
      <div className="w-[200px] mx-auto mt-24 flex gap-5 items-center text-3xl" >
        {myData<1 ?
      <button className={`border-[0.1px] py-2 px-3 rounded text-[18px] w-[40px] h-[60px]`} disabled onClick={()=>dispatches(decrement())}>-</button>
      :
      <button className={`border-[0.1px] py-2 px-3 rounded  text-[18px] w-[40px] h-[60px] border-black`} onClick={()=>dispatches(decrement())}>-</button>  
      }
        
        {myData}
        <button className="border-[0.1px] py-2 px-3  text-[18px] w-[40px] h-[60px] rounded border-black" onClick={()=>dispatches(increment())}>+</button>
      </div>

    </div>
  );
}
