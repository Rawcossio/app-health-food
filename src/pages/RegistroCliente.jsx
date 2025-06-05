import { Link } from "react-router-dom"
import HeaderRegistro from "../Components/HeaderRegistro"
import "./RegistroCliente.css"

const RegistroCliente =() =>{

    return(
        <section className="contenedor">

            <div>
                <HeaderRegistro/>
            </div>

            <main className="registro-container">
      <section className="registro-form">
        <h2>Crear Cuenta</h2>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" placeholder="Ingrese tu nombre" required />
          
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" placeholder="Ingrese su Teléfono" required />
          
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" placeholder="Ingrese su Correo Electrónico" required />
          
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" placeholder="Ingrese una Contraseña" required />
          
          <small>
            &#9679; La contraseña debe tener entre 6 a 10 caracteres. <br />
            &#9679; Debe incluir una minúscula, una mayúscula y caracteres especiales.
          </small>
          
          <label htmlFor="confirm-password">Confirmar Contraseña:</label>
          <input type="password" id="confirm-password" placeholder="Ingrese una Contraseña" required />
          
          <button type="submit" className="btn-registrarse">Registrarse</button>
        </form>
        
        <p>Ya tengo una cuenta <Link className="link-login" to="/InicioSesion">Inicio de Sesión</Link></p>
      </section>
    </main>
        </section>
    )
}
export default RegistroCliente