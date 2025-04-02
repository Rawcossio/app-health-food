import './VistaProducto.css';

function VistaProducto() {
  return (
    <section className="vista">
      <div className="vista-contenido">
        
        {/* Header */}
        <header className="vista-header">
          <div className="logo-nutri">
            <img src="/go.png" alt="Nutri Logo" className="logo" />
            <h1>Nutri</h1>
          </div>
          <div className="restaurante-info">
            <img src="/restaurante-logo.png" alt="Restaurante" className="logo-restaurante" />
            <div>
              <h3>Sabor Élite <br /> (Medellín)</h3>
              <p>⭐ 4.5 (200 reseñas)</p>
            </div>
          </div>
        </header>

        {/* Imagen del Producto */}
        <div className="vista-imagen">
          <img src="/carne.jpg" alt="Huevos rotos con boletus y trufa" />
        </div>

        {/* Descripción */}
        <main className="vista-info">
          <h1 className="titulo">Huevos rotos con boletus y trufa</h1>
          <p className="ingredientes">Patatas, boletus, cebolleta, ajetes, trufa, cebollino, aceite de oliva, huevos</p>
          <div className="precio">
             <h2> 
             $ 15.000 
            </h2>
             <h3> 
             $20.000
            </h3>
          </div>
        </main>

        {/* Botón */}
        <section className='contenido-footer'>


        <div class="quantity-selector">
    <div class="quantity-btn" onclick="decreaseQuantity()">-</div>
    <div class="quantity-display" id="quantity">1</div>
    <div class="quantity-btn" onclick="increaseQuantity()">+</div>
  </div>
  
  <button class="cart-btn">Ir al carrito</button>
        </section>


      </div>
    </section>
  );
}

export default VistaProducto;
