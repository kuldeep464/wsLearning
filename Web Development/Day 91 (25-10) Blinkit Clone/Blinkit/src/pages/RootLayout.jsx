import React from 'react'
import Header from '../common/header'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
     <Header/>
        <Outlet/>
     <Footer/>
    </>
  )
}
