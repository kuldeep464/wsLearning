'use client'
import React, { createContext, useState } from 'react'

export const cartModalsliderContext = createContext()

export default function CartContext({ children }) {
    let [cartModalSlider, setCartModalSlider] = useState(false)

    return (
        <cartModalsliderContext.Provider value={{ cartModalSlider, setCartModalSlider }}>
            {children}
        </cartModalsliderContext.Provider>
    )
}
