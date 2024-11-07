import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout.jsx'
import Home from './pages/Home.jsx'

let routes=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
