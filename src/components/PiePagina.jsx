const PiePagina=({pagina})=>{
    return(
        <section className="Nombre-ciudades">
        <p>{pagina.ciudadUno}</p>
        <p>{pagina.ciudadDos}</p>
        <p>{pagina.ciudadTres}</p>
        <p>{pagina.ciudadCuatro}</p>
        <p>{pagina.ciudadCinco}</p>
        </section>
    )
}

export default PiePagina