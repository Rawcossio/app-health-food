const CardEntrega=({delivery})=>{
    return(
        <div className="seccion-CardEntrega">
            <img src={delivery.img} alt={delivery.titulo} />
            <h3>{delivery.titulo}</h3>
        </div>
    )
}
export default CardEntrega