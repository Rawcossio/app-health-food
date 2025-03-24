const Company=({soporte})=>{
    return(
        <section className="Soporte">
        <h3>{soporte.titulo}</h3>
        <p>{soporte.parrafoUno}</p>
        <p>{soporte.parrafoDos}</p>
        <p>{soporte.parrafoTres}</p>
        <p>{soporte.parrafoCuatro}</p>
        </section>
    )
}
export default Company