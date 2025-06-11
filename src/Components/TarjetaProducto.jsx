import "./TarjetaProducto.css";
import { useState, useEffect } from "react";

const TarjetaProducto = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const idRestaurante = localStorage.getItem("id_restaurante");

    if (!idRestaurante) {
      console.warn("⚠️ No hay ID de restaurante en localStorage.");
      setError("Debes iniciar sesión como restaurante.");
      setCargando(false);
      return;
    }

    console.log("📦 ID del restaurante:", idRestaurante);

    fetch(`https://app-health-food-back-2.onrender.com/tienda/${idRestaurante}`)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudieron obtener los productos.");
        return res.json();
      })
      .then((data) => {
        if (!data || !Array.isArray(data.productos)) {
          throw new Error("No se encontraron productos.");
        }
        setProductos(data.productos);
      })
      .catch((err) => {
        console.error("❌ Error al obtener productos:", err);
        setError(err.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  const eliminarProducto = (idProducto) => {
    const confirmar = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
    if (!confirmar) return;

    fetch(`https://app-health-food-back-2.onrender.com/producto/${idProducto}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo eliminar el producto.");
        // Eliminar del estado
        setProductos((prev) =>
          prev.filter((producto) => producto.id_producto !== idProducto)
        );
        console.log(`🗑️ Producto con ID ${idProducto} eliminado.`);
      })
      .catch((err) => {
        console.error("❌ Error al eliminar producto:", err);
        alert("Ocurrió un error al eliminar el producto.");
      });
  };

  if (cargando) {
    return <p className="tarjeta__estado">⏳ Cargando productos...</p>;
  }

  if (error) {
    return <p className="tarjeta__estado">⚠️ {error}</p>;
  }

  if (productos.length === 0) {
    return <p className="tarjeta__estado">📦 No hay productos disponibles.</p>;
  }

  return (
    <div className="lista-tarjetas">
      {productos.map((producto) => (
        <div className="tarjeta_p" key={producto.id_producto}>
          <img
            src={producto.imagenUrl}
            alt={producto.nombre}
            className="tarjeta__imagen"
          />
          <h2 className="tarjeta__titulo">{producto.nombre}</h2>
          <p className="tarjeta__descripcion">{producto.descripcion}</p>
          <h2 className="tarjeta__precio">
            $ {producto.precio.toLocaleString()}
          </h2>
          <div className="tarjeta-boton">

          <button
            className="eliminar-btn"
            onClick={() => eliminarProducto(producto.id_producto)}
          >
            🗑️ Eliminar
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TarjetaProducto;
