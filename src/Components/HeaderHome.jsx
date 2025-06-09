import { useState, useEffect } from 'react'
import ordenes from '/ordenes.png'
import direccion from '/direccion.png'
import metodos from '/metodos.png'
import contactenos from '/contactenos.png'
import perfil from '/perfil.png'
import CarritoCompra from "./CarritoCompra"
import { Link } from 'react-router-dom'
import Perfil from './Perfil'
import Direcciones from './Direcciones'
import MetodoPago from './MetodoPago'
import MisOrdenes from './MisOrdenes'

function HeaderHome() {
    
const [carritoAbierto, setCarritoAbierto] = useState(false)
const [carritoItems, setCarritoItems] = useState([])
const [mostrarPerfil, setMostrarPerfil] = useState(false)
const [mostrarDireccion, setMostrarDireccion] = useState(false)
const [mostrarMetodoPago, setMostrarMetodoPago] = useState(false)
const [mostrarOrdenes, setMostrarOrdenes] = useState(false)

useEffect(() => {
        const actualizarCarrito = () => {
            const carritoGuardado = JSON.parse(localStorage.getItem("carrito") || "[]");
            setCarritoItems(carritoGuardado);
        };
        // Actualiza al abrir/cerrar el modal
        actualizarCarrito();
        
        window.addEventListener('carritoActualizadoTarjeta', actualizarCarrito);
        
        
        // Escucha cambios en el carrito desde cualquier parte de la app
        window.addEventListener("carritoActualizado", actualizarCarrito);
        window.addEventListener("storage", actualizarCarrito);
        
        return () => {
            window.removeEventListener("carritoActualizadoTarjeta", actualizarCarrito);
            window.removeEventListener("carritoActualizado", actualizarCarrito);
            window.removeEventListener("storage", actualizarCarrito);
        };
      }, [carritoAbierto]);
      
      const toggleCarrito = () => {
          setCarritoAbierto(!carritoAbierto)}

    return(
        <section className="header">
            <div className="logo-header">
                <h1>Nutri</h1>
                <img src="public/go.png" alt=""/>
            </div>
            <nav className='nav-header'>

                <button className='boton-header-HomeUser'
                onClick={() => setMostrarOrdenes(true)}><img src={ordenes} alt="" />
                 Mis Ordenes
                 </button>{mostrarOrdenes &&(
                    <MisOrdenes onClose={() => setMostrarOrdenes(false)}/>
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

                {/* Botón del carrito */}
                <div className="carrito-icono" onClick={toggleCarrito} style={{ cursor: "pointer" }} to="/Carrito">
                <img src="./carrito.png" alt="" /> Carrito
                {carritoItems.length > 0 && (
                <span className="carrito-contador">
                {carritoItems.reduce((acc, item) => acc + item.cantidad, 0)}
                </span>
          )}
        </div>
            </nav>

            {/* Componente CarritoCompra */}
            <CarritoCompra 
                abierto={carritoAbierto} 
                cerrado={() => setCarritoAbierto(false)}
            />
        </section>
    )
}


export default HeaderHome
