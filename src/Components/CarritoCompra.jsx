import { useEffect, useState } from "react";
import "./CarritoCompra.css";

function CarritoCompra({ abierto, cerrado }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (abierto) {
      const carritoGuardado = JSON.parse(localStorage.getItem("carrito") || "[]");
      setCarrito(carritoGuardado);
    }
  }, [abierto]);

  const total = carrito.reduce(
    (acc, p) => acc + p.precio * p.producto_cantidad,
    0
  );

  const handleIrAlCheckout = () => {
    console.log("Llevando al checkout...");
    // Aquí podés redirigir o mostrar el formulario de pago
  };

  if (!abierto) return null;

  return (
    <div className="carrito__overlay">
      <div className="carrito__modal">
        <button className="carrito__cerrar" onClick={cerrado}>
          ✖
        </button>
        <h2 className="carrito__titulo">🛒 Tu carrito</h2>

        {carrito.length === 0 ? (
          <p className="carrito__vacio">Tu carrito está vacío 😢</p>
        ) : (
          <>
            <div className="carrito__lista">
              {carrito.map((item) => (
                <section className="carrito-tarjeta" key={item.id_producto}>
                  <img
                    src={item.imagenUrl}
                    alt={item.nombre}
                    className="imagen-comida"
                  />

                  <div className="tarjeta-info">
                    <span>${item.precio.toLocaleString("es-CO")}</span>
                    <h3>{item.nombre}</h3>
                  </div>

                  <div className="acciones-carrito">
                    <div className="controles-cantidad-carrito">
                      <button className="boton-menos">-</button>
                      <span className="cantidad">{item.producto_cantidad}</span>
                      <button className="boton-mas">+</button>
                      <img src="/img/icono-basura.svg" alt="Eliminar" />
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="carrito__total">
              <p>Total: ${total.toLocaleString("es-CO")}</p>
              <button
                className="carrito__confirmar"
                onClick={handleIrAlCheckout}
              >
                Ir al checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CarritoCompra;
