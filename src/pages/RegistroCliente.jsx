import { Await, Link, useNavigate } from "react-router-dom"
import HeaderRegistro from "../Components/HeaderRegistro"
import "./RegistroCliente.css"
import { useState } from "react"

import Swal from "sweetalert2"

const RegistroCliente = () => {

    const [mostrarContraseña, setMostrarContraseña] = useState(false)
    const navegar = useNavigate()

    const [formDatos, setFormDatos] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        contraseña: '',
        confirmarContraseña: ''
    })


    const manejarCambio = (e) => {
        setFormDatos({
            ...formDatos,
            [e.target.name]: e.target.value
        })
    }

    const manejarEnvio = async (e) => {
        e.preventDefault()

        //Validación básica
        if (formDatos.contraseña != formDatos.confirmarContraseña) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las Contraseñas no coinciden'
            })
            return
        }
        
        

        //se cra objeto usuario
        const nuevoUsuario = {
            nombre: formDatos.nombre,
            telefono: formDatos.telefono,
            correo: formDatos.correo,
            contraseña: formDatos.contraseña,
            confirmarContraseña: formDatos.confirmarContraseña
        }

        try {
            const respuesta = await fetch('http://localhost:300/usuarios', {
                method: 'POST',
                Headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoUsuario)
            })

            if (respuesta.ok) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Registrado!',
                    text: 'Usuario registrado con exito'
                }).then(() => {
                    navegar('/InicioSesion')
                })

                //Limpiar Formulario
                setFormDatos({
                    nombre: '',
                    telefono: '',
                    correo: '',
                    contraseña: '',
                    confirmarContraseña: ''
                })
            } else {
                throw new error('Error al registrar')
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al registrar el usuario'
            })
        }
    }


    return (
        <section className="contenedor">

            <div>
                <HeaderRegistro />
            </div>

            <main className="registro-container">
                <section className="registro-form">
                    <h2>Crear Cuenta</h2>
                    <form onSubmit={manejarEnvio}>
                        <label htmlFor="nombre">Nombre:</label>

                        <input type="text" id="nombre"
                            name="nombre"
                            placeholder="Ingrese tu nombre"
                            value={formDatos.nombre}
                            onChange={manejarCambio}
                            required
                        />

                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="tel" id="telefono"
                            name="telefono"
                            placeholder="Ingrese su Teléfono"
                            value={formDatos.telefono}
                            onChange={manejarCambio} required
                        />

                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email"
                            name="correo"
                            placeholder="Ingrese su Correo Electrónico"
                            value={formDatos.correo}
                            onChange={manejarCambio}
                            required
                        />

                        <label htmlFor="password">Contraseña:</label>
                        <input type={mostrarContraseña ? 'text' : 'password'} id="password"
                            name="contraseña"
                            placeholder="Ingrese una Contraseña"
                            value={formDatos.contraseña}
                            onChange={manejarCambio}
                            required
                        />

                        <small>
                            &#9679; La contraseña debe tener entre 6 a 10 caracteres. <br />
                            &#9679; Debe incluir una minúscula, una mayúscula y caracteres especiales.
                        </small>

                        <label htmlFor="confirm-password">Confirmar Contraseña:</label>
                        <input type={mostrarContraseña ? 'text' : 'password'} id="confirm-password"
                            name="confirmarContraseña"
                            placeholder="Ingrese una Contraseña"
                            value={formDatos.confirmarContraseña}
                            onChange={manejarCambio}
                            required
                        />
                        <button type="button" 
                        className="btn-vista"
                        onClick={() => setMostrarContraseña(!mostrarContraseña)}>
                            {mostrarContraseña ? 'Ocultar contraseñas' : 'Mostrar contraseñas'}
                        </button>
                        <button type="submit" className="btn-registrarse">Registrarse</button>
                        
                    </form>

                    <p>Ya tengo una cuenta <Link className="link-login" to="/InicioSesion">Inicio de Sesión</Link></p>
                </section>
            </main>
        </section>
    )

const RegistroCliente = () => {

  const  [formulario, setFormulario] = useState({
    nombre:"",
    correoElectronico:"",
    contrasena:""
  }  )

  return (
    <section className="contenedor">

      <div>
        <HeaderRegistro />
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
