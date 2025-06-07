
import HeaderLogin from "../Components/HeaderLogin"
import InicioClienteFormulario from "../Components/InicioClienteFormulario"
import "./InicioSesionCliente.css"

const InicioSesionCliente = () => {

    return (

        <section className="contenedor-principal">
            <div>
                <HeaderLogin/>
            </div>

            <div>
                <InicioClienteFormulario/>
            </div>
        </section>
    )


}

export default InicioSesionCliente
