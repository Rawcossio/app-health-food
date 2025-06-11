import './HeaderRestaurante.css';
import { useEffect, useState } from 'react';

const HeaderRestaurante = () => {
  const [nombreRestaurante, setNombreRestaurante] = useState('');

  useEffect(() => {
    const restauranteGuardado = localStorage.getItem("restaurante");

    if (restauranteGuardado) {
      const datosRestaurante = JSON.parse(restauranteGuardado);
      setNombreRestaurante(datosRestaurante.nombre);
      console.log("🎉 Restaurante cargado:", datosRestaurante);
    } else {
      console.warn("⚠️ No hay datos de restaurante en localStorage");
    }
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("restaurante");
    window.location.href = "/";
  };

  return (
    <header className="header">
      <div className="logo-header">
        <h1 className="titulo">Nutri</h1>
        <img src="public/go.png" alt="Logo" />
      </div>

      <p className="ubicacion">
        <strong>Panel de:</strong> {nombreRestaurante || "Restaurante misterioso"} 👨‍🍳
      </p>

      <button className="boton-cerrar" onClick={cerrarSesion}>
        <img src="./public/usuario.png" alt="Cerrar sesión" />
        Cerrar sesión
      </button>
    </header>
  );
};

export default HeaderRestaurante;