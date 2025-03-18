import Header from '../components/Header';
import InicioSesionFormulario from '../components/InicioSesionFormulario';
import Footer from '../components/footer';


const InicioSesion=() => {
    
    return (

        <section className='contenedor'>
            <Header />

            <div className='main'>
            <InicioSesionFormulario/>    
            </div>

            <section className='footer'>
                <Footer />
            </section>
        </section>

        
        

        
    )
        
    
}

export default InicioSesion