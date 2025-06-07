import { useEffect, useState } from "react";
import './CarritoCompra.css';

function CarritoCompra({ abierto, cerrado }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (abierto) {
      const carritoGuardado = JSON.parse(
        localStorage.getItem("carrito") || "[]"
      );
      setCarrito(carritoGuardado);
    }
  }, [abierto]);

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  const iralugar = () => {
    console.log("Llevando al checkout...");
  };

  if (!abierto) return null;

    const eliminarDelCarrito = (id_producto) => {
    const nuevoCarrito = carrito.filter(item => item.id_producto !== id_producto);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

    const aumentarCantidad = (id_producto) => {
    const nuevoCarrito = carrito.map(item =>
      item.id_producto === id_producto
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };
  
  const disminuirCantidad = (id_producto) => {
    const nuevoCarrito = carrito
      .map(item =>
        item.id_producto === id_producto
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter(item => item.cantidad > 0); // Elimina si la cantidad llega a 0
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  return (
  <div className="carrito-compra">
    <div className="carrito-contenido">
      <div className="carrito-header">
        <h1>🛒 Tu carrito</h1>
        <button className="carrito__cerrar" onClick={cerrado}>✖</button>
      </div>

      <div className="carrito-producto">
        {carrito.length === 0 ? (
          <p className="carrito__vacio">Tu carrito está vacío 😢</p>
        ) : (
          carrito.map((item) => (
            <section className="carrito-tarjeta" key={item.id_producto}>
              <img src={item.imagenUrl} alt={item.nombre} className="imagen-comida" />
              <div className="tarjeta-info">
                <span>${item.precio.toLocaleString("es-CO")}</span>
                <h3>{item.nombre}</h3>
              </div>
              <div className="acciones-carrito">
                <div className="controles-cantidad-carrito">
                  <button className="boton-menos" onClick={() => disminuirCantidad(item.id_producto)}>-</button>
                  <span className="cantidad">{item.cantidad}</span>
                  <button className="boton-mas" onClick={() => aumentarCantidad(item.id_producto)}>+</button>
                  <img src="public\incono-basura.png" alt="Eliminar"  className="icono-eliminar"
                  style={{ cursor: "pointer" }}
                  onClick={() => eliminarDelCarrito(item.id_producto)}/>
                </div>
              </div>
            </section>
          ))
        )}
      </div>

      <div className="carrito-precio">
        <div className="precio">
          <h1>Total:</h1>
          <h1>${total.toLocaleString("es-CO")}</h1>
        </div>
        <div className="carrito-boton">
          <button className="boton-carrito" onClick={iralugar}>Ir al checkout</button>
        </div>
      </div>
    </div>
  </div>
);

}

export default CarritoCompra;
