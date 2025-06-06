import ordenes from '/ordenes.png'
import direccion from '/direccion.png'
import metodos from '/metodos.png'
import contactenos from '/contactenos.png'
import perfil from '/perfil.png'
import { Link } from 'react-router-dom'
function HeaderHome() {

   

    return(
        <section className="header">
            <div className="logo-header">
            <h1>Nutri</h1>
            <img src="public/go.png" alt=""/>
            </div>
            <nav className='nav-header'>
                <Link to="/Orden"><img src={ordenes} alt="ordenes" /> Mis Ordenes</Link>
                <Link to="/direccion"><img src={direccion} alt="" /> Dirección de envio</Link>
                <Link to="/metodopago"><img src={metodos} alt="" /> Metodos de pago</Link>
                <Link to="https://web.whatsapp.com/"><img src={contactenos} alt="" /> Contactenos</Link>
                <Link to="/Perfil"><img src={perfil} alt="" /> Mi perfil</Link>
            </nav>
        </section>
    )
    
}
export default HeaderHome