const Restaurantes=({destacado})=>{
    return(
    <section>
        <div>
            <img src={destacado.img} alt={destacado.titulo} />
            <h3>{destacado.off}</h3>
            <p>Fast</p>
        </div>
        <div>
            <section>
            <img src={destacado.logo} alt="logo" />
            <h3>{destacado.titulo}</h3>
            <p>{destacado.estrellas}</p>
            </section>
            <button>{destacado.boton}</button>            
        </div>
    </section>
    )
}

export default Restaurantes 