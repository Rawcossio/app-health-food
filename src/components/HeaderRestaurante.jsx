
const HeaderRestaurante =()=>{
    return (
      <nav className="header-restaurante">
        <div>
          <span>Nutri</span>
          <img src="/public/go.png" alt="logo" />
        </div>

        <ul>
          <li>
            <a href="#">📦 Mis Órdenes</a>
          </li>
          <li>
            <a href="#">📍 Dirección de envío</a>
          </li>
          <li>
            <a href="#">💳 Métodos de Pago</a>
          </li>
          <li>
            <a href="#">📞 Contáctenos</a>
          </li>
          <li>
            <a href="#">👤 Mi Perfil</a>
          </li>
        </ul>
      </nav>
    );
}

export default HeaderRestaurante