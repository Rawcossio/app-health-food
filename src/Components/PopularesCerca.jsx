import { useEffect, useState } from "react";
import { alertaGenerica } from "../helpers/funciones";

let apiUrl = "http://localhost:8080/producto";

const PopularesCerca = () => {
  const [producto, setProducto] = useState([]);

  function getProducto() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Productos recibidos de la API:", data);
        setProducto(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getProducto();
  }, []);

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
      console.log("Guardado en localStorage:", carrito);
      
      
    } catch (error) {
      console.error("Error al guardar en carrito:", error);
      alert("Error al agregar al carrito");
    }
  };

  return (
    <section className="Card-populares">
      {producto.map((item) => (
        <section className="Card" key={item.id_producto}>
          <img src={item.imagenUrl} alt={item.nombre} />
          <div>
            <h3>{item.nombre}</h3>
            <strong>${item.precio.toLocaleString("es-CO")}</strong>
          </div>
          <button onClick={() => agregarCarrito(item)}>
            Agregar al carrito
          </button>
        </section>
      ))}
    </section>
  );
};

export default PopularesCerca;