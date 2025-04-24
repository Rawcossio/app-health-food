import CrearTarjetacard from "../components/CrearTarjetaCard";
import HeaderMetodoPago from "../components/HeaderMetodoPago";
import "./CrearTarjeta.css";

const CrearTarjeta = () => {

    return(
        <section>
            <div>
                <HeaderMetodoPago/>
            </div>

            <section>
                <CrearTarjetacard/>
            </section>
        </section>
    )
}

export default CrearTarjeta;