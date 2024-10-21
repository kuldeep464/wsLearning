import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import Media from './pages/Media.jsx'
import ContactUs from './pages/ContactUs.jsx'
import RootLayout from './RootLayout.jsx'
import Blog from './pages/Blog.jsx'
import BlogDetails from './pages/Blog-Details.jsx'

let routes = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Media-And-Events',
        element:<Media/>
      },
      {
        path:'/Contact-us',
        element:<ContactUs/>
      },
      {
        path:'/Blog',
        element:<Blog/>
      },
      {
        path:'/Blog-details/:blogId',
        element:<BlogDetails/>
      }
    ]
  }

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
