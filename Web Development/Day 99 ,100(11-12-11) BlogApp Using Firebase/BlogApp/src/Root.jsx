import React from 'react'
import Header from './common/Header'
import { Outlet } from 'react-router-dom'
import Footer from './common/Footer'

export default function Root() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
