 function Header() {

    return(
        <header className="header">
            <div className="logo-header">
            <h1>Nutri</h1>
            <img src="public/go.png" alt=""/>
            </div>
            <p className="ubicacion"><strong>Entregar en:</strong> Ubicación 📍<strong> Medellin, Antioquia</strong></p>
            <div className="inicio-sesion">
            <input type="search"   placeholder=" 🔍 Buscar Comida"/>
            <button><img src="./public/usuario.png" alt="" />Iniciar Sesión</button>
            </div>
            <button className="registro"> <img src="./public/usuario.png" alt="" />Registrarse</button>
        </header>
    )
    
}
export default Header