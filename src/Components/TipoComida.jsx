const TipoComida=({type})=>{
    return(
        <section className="TiposComida-tipos">
            <img src={type.img} alt={type.titulo}/>
            <h3>{type.titulo}</h3>
        </section>
    )
}
export default TipoComida
