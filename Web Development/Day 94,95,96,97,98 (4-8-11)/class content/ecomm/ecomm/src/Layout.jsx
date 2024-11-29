import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './comman/Header'

export default function Layout() {
  return (
    <>
        <header> <Header/> </header>
        <main> <Outlet/> </main>
        <footer> </footer>
    </>
  )
}
