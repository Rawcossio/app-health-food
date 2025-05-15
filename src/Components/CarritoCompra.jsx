
import './CarritoCompra.css';

function CarritoCompra({ infor }) {
    if (!infor) return null;
    
    return (
        <section className="carrito-tarjeta">
            <img src={infor.imagenCarrito} alt="Plato de comida" className="imagen-comida" />
            
            <div className="tarjeta-info">
                <span>{infor.precioCarrito}</span>
                <h3>{infor.nombreCarrito}</h3>
            </div>
            
            <div className="acciones-carrito">
                <div className="controles-cantidad-carrito">
                    <button className="boton-menos">-</button>
                    <span className="cantidad">1</span>
                    <button className="boton-mas">+</button>
                    <img src={infor.basura} alt="Eliminar" />
                </div>
            </div>
        </section>
    );
}

export default CarritoCompra;