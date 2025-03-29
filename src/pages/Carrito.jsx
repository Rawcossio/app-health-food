import CarritoCompra from "../components/CarritoCompra";
import './Carrito.css';
import { productoCarrito } from "../services/dataJuan";

function Carrito() {
    return (
        <section className="carrito-compra">
            <div className="carrito-contenido">
                <header className="carrito-header">
                    <h1>Mi carrito</h1>
                </header>
                
                <section className="carrito-producto">
                    {productoCarrito.map((producto, index) => (
                        <CarritoCompra key={index} infor={producto} />
                    ))}
                </section>
                
                <section className="carrito-precio">
                    <div className="precio">
                        <h1>Subtotal</h1>
                        <h1>$9.000</h1>
                    </div>
                    
                    <div className="precio">
                        <h1>Envío</h1>
                        <h1>$2.000</h1>
                    </div>
                    
                    <div className="precio">
                        <h1>Total</h1>
                        <h1>$11.000</h1>
                    </div>
                    
                    <div className="carrito-boton">
                        <button className="boton-carrito">Comprar</button>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Carrito;