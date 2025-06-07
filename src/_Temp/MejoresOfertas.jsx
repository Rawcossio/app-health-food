const MejoresOfertas=({mejor})=>{
    return(
        <div className="Card-MejoresOfertas">
            <img src={mejor.img} alt="" />
            <section className="card-mejores-texto">
                <strong>{mejor.strong}</strong>
                <h3>{mejor.titulo}</h3>
                <p>{mejor.parrafo}</p>
                <button>PROCEDER AL PEDIDO</button>
            </section>
        </div>
    )
}
export default MejoresOfertas
