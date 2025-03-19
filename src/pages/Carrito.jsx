import { useState } from "react";
import CarritoCompra from "../components/CarritoCompra"
import { productoCarrito } from "../services/dataBase";


function Carrito({ infor }) {

    return (
        <section className="carrito-compra">
            <div className="carrito-contenido">
                <header className="carrito-header">
                    <h1>Mi carrito</h1>
                </header>

                <section className="carrito-producto">
                    {productoCarrito.map((productoCarrito, index) => (
                        <CarritoCompra key={index} infor={productoCarrito} />
                    ))}
                </section>

                <button className="boton-carrito">Comprar</button>


            </div>
        </section>


    )
}

export default Carrito