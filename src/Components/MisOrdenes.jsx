import { useEffect, useState } from "react";
import './MisOrdenes.css'

const MisOrdenes = ({ onClose }) => {
  const [ordenes, setOrdenes] = useState([]);
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));

  useEffect(() => {
    if (!usuarioLogueado) return;

    // 1. Obtener órdenes del backend
    fetch(`http://localhost:3000/orders?userId=${usuarioLogueado.id}`)
      .then(res => res.json())
      .then(ordenesBackend => {
        // 2. Obtener órdenes del localStorage (anteriores)
        const ordenesLocal = JSON.parse(localStorage.getItem("ordenes") || "[]")
          .filter(o => o.userId === usuarioLogueado.id);

        // 3. Combinar ambas listas
        setOrdenes([...ordenesLocal, ...ordenesBackend]);
      });
  }, [usuarioLogueado]);

  return (
    <section className="ordenes-contenedor">
      <div className="ordenes-modal-overlay">
        <section className="ordenes-modal">
          <button onClick={onClose} className="btn-cerrar">✖</button>
          <h2 className="ordenes-titulo">Mis Órdenes</h2>
          <div className="ordenes-scroll">
            <section className="ordenes-grid">
              {ordenes.length === 0 ? (
                <p>No tienes órdenes registradas aún.</p>
              ) : (
                ordenes.map((orden, idx) => (
                  <div className="orden-card" key={orden.id || idx}>
                    <h3>Pedido #{orden.id || idx + 1}</h3>
                    <p><strong>Fecha:</strong> {orden.fecha}</p>
                    <p><strong>Dirección:</strong> {orden.direccion}</p>
                    <p><strong>Método de Pago:</strong> {orden.metodoPago}</p>
                    {orden.metodoPago === "tarjeta" && orden.tarjeta && (
                      <p><strong>Tarjeta:</strong> **** {orden.tarjeta.slice(-4)}</p>
                    )}
                    <p><strong>Tiempo estimado:</strong> {orden.tiempoEntrega}</p>
                    {orden.productos && orden.productos.map((producto, index) => (
                      <div key={index} className="orden-producto">
                        <img src={producto.imagenUrl} alt={producto.nombre} className="imagen-comida" />
                        <div className="producto-detalles">
                          <h4>{producto.nombre}</h4>
                          <p>Precio: ${producto.precio?.toLocaleString("es-CO")}</p>
                          <p>Cantidad: {producto.cantidad}</p>
                        </div>
                      </div>
                    ))}
                    <p><strong>Total:</strong> ${orden.total?.toLocaleString("es-CO")}</p>
                    <p><strong>Estado:</strong>
                      <span className={`estado ${orden.estado?.toLowerCase().replace(/\s/g, "-")}`}>
                        {orden.estado}
                      </span>
                    </p>
                  </div>
                ))
              )}
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MisOrdenes;