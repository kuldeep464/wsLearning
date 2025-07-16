'use client'
import Footer from '@/app/common/Footer'
import Header from '@/app/common/Header'
import { store } from '@/app/store/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function LayoutWrapper({children}) {
  return (
    <div>
      <Provider store={store}>
        <Header/>
        {children}
        <Footer/>
        </Provider>
    </div>
  )
}
