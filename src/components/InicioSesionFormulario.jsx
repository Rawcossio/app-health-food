function InicioSesionFormulario() {

    return(
        <section className="formulario-conteendor">
            <form>
                <h1>Inicio de Sesión</h1>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" placeholder="Ingresa tu Nombre" />
                <label htmlFor="telefono">Teléfono:</label>
                <input type="number" id="telefono" placeholder="Ingresa tu teléfono"  />
                <button type="submit">Iniciar Sesión</button>
                <p>
                ¿Olvidaste tu contraseña? <a href="#">Recupérala</a>
                ¿No tienes una cuenta? <a href="#">Regístrate</a>
                </p>
            </form>

        </section>
    )
}

export default InicioSesionFormulario