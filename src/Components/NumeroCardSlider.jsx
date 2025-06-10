import { useState, useEffect } from "react";

const NumeroCardSlider = ({ productos = [] }) => {
  const visibleCards = 4;
  const [startIndex, setStartIndex] = useState(0);
  const [activo, setActivo] = useState(0);
  const [randomProducts, setRandomProducts] = useState([]);

  // Al montar, seleccionamos productos random (sin repetir)
  useEffect(() => {
    if (productos.length <= visibleCards) {
      setRandomProducts(productos);
      return;
    }
    const seleccionados = [];
    const indicesUsados = new Set();
    while (seleccionados.length < visibleCards) {
      const idx = Math.floor(Math.random() * productos.length);
      if (!indicesUsados.has(idx)) {
        indicesUsados.add(idx);
        seleccionados.push(productos[idx]);
      }
    }
    setRandomProducts(seleccionados);
  }, [productos]);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCards, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCards, randomProducts.length - visibleCards)
    );
  };

  const visibles = randomProducts.slice(startIndex, startIndex + visibleCards);

  return (
    <div className="slider-container">
      <button onClick={handlePrev} className="nav-button">◀</button>

      <div className="cards-wrapper">
        {visibles.length === 0 ? (
          <p>No hay productos para mostrar</p>
        ) : (
          visibles.map((producto, index) => {
            const globalIndex = startIndex + index;
            return (
              <div
                className={`card ${globalIndex === activo ? "activa" : ""}`}
                key={producto.id || index}
                onClick={() => setActivo(globalIndex)}
              >
                <div className="numero">{globalIndex + 1}</div>
                <img src={producto.imagenUrl} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <div className="precios">
                  <p className="precio">
                    $ {(Number(producto.precio) || 0).toLocaleString("es-CO")}
                  </p>
                  {producto.precioOriginal && (
                    <p className="precio-original">
                      $ {Number(producto.precioOriginal).toLocaleString("es-CO")}
                    </p>
                  )}
                </div>
                {producto.descuento && (
                  <div className="descuento">{producto.descuento}</div>
                )}
                <button
                  className="comprar"
                  onClick={() => {
                    try {
                      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                      const index = carrito.findIndex(
                        (p) => p.id_producto === producto.id_producto
                      );
                      if (index !== -1) {
                        carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
                      } else {
                        carrito.push({ ...producto, cantidad: 1 });
                      }
                      localStorage.setItem("carrito", JSON.stringify(carrito));
                      window.dispatchEvent(new Event("carritoActualizado"));
                    } catch (error) {
                      console.error("Error al guardar en carrito:", error);
                    }
                  }}
                >
                  Comprar
                </button>
              </div>
            );
          })
        )}
      </div>

      <button onClick={handleNext} className="nav-button">▶</button>
    </div>
  );
};

export default NumeroCardSlider;
