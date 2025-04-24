import './AgregarDireccion.css';
import HeaderMetodoPago from '../components/HeaderMetodoPago';
import DireccionEntrega from '../components/DireccionEntrega';

const AgregarDireccion = () => {
    
    return(
        <section>
            <div>
                <HeaderMetodoPago/>
            </div>

            <section>
                <DireccionEntrega/>
            </section>
        </section>
    )

}

export default AgregarDireccion;