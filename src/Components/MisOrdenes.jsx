import { Ordenes } from "../services/dataBase"
import './MisOrdenes.css'

const MisOrdenes =({onClose})=>{
    return(
        <section className="Ordenes">
            
            <div className="ordenes-grid">
                <h2>Mis Órdenes</h2>
                {Ordenes.map((orden)=>(
                    <div className="orden-card" key={orden.id}>
                        <h3>Pedido #{orden.id}</h3>
                        <p><strong>Fecha:</strong>{orden.fecha}</p>
                        <p><strong>Productos:</strong></p>
                        <ul>
                            {orden.productos.map((producto, index) =>
                            <li key={index}>{producto}</li>)}
                        </ul>
                        <p><strong>Total:</strong>${orden.total.toFixed(2)}</p>
                        <p><strong>Estado:</strong>
                        <span className={`estado ${orden.estado.toLowerCase()}`}>{orden.estado}</span></p>
                    </div>

                ))}

                <button onClick={onClose}>Volver</button>
            </div>
        </section>
    )
}
export default MisOrdenes