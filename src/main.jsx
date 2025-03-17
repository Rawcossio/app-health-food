import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InicioSesion from './pages/InicioSesion'
import HealthFood from './pages/HealthFood'
import './pages/index.css'
import'./pages/InicioSesion.css'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InicioSesion />
   </StrictMode>, 
)
