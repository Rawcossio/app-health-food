

const InicioClienteFormulario = () =>{
    return (
    
      <div className="login-content">
        <div className="login-form">
          <h2>Inicio de Sesión</h2>
          <input type="text" placeholder="Ingresa tu nombre" />
          <input type="text" placeholder="Ingresa tu telefono" />
          <button className="login-btn">Iniciar Sesión</button>
          <div className="extra-links">
            <span>¿Olvidaste tu contraseña?</span>
            <span>¿No tienes una cuenta? <a href="#">Regístrate</a></span>
          </div>
        </div>
      </div>
    
    )
  
}

export default InicioClienteFormulario