const Restaurantes=({destacado})=>{
    return(
    <section className="Card-restaurantes">
        <div className="Img-restaurantes">
            <img src={destacado.img} alt={destacado.titulo} />
            <button>{destacado.off}off</button>
            <p>🕓Fast</p>
        </div>
        <div className="Card-restaurante-estrella">
            <section className="Card-estrella">
            <img src={destacado.logo} alt="logo" />
            <h3>{destacado.titulo}</h3>
            <p>⭐{destacado.estrellas}</p>
            </section>
            <button>{destacado.boton}</button>            
        </div>
    </section>
    )
}

export default Restaurantes 