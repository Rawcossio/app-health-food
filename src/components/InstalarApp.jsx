import telefono from '/telefono.png'
import GooglePlay from '/Google_Play.png'
import AppStore from '/App_Store.png';
const InstalarApp=()=>{
    return( 
        <div className='instala-app-card'>
            <img src={telefono} alt="telefono" />
            <section className='instala-app-texto'>
                <h2>Instala la App</h2>
                <p>Nunca ha sido tan fácil pedir comida. Busque los mejores descuentos y se perderá en un mundo de comida deliciosa.</p>
                <div>
                <img src={GooglePlay} alt="google play" />
                <img src={AppStore} alt="app store" />
                </div>
            </section>
        </div>
    )
}
export default InstalarApp