import { useParams, Link } from "react-router-dom";
import "./VistaProducto.css";

function VistaProducto() {
  const { id } = useParams();
  
  const productoSeleccionado = populares.find(p => p.id === Number(id));

  if (!productoSeleccionado) {
    return (
      <div className="vista error-page">
        <div className="error-container">
          <h2>Producto no encontrado</h2>
          <p>Lo sentimos, el producto que buscas no existe.</p>
          <Link to="/" className="error-link">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <section className="vista">
      <div className="vista__contenido">
        <header className="vista__header">
          <div className="vista__logo-nutri">
            <h1>Nutri</h1>
            <img src="/go.png" alt="Nutri Logo" className="vista__logo" />
          </div>
          <div className="vista__restaurante-info">
            <img
              src="/restaurante-logo.png"
              alt="Restaurante"
              className="vista__logo-restaurante"
            />
            <div>
              <h3>
                {productoSeleccionado.parrafo.replace("📍", "")} <br /> (Medellín)
              </h3>
              <p>⭐ 4.5 (200 reseñas)</p>
            </div>
          </div>
        </header>

        <div className="vista__imagen">
          <img
            src={productoSeleccionado.img}
            alt={productoSeleccionado.titulo}
          />
        </div>

        <main className="vista__info">
          <h1 className="vista__titulo">{productoSeleccionado.titulo}</h1>
          <p className="vista__ingredientes">{productoSeleccionado.parrafo}</p>
          <div className="vista__precio">
            <h3>{productoSeleccionado.precio}</h3>
          </div>
        </main>

        <footer className="vista__footer">
          <div className="vista__cantidad">
            <div className="vista__cantidad-btn">-</div>
            <div className="vista__cantidad-display">1</div>
            <div className="vista__cantidad-btn">+</div>
          </div>
          <button className="vista__cart-btn">Ir al carrito</button>
        </footer>
      </div>
    </section>
  );
}

export default VistaProducto;


