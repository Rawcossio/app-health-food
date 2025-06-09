import { useEffect, useState } from "react";
import { actualizarCarrito } from "../helpers/actualizarCarrito";
import './CarritoCompra.css';
import Pago from '../pages/Pago.jsx';

function CarritoCompra({ abierto, cerrado }) {
  const [carrito, setCarrito] = useState([]);
  const [mostrarPago, setMostrarPago] = useState(false);

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
  if (carrito.length === 0) return;

  const nuevaOrden = {
    id: Date.now(),
    fecha: new Date().toLocaleDateString(),
    productos: carrito,
    total: carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0),
    estado: "Pendiente"
  };

  const ordenesExistentes = JSON.parse(localStorage.getItem("ordenes") || "[]");
  const nuevasOrdenes = [...ordenesExistentes, nuevaOrden];
  localStorage.setItem("ordenes", JSON.stringify(nuevasOrdenes));

  localStorage.removeItem("carrito"); // Limpia el carrito
  setCarrito([]); // Limpia visualmente

  alert("✅ Orden registrada con éxito");
};

  if (!abierto) return null;

    const eliminarDelCarrito = (id_producto) => {
    const nuevoCarrito = carrito.filter(item => item.id_producto !== id_producto);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    actualizarCarrito();  
  };

    const aumentarCantidad = (id_producto) => {
    const nuevoCarrito = carrito.map(item =>
      item.id_producto === id_producto
        ? { ...item, cantidad: item.cantidad + 1 }
        : item);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    actualizarCarrito(); 
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
    actualizarCarrito(); 
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

          <button className="boton-carrito" 
          onClick={() => setMostrarPago(true)}>
            Ir al checkout
          </button>{mostrarPago && (
            <Pago onClose={() => setMostrarPago(false)}/>
          )

          }

          

        </div>
      </div>
    </div>
  </div>
);

}

export default CarritoCompra;

