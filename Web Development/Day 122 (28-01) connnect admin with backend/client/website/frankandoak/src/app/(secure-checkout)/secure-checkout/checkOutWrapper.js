'use client'
import { store } from '@/app/store/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function CheckOutWrapper({ children }) {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    )
}
