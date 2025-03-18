const RegistroFormulario =() =>{
    return(
        <section className="registro-contenedor">
            <h2>Crear Cuenta</h2>

            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" placeholder="Ingrese tu nombre" required />

                <label htmlFor="telefono">Teléfono:</label>
                <input type="number" id="telefono" placeholder="Ingrese su Teléfono" required />

                <label htmlFor="email">Correo Electronico:</label>
                <input type="email" id="email" placeholder="Ingrese su correo electronico" required />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" placeholder="Ingresa tu contraseña" />

                <small>
                    &#9679;  La contraseña debe tener entre 6 a 10 caracteres. <br />
                    &#9679; Debe incluir una minúscula, una mayúscula y caracteres especiales.
                </small>

                <label htmlFor="confirmar-password">Confirmar Contraseña:</label>
                <input type="password" id="confirmar-password" placeholder="Ingrese otra vez la contraseña Contraseña" required />

                <button type="submit" className="boton-registrarse">registrarse</button>

                <p>Ya tengo una cuenta <a href="#">Inicio de Sesión</a></p>
            </form>
        </section>
    )
}

export default RegistroFormulario