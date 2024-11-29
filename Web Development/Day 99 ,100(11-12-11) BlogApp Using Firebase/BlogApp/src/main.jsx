import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Create from './pages/blog/Create.jsx'
import Listing from './pages/blog/Listing.jsx'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import MainContext from './MainContext.jsx'
import Auth from './Auth.jsx'

let routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/create',
        element: <Auth />,
        children:[
          {
            path:'',
            element:<Create/>
          }
        ]
      },
      {
        path: '/listing',
        element: <Auth />,
        children:[
          {
            path:'',
            element:<Listing/>
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext>
      <RouterProvider router={routes} />
    </MainContext>
  </StrictMode>,
)
