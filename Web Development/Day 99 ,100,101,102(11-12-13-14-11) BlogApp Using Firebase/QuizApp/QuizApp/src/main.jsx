import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PlayQuiz from './pages/PlayQuiz.jsx'
import AddQuiz from './pages/AddQuiz.jsx'

let router=createBrowserRouter([
  {
    path:'/',
    element:<PlayQuiz/>
  },
  {
    path:'/addQuiz',
    element:<AddQuiz/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
