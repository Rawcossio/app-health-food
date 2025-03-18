function Footer() {
  return (
    <div className="footer-sections">
      <section>
        <h3>Nuestras Ciudades Principales</h3>
        <ul>
          <li>San Francisco</li>
          <li>Miami</li>
          <li>Los Ángeles</li>
          <li>Washington DC</li>
          <li>Nueva York</li>
          <li>Chicago</li>
          <li>Phoenix</li>
          <li>Las Vegas</li>
        </ul>
      </section>

      <section>
          <h3>Compañía</h3>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Equipo</a></li>
            <li><a href="#">Carreras</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </section>
        <section>
          <h3>Contacto</h3>
          <ul>
            <li><a href="#">Ayuda & Soporte</a></li>
            <li><a href="#">Asóciate con nosotros</a></li>
            <li><a href="#">Viaja con nosotros</a></li>
          </ul>
        </section>
        <section>
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Términos & Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Política de Cookies</a></li>
          </ul>
        </section>
        <section>
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#"><i className="icon-instagram"></i> Instagram</a>
            <a href="#"><i className="icon-facebook"></i> Facebook</a>
            <a href="#"><i className="icon-twitter"></i> Twitter</a>
          </div>
        </section>

        <div className="footer-suscripcion">
        <p>Recibe ofertas exclusivas en tu correo:</p>
        <form>
          <input type="email" placeholder="Introduce tu email" />
          <button type="submit">Suscribirse</button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>© Tu Compañía, 2021. Todos los derechos reservados.</p>
        <p>Hecho con ♥ por Themewagon</p>
      </div>
    </div>

    
  );
}

export default Footer;
