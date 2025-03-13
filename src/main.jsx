import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/index.css'
import HealthFood from './pages/HealthFood'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HealthFood/>
  </StrictMode>,
)
