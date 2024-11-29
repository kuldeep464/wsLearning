import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductDetail from './ProductDetail.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './Cart.jsx'
import Wishlist from './Wishlist.jsx'
import Layout from './Layout.jsx'
import EcommContext from './context/EcommContext.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EcommContext>
      <RouterProvider router={router} />
    </EcommContext>
  </StrictMode>,
)
