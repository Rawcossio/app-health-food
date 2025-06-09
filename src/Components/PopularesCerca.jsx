import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { actualizarCarrito } from "../helpers/actualizarCarrito";

const apiUrl = "https://app-health-food-back-2.onrender.com/producto";

const PopularesCerca = () => {
  const [productos, setProductos] = useState([]);

  // Traer productos desde la API
  const getProducto = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Productos recibidos de la API:", data);
        setProductos(data);
      })
      .catch((error) => console.log("Error al cargar productos:", error));
  };

  useEffect(() => {
    getProducto();
  }, []);

  // ✅ Esta es la versión buena de agregarCarrito
  const agregarCarrito = (producto) => {
    console.log("Click en botón, producto recibido:", producto);

    try {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const index = carrito.findIndex(
        (p) => p.id_producto === producto.id_producto
      );
      if (index !== -1) {
        carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
      } else {
        carrito.push({ ...producto, cantidad: 1 });
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito("carrito");
      console.log("Guardado en localStorage:", carrito);
    } catch (error) {
      console.error("Error al guardar en carrito:", error);
    }
  };

  return (
    <section className="Populares">
      <h2>Populares cerca de ti</h2>
      {productos.length === 0 && <p>Cargando productos...</p>}
      {productos.map((item, index) => (
        <section className="Card-populares" key={item.id_producto}>
          <Link to={`/producto/${item.id_producto}`}>
          <img src={item.imagenUrl} alt={item.nombre} />
          <div className="Card-populares">
            <h3>{item.nombre}</h3>
            <strong>${item.precio.toLocaleString("es-CO")}</strong>
          </div>
          </Link>
          <button
            onClick={() => {
              console.log("¡CLICK!");
              console.log("Producto:", item);
              agregarCarrito(item);
            }}
          >
            Agrega al carrito
          </button>
          {/* Debug para ver el producto renderizado */}
          {console.log(`Producto renderizado [${index}]:`, item)}
        </section>
      ))}
    </section>
  );
};

export default PopularesCerca;
