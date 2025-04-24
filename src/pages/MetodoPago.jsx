import { HiOutlineDatabase } from 'react-icons/hi';
import './MetodoPago.css';
import HeaderMetodoPago from '../components/HeaderMetodoPago';
import MetodoPagoCom from '../components/MetodoPagoCom';

const MetodoPago = () => {

    return(
        <section>
            <div>
                <HeaderMetodoPago/>
            </div>

            <main>
                <MetodoPagoCom/>
            </main>
        </section>
    )
}

export default MetodoPago