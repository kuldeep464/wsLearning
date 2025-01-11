'use client'
import React from 'react'
import Header from './common/Header'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default function MainLayout({children}) {
  return (
    <div>
        <Provider store={store}>
        <Header/>
        {children}
        </Provider>
    </div>
  )
}
