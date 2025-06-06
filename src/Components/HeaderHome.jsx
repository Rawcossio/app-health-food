import ordenes from '/ordenes.png'
import direccion from '/direccion.png'
import metodos from '/metodos.png'
import contactenos from '/contactenos.png'
import perfil from '/perfil.png'
import carrito from '/carrito.png'
function HeaderHome() {

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
            </nav>
            <img className='carrito_compras' src={carrito} alt="" />
        </section>
    )
    
}
export default HeaderHome