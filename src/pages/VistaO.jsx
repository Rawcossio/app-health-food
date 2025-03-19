import { useState, useEffect } from "react";
import CarritoCompra from "../components/CarritoCompra";
import { productoCarrito as productosDB } from "../services/dataBase";

function VistaO() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosDB);
    }, []);  // Solo se ejecuta una vez

    console.log("Datos en productoCarrito:", productosDB);

    return (
        <section className="carrito-producto">
            {productos.map((producto, index) => (
                <CarritoCompra key={index} infor={producto} />
            ))}
        </section>
    );
}

export default VistaO;
