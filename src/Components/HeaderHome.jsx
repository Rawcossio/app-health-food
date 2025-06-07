import ordenes from '/ordenes.png'
import direccion from '/direccion.png'
import metodos from '/metodos.png'
import contactenos from '/contactenos.png'
import perfil from '/perfil.png'
import { Link } from 'react-router-dom'
import Perfil from './Perfil'
import { useState } from 'react'
import Direcciones from './Direcciones'
import MetodoPago from './MetodoPago'
import MisOrdenes from './MisOrdenes'
function HeaderHome() {

    const [mostrarPerfil, setMostrarPerfil] = useState(false)
    const [mostrarDireccion, setMostrarDireccion] = useState(false)
    const [mostrarMetodoPago, setMostrarMetodoPago] = useState(false)
    const [mostrarOrdenes, setMostrarOrdenes] = useState(false)
   

    return(
        <section className="header">
            <div className="logo-header">
            <h1>Nutri</h1>
            <img src="public/go.png" alt=""/>
            </div>
            <nav className='nav-header'>
                <button className='boton-header-HomeUser'
                onClick={() => setMostrarOrdenes(true)}><img src={ordenes} alt="ordenes" />
                 Mis Ordenes
                 </button>{mostrarOrdenes &&(
                    <MisOrdenes onClose={() => setMostrarDireccion(false)}/>
                 )}

                <button className='boton-header-HomeUser' 
                onClick={() => setMostrarDireccion(true)}><img src={direccion} alt="" /> 
                Dirección de envio
                </button>{mostrarDireccion &&(
                    <Direcciones onClose={() => setMostrarDireccion(false)} />
                )}
                <button className='boton-header-HomeUser' 
                onClick={() => setMostrarMetodoPago(true)}><img src={metodos} alt="" /> 
                Metodos de pago
                </button>{mostrarMetodoPago &&(
                    <MetodoPago onClose={()=> setMostrarMetodoPago(false)}/>
                )}

                <Link to="https://web.whatsapp.com/"><img src={contactenos} alt="" /> Contactenos</Link>

                <button className='boton-header-HomeUser'
                    onClick={() => setMostrarPerfil(true)}><img src={perfil} alt="" />
                    Mi perfil
                </button> {mostrarPerfil && (
                    <Perfil onClose={() => setMostrarPerfil(false)} />
                )}
            </nav>
        </section>
    )
    
}
export default HeaderHome