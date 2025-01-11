'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { Mystore } from './store/store'

export default function MainRootLayout({children}) {
  return (
    <Provider store={Mystore}>
        {children}
    </Provider>
  )
}
