import { useState } from "react"
import { productos } from "../services/dataBase"

const ProductSlider = () => {
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
        {visibles.map((producto) => (
          <div className="card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>

            <div className="precios">
              <p className="precio">$ {producto.precio.toLocaleString()}</p>
              <p className="precio-original">$ {producto.precioOriginal.toLocaleString()}</p>
            </div>

            <div className="descuento">{producto.descuento}</div>

                <button className="comprar"><a href="">Comprar</a></button>
            </div>
        ))}
      </div>

      <button onClick={handleNext} className="nav-button">▶</button>
    </div>
  );
};

export default ProductSlider;