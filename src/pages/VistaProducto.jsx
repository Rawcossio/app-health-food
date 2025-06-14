import { useParams, Link, useNavigate } from "react-router-dom"; // <-- Agrega useNavigate
import { useEffect, useState } from "react";
import CarritoCompra from "../Components/CarritoCompra";
import "./VistaProducto.css";

function VistaProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const navigate = useNavigate(); // <-- Hook para navegar

  useEffect(() => {
    fetch(`https://app-health-food-back-2.onrender.com/producto/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;

  if (!producto) {
    return (
      <div className="vista error-page">
        <div className="error-container">
          <h2>Producto no encontrado</h2>
          <Link to="/" className="error-link">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const incrementarCantidad = () => setCantidad(cantidad + 1);

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    } else {
      // Si la cantidad llega a 1 y se intenta bajar, cerrar el modal si existe
      if (window && window.closeModalProducto) {
        window.closeModalProducto();
      }
    }
  };

        const agregarAlCarrito = () => {
          const carritoActual = JSON.parse(localStorage.getItem("carrito") || "[]");
          const existe = carritoActual.find(item => item.id_producto === producto.id_producto);
        
          let nuevoCarrito;
          if (existe) {
            nuevoCarrito = carritoActual.map(item =>
              item.id_producto === producto.id_producto
                ? { ...item, cantidad: item.cantidad + cantidad }
                : item
            );
          } else {
            nuevoCarrito = [
              ...carritoActual,
              {
                id_producto: producto.id_producto,
                nombre: producto.nombre,
                precio: producto.precio,
                imagenUrl: producto.imagenUrl,
                cantidad: cantidad,
              },
            ];
          }
          localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
          window.dispatchEvent(new Event("carritoActualizado"));
          setCarritoAbierto(true); // <--- Abre el modal localmente
        };

  return (
    <section className="vista">
      <div className="vista__contenido">
        <header className="vista__header">
          <div className="vista__logo-nutri">
            <h1>Nutri</h1>
            <img src="/go.png" alt="Nutri Logo" className="vista__logo" />
          </div>
          <div className="vista__restaurante-info">
            <img src="/restaurante-logo.png" alt="Restaurante" className="vista__logo-restaurante" />
            <div>
              <h3>Medellín</h3>
              <p>⭐ 4.5 (200 reseñas)</p>
            </div>
          </div>
          {/* Botón modo equis */}
          <button
            className="vista__close-btn"
            onClick={() => navigate("/homeUser")}
            aria-label="Cerrar"
          >
            ×
          </button>
        </header>

        <div className="vista__imagen">
          <img src={producto.imagenUrl} alt={producto.nombre} />
        </div>

        <main className="vista__info">
          <h1 className="vista__titulo">{producto.nombre}</h1>
          <p className="vista__ingredientes">{producto.descripcion}</p>
          <div className="vista__precio">
            <h3>${(producto.precio * cantidad).toLocaleString("es-CO")}</h3>
          </div>
        </main>

        <footer className="vista__footer">
          <div className="vista__cantidad">
            <div className="vista__cantidad-btn" onClick={disminuirCantidad}>-</div>
            <div className="vista__cantidad-display">{cantidad}</div>
            <div className="vista__cantidad-btn" onClick={incrementarCantidad}>+</div>
          </div>
          <button className="vista__cart-btn" onClick={agregarAlCarrito}>Ir al carrito</button>
        </footer>
      </div>
      {carritoAbierto && (
        <CarritoCompra
          abierto={carritoAbierto}
          cerrado={() => setCarritoAbierto(false)}
        />
      )}
    </section>
  );
}

export default VistaProducto;
