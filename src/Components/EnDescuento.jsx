function EnDescuento({info}){
    return(
        <div className="ComidaDescuento">
            <section className="CartasDescuento">
            <img src={info.img} alt={info.food} />
            <h3>{info.off}</h3>
            <p>off</p>
            </section>
            <section className="TituloBoton">
            <h4>{info.food}</h4>
            <button>{info.dias_restantes} dias restantes</button>
            </section>
        </div>     
    )
}
export default EnDescuento
