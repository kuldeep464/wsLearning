import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterContext from './Context/CounterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    

    <CounterContext>
          <App />
    </CounterContext>


    
  </StrictMode>,
)
