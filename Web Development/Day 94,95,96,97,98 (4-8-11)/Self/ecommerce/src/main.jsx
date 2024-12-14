import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import ProductDetailing from './pages/ProductDetailing'
import EcomContext from './context/EcomContext'
import 'react-toastify/dist/ReactToastify.css';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/wishlist',
        element: <Wishlist />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/Product-Detail/:id',
        element: <ProductDetailing />
      }
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EcomContext>
      <RouterProvider router={routes} />
    </EcomContext>
  </StrictMode>,
)
