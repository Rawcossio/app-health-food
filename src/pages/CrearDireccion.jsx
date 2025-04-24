import CrearDireccionCard from "../components/CrearDireccionCard";
import HeaderMetodoPago from "../components/HeaderMetodoPago";
import "./CrearDireccion.css";

const CrearDireccion = () => {

    return(
        <section>
            <div>
                <HeaderMetodoPago/>
            </div>

            <section>
                <CrearDireccionCard/>
            </section>
        </section>
    )
}

export default CrearDireccion;
