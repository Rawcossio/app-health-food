import { useEffect, useState } from "react";
import './MisOrdenes.css'

const MisOrdenes = ({ onClose }) => {

    const [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        const ordenesGuardadas = JSON.parse(localStorage.getItem("ordenes") || "[]");
        setOrdenes(ordenesGuardadas);
    }, []);

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
                                ordenes.map((orden) => (
                                    <div className="orden-card" key={orden.id}>
                                        <h3>Pedido #{orden.id}</h3>
                                        <p><strong>Fecha:</strong> {orden.fecha}</p>

                                        {orden.productos.map((producto, index) => (
                                            <div key={index} className="orden-producto">
                                                <img src={producto.imagenUrl} alt={producto.nombre} className="imagen-comida" />
                                                <div className="producto-detalles">
                                                    <h4>{producto.nombre}</h4>
                                                    <p>Precio: ${producto.precio.toLocaleString("es-CO")}</p>
                                                    <p>Cantidad: {producto.cantidad}</p>
                                                </div>
                                            </div>
                                        ))
                                        }

                                        <p><strong>Tota:</strong> ${orden.total.toLocaleString("es-CO")}</p>
                                        <p><strong>Estado:</strong>
                                            <span className={`estado ${orden.estado.toLowerCase()}`}>
                                                {orden.estado}
                                            </span>
                                        </p>
                                    </div>
                                ))
                            )}
                        </section>

                    </div>
                </section>
            </div >

        </section >
    );
}
export default MisOrdenes;