import { useState } from "react";


import { data, Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

  
const InicioClienteFormulario = () =>{

  const navigate = useNavigate()

  const [credenciales, setCredenciales] = useState({
    correo: '',
    contraseña: ''
  })

  const manejarCambio =(e) => {
    setCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value
    })
  }

  const manejarInicioSesion = async (e) => {
    e.preventDefault()

    try{
      const respuesta = await fetch(
        `http://localhost:300/usuarios?correo=${credenciales.correo}&contraseña=${credenciales.contraseña}`
      )
      const usuarios = await respuesta.json()
      if (usuarios.length > 0) {
        const usuario = usuarios[0]
        //Crear token simulado
        const token = btoa(`${usuario.correo}:${Date.now()}`)

        //Guardar token y datos del usuario
        localStorage.setItem('token', token)
        localStorage.setItem('usuario', JSON.stringify(usuario))

        //Mostrar exito y redirigir
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: `Bienvenido, ${usuario.nombre}`
        }).then(() =>{
          navigate('/HomeUser')
        })
      }else{
        //credenciales incorrectas
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas',
          text: 'Correo o Contraseña Incorrectos'
        })
      }

    }catch(error){
      console.error('Error al iniciar sesión:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error del Servidor',
        text: 'No se pudo conectar al servidor'
      })
    }
  }

    return (
    
      <div className="login-content">
        <form onSubmit={manejarInicioSesion} className="login-form">
          <h2>Inicio de Sesión</h2>

          <input type="email"
            name="correo"
            placeholder="Ingresa tu correo electronico"
            value={credenciales.correo}
            onChange={manejarCambio}
            required
          />

          <input type="password"
            name="contraseña"
            placeholder="Ingresa tu contraseña"
            value={credenciales.contraseña}
            onChange={manejarCambio}
            required
          />

          <button type="submit" className="login-btn">Iniciar Sesión</button>
          <div className="extra-links">
            <span>¿Olvidaste tu contraseña?</span>
            <span>¿No tienes una cuenta? <Link to="/RegistroCliente">Regístrate</Link></span>
          </div>
        </form>
        
      </div>
    
    )
  
}

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const InicioClienteFormulario = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "" });
  const navigate = useNavigate();

  const usuarios = {
    nombre: "Juan",
    telefono: "3008244233",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      form.nombre === usuarios.nombre &&
      form.telefono === usuarios.telefono
    ) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("nombre", form.nombre);
      Swal.fire("¡Bienvenido!", "Inicio de sesión exitoso", "success");
      navigate("/HomeUser");
    } else {
      Swal.fire("Error", "Credenciales inválidas", "error");
    }
  };

  return (
    <div className="login-content">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Inicio de Sesión</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telefono"
          placeholder="Ingresa tu telefono"
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-btn">
          Iniciar Sesión
        </button>
        <div className="extra-links">
          <span>¿Olvidaste tu contraseña?</span>
          <span>
            ¿No tienes una cuenta? <Link to="/RegistroCliente">Regístrate</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default InicioClienteFormulario;
