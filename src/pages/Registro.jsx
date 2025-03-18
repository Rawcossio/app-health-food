import Header from '../components/Header';
import RegistroFormulario from '../components/RegistroFormulario';
import Footer from '../components/footer';

const Registro =() =>{
    return(
        <section className="contenedor">
            <Header />

            <div className='main-Registro'>
                <RegistroFormulario/>
            </div>

            <section className='footer'>
                <Footer />
            </section>

        </section>
    )
}

export default Registro