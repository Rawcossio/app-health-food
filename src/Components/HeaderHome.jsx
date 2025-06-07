import { useState } from 'react'
import ordenes from '/ordenes.png'
import direccion from '/direccion.png'
import metodos from '/metodos.png'
import contactenos from '/contactenos.png'
import perfil from '/perfil.png'
import CarritoCompra from "./CarritoCompra"
import { Link } from 'react-router-dom'

function HeaderHome() {
    const [carritoAbierto, setCarritoAbierto] = useState(false)

    const toggleCarrito = () => {
        setCarritoAbierto(!carritoAbierto)
    }

   

    return(
        <section className="header">
            <div className="logo-header">
                <h1>Nutri</h1>
                <img src="public/go.png" alt=""/>
            </div>
            <nav className='nav-header'>
                <a href=""><img src={ordenes} alt="ordenes" /> Mis Ordenes</a>
                <a href=""><img src={direccion} alt="" /> Dirección de envio</a>
                <a href=""><img src={metodos} alt="" /> Metodos de pago</a>
                <a href=""><img src={contactenos} alt="" /> Contactenos</a>
                <a href=""><img src={perfil} alt="" /> Mi perfil</a>
                {/* Botón del carrito */}
                <div className="carrito-icono" onClick={toggleCarrito}>
                    <img src="./carrito.png" alt="" /> Carrito
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
