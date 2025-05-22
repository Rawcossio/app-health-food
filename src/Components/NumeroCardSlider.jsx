import { useState } from "react";
import { productos } from "../services/dataBase";

const NumeroCardSlider =()=>{
const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;
  const [activo, setActivo] = useState(0);

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
        {visibles.map((producto, index) => {
          const globalIndex = startIndex + index;
          return (
            <div
              className={`card ${globalIndex === activo ? 'activa' : ''}`}
              key={producto.id}
              onClick={() => setActivo(globalIndex)}
            >
              <div className="numero">{globalIndex + 1}</div>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <div className="precios">
                <p className="precio">$ {producto.precio.toLocaleString()}</p>
                <p className="precio-original">$ {producto.precioOriginal.toLocaleString()}</p>
              </div>
              <div className="descuento">{producto.descuento}</div>
              <button className="comprar"><a href="">Comprar</a></button>
            </div>
          );
        })}
      </div>

      <button onClick={handleNext} className="nav-button">▶</button>
    </div>
  );
};

export default NumeroCardSlider;