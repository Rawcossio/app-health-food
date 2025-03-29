import CardFavoritos from '../components/CardFavoritos'
import CardPromociones from '../components/CardPromociones'
import Footer from '../components/footer'
import HeaderRestaurante from '../components/HeaderRestaurante'
import RestauranteCard from '../components/RestauranteCard'
import  {Cards} from '../services/dataBase'
import { Favoritos} from '../services/dataBase'

const Restaurante = () => {
    return(
        <section className="restaurante">

            <div className="restaurante-header">
                <HeaderRestaurante/>
            </div>

            <section className='card-restaurante'>
                <RestauranteCard/>
            </section>

            <h1>Promociones</h1>

            <div className='contenedor-card-promociones'>
                {Cards.map((card)=>{
                    return<CardPromociones imagen={card.imagen} titulo={card.titulo} precio={card.precio} antiguo={card.antiguo} descuento={card.descuento}/>
                })}
            </div>

            <h1>Favoritos</h1>

            <section className='contenedor-card-favoritos'>
                {Favoritos.map((favorito)=>{
                    return<CardFavoritos numero={favorito.numero} imagen={favorito.imagen} titulo={favorito.titulo}
                    precio={favorito.precio} antiguo={favorito.antiguo} descuento={favorito.descuento}/>
                })}
            </section>

            <div className='footer'>
                <Footer/>
            </div>

            

        </section>
    )
}

export default Restaurante