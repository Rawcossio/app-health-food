const CardPromociones = ({imagen, titulo, precio, antiguo, descuento}) => {
    return(
        
        <div className="contenedor-card-promocion">
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{precio}</p>
            <p className="antiguo">{antiguo}</p>
            <span>{descuento}% OFF</span>

        </div>
    )
}

export default CardPromociones