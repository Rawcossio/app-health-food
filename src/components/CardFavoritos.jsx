const CardFavoritos =({numero, imagen, titulo, precio, antiguo, descuento})=>{
    return(
        <section className="contenedor-favoritos">
            <h1>{numero}</h1>
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{precio}</p>
            <p className="antiguo-favoritos">{antiguo}</p>
            <span>{descuento}</span>
        </section>
    )
}
export default CardFavoritos