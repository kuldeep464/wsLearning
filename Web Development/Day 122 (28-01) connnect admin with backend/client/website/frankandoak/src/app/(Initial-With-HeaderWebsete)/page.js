'use client'
import Image from "next/image";
import Banner from "./HomeComponent/Banner";
import Categories from "./HomeComponent/Categories";
import EnjoyfortyPer from "./HomeComponent/EnjoyfortyPer";
import WinterJackets from "./HomeComponent/WinterJackets";
import GoodLiving from "./HomeComponent/GoodLiving";
import Comments from "./HomeComponent/Comments";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  let [categoryData,setCategoryData]=useState([])
  let [categoryPath,setCategoryPath]=useState('')

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIURL
  let getCategory=()=>{
    axios.get(`${apiBaseUrl}web/home/parent-category`)
    .then((res)=>res.data)
    .then((finalRes)=>{
      setCategoryData(finalRes.data)
      setCategoryPath(finalRes.staticImagePath)
    })
    
  }
  useEffect(()=>{
    getCategory()
  },[])
  return (
    <>
      <Banner/>
      <Categories categoryData={categoryData} categoryPath={categoryPath}/>
      <EnjoyfortyPer/>
      <WinterJackets/>
      <Comments/>
      <GoodLiving/>
    </>
  );
}
