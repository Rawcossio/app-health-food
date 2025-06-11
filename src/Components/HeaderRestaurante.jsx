import './HeaderRestaurante.css';
import { useEffect, useState } from 'react';

const HeaderRestaurante = () => {
  const [restaurante, setRestaurante] = useState(null);
  const [error, setError] = useState(null);

  const idRestaurante = localStorage.getItem("id_restaurante");

  useEffect(() => {
    if (!idRestaurante) {
      setError("No hay restaurante logueado");
      return;
    }

    fetch(`https://app-health-food-back-2.onrender.com/tienda/${idRestaurante}`)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo obtener la información del restaurante");
        return res.json();
      })
      .then((data) => {
        console.log("📦 Datos del restaurante:", data);
        setRestaurante(data);
      })
      .catch((err) => {
        console.error("❌ Error:", err);
        setError(err.message);
      });
  }, [idRestaurante]);

  const cerrarSesion = () => {
    localStorage.removeItem("id_restaurante");
    window.location.href = "/";
  };

  return (
    <header className="header">
      <div className="logo-header">
        <h1 className="titulo">Nutri</h1>
        <img src="/go.png" alt="Logo" />
      </div>

      <h2 className="ubicacion">
        <h2>Panel Admin:</h2>
        <h2> {restaurante ? restaurante.nombre : 'Cargando...'} 👨‍🍳 </h2> 
      </h2>

      {error && <p className="error">{error}</p>}

      <button className="boton-cerrar" onClick={cerrarSesion}>
        <img src="/usuario.png" alt="Cerrar sesión" />
        Cerrar sesión
      </button>
    </header>
  );
};

export default HeaderRestaurante;