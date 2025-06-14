import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CarritoCompra from "./CarritoCompra";
import { use } from "react";

function Header() {
  const [carritoItems, setCarritoItems] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false); 

  useEffect(() => {
    const actualizarCarrito = () => {
      const carritoGuardado = JSON.parse(localStorage.getItem("carrito") || "[]");
      setCarritoItems(carritoGuardado);
    };
    // Actualiza al abrir/cerrar el modal
    actualizarCarrito();

    window.addEventListener('carritoActualizadoTarjeta', actualizarCarrito);
  

    // Escucha cambios en el carrito desde cualquier parte de la app
    window.addEventListener("carritoActualizado", actualizarCarrito);
    window.addEventListener("storage", actualizarCarrito);

    return () => {
      window.removeEventListener("carritoActualizadoTarjeta", actualizarCarrito);
      window.removeEventListener("carritoActualizado", actualizarCarrito);
      window.removeEventListener("storage", actualizarCarrito);
    };
  }, [carritoAbierto]);


  const toggleCarrito = () => {
    setCarritoAbierto(!carritoAbierto);
  };

    useEffect(() => {
    const handleAbrirCarrito = () => setCarritoAbierto(true);
    window.addEventListener("abrirCarrito", handleAbrirCarrito);
    return () => window.removeEventListener("abrirCarrito", handleAbrirCarrito);
  }, []);

  return (
    <>
      <section className="header">
        <div className="logo-header">
          <h1 className="titulo">Nutri</h1>
          <img src="public/go.png" alt="Logo" />
        </div>

        <p className="ubicacion">
          <strong>Entregar en:</strong> Ubicación 📍<strong> Medellín, Antioquia</strong>
        </p>

        <div className="inicio-sesion">
          <input type="search" placeholder=" 🔍 Buscar Comida" />
          <Link className="boton" to="/Roles">
            <img src="./public/usuario.png" alt="Usuario" />
            Iniciar Sesión
          </Link>
        </div>

        <Link className="registro" to="/RolesRegistro">
          <img src="./public/usuario.png" alt="Registrarse" />
          Registrarse
        </Link>

        <div className="carrito-icono" onClick={toggleCarrito} style={{ cursor: "pointer" }} to="/Carrito">
          <img src="./carrito.png" alt="" /> Carrito
          {carritoItems.length > 0 && (
            <span className="carrito-contador">
              {carritoItems.reduce((acc, item) => acc + item.cantidad, 0)}
            </span>
          )}
        </div>
      </section>
      {/* MODAL AQUÍ, fuera del flujo del header */}
      {carritoAbierto && (
        <CarritoCompra
          abierto={carritoAbierto}
          cerrado={() => setCarritoAbierto(false)}
        />
      )}
    </>
  );
}

export default Header;
