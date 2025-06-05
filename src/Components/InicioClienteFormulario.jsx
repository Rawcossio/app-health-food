import { useState } from "react"

import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"


 

  
const InicioClienteFormulario = () =>{

 

    const [form, setForm]= useState({ nombre: '', telefono: '' })
    const navigate = useNavigate()

     const usuarios ={
    nombre: 'Juan',
    telefono: '3008244233',
  }

    const handleChange = (e) => {
      const {name, value} = e.target
      setForm(prevForm => ({ ...prevForm, [name]:value}))
    }

    const handleLogin =(e) =>{
      e.preventDefault();

      if (form.nombre === usuarios.nombre &&
          form.telefono === usuarios.telefono
      ) {
        localStorage.setItem('isAuthenticated', 'true')
         localStorage.setItem('nombre', form.nombre);
        Swal.fire('¡Bienvenido!', 'Inicio de sesión exitoso', 'success');
        navigate('/HomeUser')
      } else {
      Swal.fire('Error', 'Credenciales inválidas', 'error');
    }
    }
  


 
    return (
    
      <div className="login-content">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Inicio de Sesión</h2>
          <input type="text" name="nombre" placeholder="Ingresa tu nombre" onChange={handleChange} required />
          <input type="text" name="telefono" placeholder="Ingresa tu telefono" onChange={handleChange} required />
          <button type="submit" className="login-btn">Iniciar Sesión</button>
          <div className="extra-links">
            <span>¿Olvidaste tu contraseña?</span>
            <span>¿No tienes una cuenta? <Link to="/RegistroCliente">Regístrate</Link></span>
          </div>
        </form>
        
      </div>
    
    )
  
}

export default InicioClienteFormulario