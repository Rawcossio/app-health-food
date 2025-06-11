import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import google from '/google.png';

const InicioSesion = () => {
  const [correoElectronico, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const redireccion = useNavigate();

  const handleLogin = async () => {
    console.log("Intentando iniciar sesión con:", correoElectronico);

    try {
      const respuesta = await fetch('https://app-health-food-back-2.onrender.com/tienda/login-tienda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correoElectronico: correoElectronico.toLowerCase(), // por si acaso
          contrasena: contrasena,
        }),
      });

      const texto = await respuesta.text();

      if (respuesta.status === 200) {
        const data = JSON.parse(texto);
        console.log('✅ Login exitoso:', data);

        localStorage.setItem('tiendaAutenticada', JSON.stringify(data));
        localStorage.setItem('id_restaurante', data.id_restaurante);

        redireccion('/admin-restaurante');
      } else if (respuesta.status === 401) {
        alert('❌ Contraseña incorrecta');
      } else if (respuesta.status === 404) {
        alert('❌ Correo no registrado');
      } else {
        console.warn('⚠️ Error desconocido:', texto);
        alert('⚠️ Error desconocido al iniciar sesión');
      }
    } catch (error) {
      console.error('💥 Error en el login:', error);
      alert('💥 No se pudo conectar al servidor');
    }
  };

  return (
    <form className='formulario' onSubmit={(e) => e.preventDefault()}>
      <h2>Hola! Bienvenido</h2>

      <div>
        <label>Correo electrónico</label>
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
          value={correoElectronico}
        />
      </div>

      <div>
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          onChange={(e) => setContrasena(e.target.value)}
          value={contrasena}
        />
      </div>

      <div>
        <button type="button" onClick={handleLogin}>Iniciar Sesión</button>
        <p>¿Aún no tienes cuenta? <strong>Registrarse</strong></p>
      </div>

      <h2>Ó</h2>
      <button className='google'>
        <img src={google} alt="Logo Google" />
        Inicia Sesión con Google
      </button>
    </form>
  );
};

export default InicioSesion;
