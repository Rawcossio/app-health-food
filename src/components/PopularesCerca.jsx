const PopularesCerca=({cerca})=>{
    return(
        <section className="Card-populares">
        <img src={cerca.img} alt={cerca.titulo} />
        <div>
        <h3>{cerca.titulo}</h3>
        <p>{cerca.parrafo}</p>
        <strong>{cerca.precio}</strong>
        </div>
        <button>Ordena Ahora</button>
        </section>
    )
}
export default PopularesCerca