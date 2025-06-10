import { useState } from "react";

const ProductSlider = ({ productos = [] }) => {
  // Lógica para agregar al carrito (idéntica a PopularesCerca)
  const agregarCarrito = (producto) => {
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
  };
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

              <button className="comprar" onClick={() => agregarCarrito(producto)}>
                Comprar
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
