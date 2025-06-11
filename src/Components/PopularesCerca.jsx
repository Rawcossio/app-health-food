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

  // ✅ Versión mejorada de agregarCarrito
  const agregarCarrito = (producto) => {
    console.log("Click en botón, producto recibido:", producto);

    // ⚠️ VALIDACIÓN IMPORTANTE: Verificar que el producto tiene tienda
    if (!producto.tienda && !producto.id_restaurante) {
      console.error("Error: Producto sin tienda asociada:", producto);
      alert("Error: Este producto no tiene tienda asociada. No se puede agregar al carrito.");
      return;
    }

    try {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      
      // Buscar si el producto ya existe en el carrito
      const index = carrito.findIndex(
        (p) => p.id_producto === producto.id_producto
      );
      
      if (index !== -1) {
        // Si existe, aumentar cantidad
        carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
      } else {
        // Si no existe, agregarlo con cantidad 1
        // Asegurar que la información de la tienda esté incluida
        const productoParaCarrito = {
          ...producto,
          cantidad: 1,
          // Asegurar que tenemos la información de la tienda
          tienda: producto.tienda || null,
          id_restaurante: producto.tienda?.id_restaurante || producto.id_restaurante
        };
        
        carrito.push(productoParaCarrito);
      }
      
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito("carrito");
      console.log("Producto guardado en carrito:", carrito);
    } catch (error) {
      console.error("Error al guardar en carrito:", error);
    }
  };

  return (
    <section className="Populares">
      <h2>Populares cerca de ti</h2>
      {productos.length === 0 && <p>Cargando productos...</p>}
      {productos.slice(0, 5).map((item, index) => (
        <section className="Card-populares" key={item.id_producto}>
          <Link to={`/producto/${item.id_producto}`}>
            <img src={item.imagenUrl} alt={item.nombre} />
            <div className="Card-populares">
              <h3>{item.nombre}</h3>
              <strong>${item.precio.toLocaleString("es-CO")}</strong>
              {/* Mostrar nombre de la tienda si está disponible */}
              {item.tienda && (
                <p style={{ fontSize: '0.8rem', color: '#666' }}>
                  {item.tienda.nombre}
                </p>
              )}
            </div>
          </Link>
          <button
            onClick={() => {
              console.log("¡CLICK!");
              console.log("Producto:", item);
              agregarCarrito(item);
            }}
          >
            Agregar al carrito
          </button>
          {/* Debug para ver el producto renderizado */}
          {console.log(`Producto renderizado [${index}]:`, item)}
        </section>
      ))}
    </section>
  );
};

export default PopularesCerca;