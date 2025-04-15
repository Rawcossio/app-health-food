import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/index.css'
import HealthFood from './pages/HealthFood'
import Pago from './pages/Pago'
import Carrito from './pages/Carrito'
import VistaProducto from './pages/VistaProducto'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pago/>
  </StrictMode>,
)
