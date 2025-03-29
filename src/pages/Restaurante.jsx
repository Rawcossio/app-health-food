import CardPromociones from '../components/CardPromociones'
import HeaderRestaurante from '../components/HeaderRestaurante'
import RestauranteCard from '../components/RestauranteCard'
import  {Cards} from '../services/dataBase'

const Restaurante = () => {
    return(
        <section className="restaurante">

            <div className="restaurante-header">
                <HeaderRestaurante/>
            </div>

            <section className='card-restaurante'>
                <RestauranteCard/>
            </section>

            <div className='contenedor-card-promociones'>
                {Cards.map((card)=>{
                    return<CardPromociones imagen={card.imagen} titulo={card.titulo} precio={card.precio} antiguo={card.antiguo} descuento={card.descuento}/>
                })}
            </div>

            

        </section>
    )
}

export default Restaurante