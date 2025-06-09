import { useState } from "react";

const ProductSlider = ({ productos = [] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCards, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCards, productos.length - visibleCards)
    );
  };

  const visibles = productos.slice(startIndex, startIndex + visibleCards);

  return (
    <div className="slider-container">
      <button onClick={handlePrev} className="nav-button">◀</button>

      <div className="cards-wrapper">
        {visibles.length === 0 ? (
          <p>No hay productos para mostrar</p>
        ) : (
          visibles.map((producto, index) => (
            <div className="card" key={index}>
              <img src={producto.imagenUrl} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>

              <div className="precios">
                <p className="precio">
                  $ {producto.precio?.toLocaleString("es-CO")}
                </p>
                {producto.precioOriginal && (
                  <p className="precio-original">
                    $ {producto.precioOriginal.toLocaleString("es-CO")}
                  </p>
                )}
              </div>

              {producto.descuento && (
                <div className="descuento">{producto.descuento}</div>
              )}

              <button className="comprar">
                <a href="#">Comprar</a>
              </button>
            </div>
          ))
        )}
      </div>

      <button onClick={handleNext} className="nav-button">▶</button>
    </div>
  );
};

export default ProductSlider;
