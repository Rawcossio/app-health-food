const ComoFunciona=({datos})=>{
    return(
        <div className="Card-ComoFunciona">
               <img src={datos.img} alt={datos.titulo} /> 
               <h4>{datos.titulo}</h4>
               <p>{datos.parrafo}</p>
        </div>
    )
}
export default ComoFunciona