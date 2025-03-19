import HeaderRestaurante from '../components/HeaderRestaurante'
import RestauranteCard from '../components/RestauranteCard'
const Restaurante = () => {
    return(
        <section className="restaurante">

            <div className="restaurante-header">
                <HeaderRestaurante/>
            </div>

            <section className='card-restaurante'>
                <RestauranteCard/>
            </section>

            

        </section>
    )
}

export default Restaurante