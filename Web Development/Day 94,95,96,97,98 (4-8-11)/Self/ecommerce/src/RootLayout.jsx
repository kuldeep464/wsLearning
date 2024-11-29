import React from 'react'
import Header from './common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './common/Footer'

export default function RootLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
