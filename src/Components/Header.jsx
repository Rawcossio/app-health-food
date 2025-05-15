import { Link } from "react-router-dom"

 function Header() {

    return(
        <section className="header">
            <div className="logo-header">
            <h1 className="titulo">Nutri</h1>
            <img src="public/go.png" alt=""/>
            </div>
            <p className="ubicacion"><strong>Entregar en:</strong> Ubicación 📍<strong> Medellin, Antioquia</strong></p>
            <div className="inicio-sesion">
            <input type="search"   placeholder=" 🔍 Buscar Comida"/>
            <Link className="boton" to="/Roles"><img src="./public/usuario.png" alt=""/>Iniciar Sesión</Link>
            </div>
            <Link className="registro" to="/RolesRegistro"> <img src="./public/usuario.png" alt="" to="" />Registrarse</Link>
        </section>
    )
    
}
export default Header