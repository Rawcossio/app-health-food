
import { useState } from "react";

const DetalleProducto = ({ detail }) => {
    const [modalAbierto, setModalAbierto] = useState(false);

    return (
        <>
            {/* Botón para abrir el modal */}
            <button className="boton-ver" onClick={() => setModalAbierto(true)}>
                Ver más
            </button>

            {/* Modal */}
            {modalAbierto && (
                <div className="modal">
                    <div className="modal-contenido">
                        {/* Cerrar modal */}
                        <span className="cerrar" onClick={() => setModalAbierto(false)}>
                            &times;
                        </span>

                        <div className="modal-header">
                            <div className="logo-header">
                                <h1>Nutri</h1>
                                <img src="public/go.png" alt="NutriGo Logo" />
                            </div>
                            <div className="header-info">
                                <img src={detail.headerInfo.logoRestaurante} />
                                <span className="elite">
                                    {detail.headerInfo.nombreRestaurante} <br />
                                    - {detail.headerInfo.ubicacion}
                                    <br /> {/* Para evitar que el texto se desborde */}
                                    {detail.headerInfo.ventas}
                                </span>
                            </div>
                        </div>


                        {/* Contenido */}
                        <div className="contenido">
                            <img src={detail.img} alt="Plato de comida" className="imagen-comida" />
                            <h3>{detail.nombre}</h3>
                            <p className="descripcion">{detail.descripcion}</p>
                            <p className="precio">
                                <span className="precio-descuento">{detail.precio}</span>
                                <span className="precio-original">{detail.precioOriginal}</span>
                            </p>
                        </div>

                        {/* Acciones */}
                        <div className="acciones">
                            <div className="controles-cantidad">
                                <button className="boton-menos">-</button>
                                <span className="cantidad">1</span>
                                <button className="boton-mas">+</button>
                            </div>
                            <button className="carrito">Ir al carrito</button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default DetalleProducto