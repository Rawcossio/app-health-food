const RestauranteCard = ()=>{
    return (
      <section className="contenedor-card-restaurante">
        <div className="img-card-restaurante">
          <img src="/public/logo-restaurante.webp" alt="img logo" />

          <section className="card-restaurante-info">
            <h2>Sabor elite (Medellín)</h2>
            <p>⭐⭐⭐⭐⭐5,0 (600) comida gourmet</p>
          </section>
        </div>

        <div className="dellate-entrega">
          <span>Entrega a domicilio 35-50Min</span>
          <span className="precio">$ 7.000</span>
        </div>
        
      </section>
    );
}

export default RestauranteCard;