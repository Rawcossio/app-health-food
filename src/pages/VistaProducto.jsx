
import "./VistaProducto.css";


function VistaProducto() {

  return (
    <section className="vista">
      <div className="vista__contenido">
        {/* Header */}
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
                Sabor Élite <br /> (Medellín)
              </h3>
              <p>⭐ 4.5 (200 reseñas)</p>
            </div>
          </div>
        </header>

        {/* Imagen del Producto */}
        <div className="vista__imagen">
          <img src="/carne.jpg" alt="Huevos rotos con boletus y trufa" />
        </div>

        {/* Descripción */}
        <main className="vista__info">
          <h1 className="vista__titulo">Huevos rotos con boletus y trufa</h1>
          <p className="vista__ingredientes">
            patatas, boletus, cebolleta, manojito de ajetes, trufa, cebollino,
            aceite de oliva, 8 huevos
          </p>
          <div className="vista__precio">
            <h2>$15.000</h2>
            <h3>$20.000</h3>
          </div>
        </main>

        {/* Footer */}
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
