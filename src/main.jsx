import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/index.css'
import HealthFood from './pages/HealthFood'
import DetalleProducto from './components/DetalleProducto'
import VistaO from './pages/VistaO'
import Carrito from './pages/Carrito'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Carrito />
  </StrictMode>,
)
