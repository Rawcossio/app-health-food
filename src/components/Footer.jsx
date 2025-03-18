function Footer() {
  return (
    <section className="contenedor-footer">
      <div className="ciudades-principales">
        <h3>Nuestras principales ciudades</h3>

        <div className="lista-ciudades">
          <ul>
            <li>San Francisco</li>
            <li>Miami</li>
            <li>San Diego</li>
            <li>East Bay</li>
            <li>Long Beach</li>
          </ul>

          <ul>
            <li>Los Ángeles</li>
            <li>Washington DC</li>
            <li>Seattle</li>
            <li>Portland</li>
            <li>Nashville</li>
          </ul>
          <ul>
            <li>New York</li>
            <li>Orange County</li>
            <li>Atlanta</li>
            <li>Charlotte</li>
            <li>Denver</li>
          </ul>
          <ul>
            <li>Chicago</li>
            <li>Phoenix</li>
            <li>Las Vegas</li>
            <li>Sacramento</li>
            <li>Oklahoma City</li>
          </ul>
          <ul>
            <li>Columbus</li>
            <li>Nuevo México</li>
            <li>Albuquerque</li>
            <li>Sacramento</li>
            <li>New Orleans</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="secciones-footer">
      <div>
          <h4>Empresa</h4>
          <ul>
            <li>Sobre nosotros</li>
            <li>Equipo</li>
            <li>Trabajos</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li>Ayuda y soporte</li>
            <li>Asóciate con nosotros</li>
            <li>Viaja con nosotros</li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li>Términos y condiciones</li>
            <li>Reembolsos y cancelaciones</li>
            <li>Política de privacidad</li>
            <li>Política de cookies</li>
          </ul>
        </div>
        <div className="suscribirse">
          <h4>SÍGUENOS</h4>
          <div className="redes-sociales">
            <span>📷</span>
            <span>🐦</span>
            <span>📘</span>
          </div>
          <h4>Recibe ofertas exclusivas en tu correo</h4>
          <div className="caja-suscripcion">
            <input type="email" placeholder="Ingresa tu correo" />
            <button>Suscribirse</button>
          </div>
        </div>
      </div>

      <div className="footer-final">
        <p>Todos los derechos reservados &copy; NutriGo, 2025</p>
        <p>Hecho con ❤️ por NutriGo</p>
      </div>
    </section>
  );
}

export default Footer;
