

const Navbar = () => {

    return (
        <header>
            <section className="logo">
                <h1>Nutri</h1>
                <img src="public\go.png" alt="logo" />
            </section>

            <div className="menu">
                <a href=""><span>📦 Mis Órdenes</span> </a>
                <a href=""><span>📍 Dirección de envío</span></a>
                <a href=""><span>💳 Métodos de Pago</span></a>
                <a href=""><span>🎧 Contáctenos</span></a>
                <a href=""><span>👤 Mi Perfil</span></a>
            </div>
        </header>

    )
}    
export default Navbar;