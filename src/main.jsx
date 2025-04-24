import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InicioSesion from './pages/InicioSesion'
import HealthFood from './pages/HealthFood'
/*import './pages/index.css'*/
import'./pages/InicioSesion.css'
/*import Registro from './pages/Registro'*/
/*import './pages/Registro.css'*/
import Restaurante from './pages/Restaurante'
import './pages/Restaurante.css'
import MetodoPago from './pages/MetodoPago'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MetodoPago/> 
   </StrictMode>, 
)
