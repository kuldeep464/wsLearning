import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Components/Dashboard.jsx'
import Profile from './pages/Components/Profile.jsx'
import AddColor from './pages/Components/AddColor.jsx'
import ViewColor from './pages/Components/ViewColor.jsx'
import SizeDetails from './pages/Components/SizeDetails.jsx'
import ViewSize from './pages/Components/ViewSize.jsx'
import AddCategory from './pages/Components/AddCategory.jsx'
import ViewCategory from './pages/Components/ViewCategory.jsx'
import AddSubCategory from './pages/Components/AddSubCategory.jsx'
import ViewSubCategory from './pages/Components/ViewSubCategory.jsx'
import ProductDetails from './pages/Components/ProductDetails.jsx'
import ProductItems from './pages/Components/ProductItems.jsx'
import StoryDetails from './pages/Components/StoryDetails.jsx'
import StoryView from './pages/Components/StoryView.jsx'
import SliderDetails from './pages/Components/SliderDetails.jsx'
import SliderView from './pages/Components/SliderView.jsx'

let routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'/home',
    element:<Home/>,
    children:[
      {
        path:'/home',
        element:<Dashboard/>
      },
      {
        path:'/home/profile',
        element:<Profile/>
      },
      {
        path:'/home/color/add-color',
        element:<AddColor/>
      },
      {
        path:'/home/color/view-color',
        element:<ViewColor/>
      },
      {
        path:'/home/size/size-details',
        element:<SizeDetails/>
      },
      {
        path:'/home/size/view-size',
        element:<ViewSize/>
      },
      {
        path:'/home/parent-category/add-category',
        element:<AddCategory/>
      },
      {
        path:'/home/parent-category/view-category',
        element:<ViewCategory/>
      },
      {
        path:'/home/sub-category/add-sub-category',
        element:<AddSubCategory/>
      },
      {
        path:'/home/sub-category/view-sub-category',
        element:<ViewSubCategory/>
      },
      {
        path:'/home/product/product-details',
        element:<ProductDetails/>
      },
      {
        path:'/home/product/product-items',
        element:<ProductItems/>
      },
      {
        path:'/home/story/story-details',
        element:<StoryDetails/>
      },
      {
        path:'/home/story/story-view',
        element:<StoryView/>
      },
      {
        path:'/home/slider/slider-details',
        element:<SliderDetails/>
      },
      {
        path:'/home/slider/slider-view',
        element:<SliderView/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
