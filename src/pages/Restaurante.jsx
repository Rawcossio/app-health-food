import Company from "../Components/Company"
import HeaderHome from "../Components/HeaderHome"
import NumeroCardSlider from "../Components/NumeroCardSlider"
import PiePagina from "../Components/PiePagina"
import Instagram from '/instagram.png'
import facebook from '/facebook.png'
import equis from '/equis.png'
import ProductSlider from "../Components/ProductoSlider"
import { cities, contacto } from "../services/dataBase"
import './Restaurante.css'
import ProcederPedido from "../Components/ProcederPedido"

const Restaurante =()=>{
    return(
        <section className="contenedor-principal">
            <div>
                <HeaderHome/>
            </div>
            <main className="main">
                <img src="public\logo-restaurante.png" alt="logo" />

                <section className="titulo-restaurante">
                    <h1>Sabor Élite (Medellín)</h1>
                    <p>5,0(600) comida gourmet</p>
                </section>

            </main>
            <section className="precio-domicilio">
                <p className="uno">Entrega a domicilio 35-50Min</p>
                <p className="dos">$7.000</p>
            </section>
            <div className="productos">

                <h1>Promociones</h1>
                <section className="Promociones">
                    <ProductSlider/>
                </section>

                <h1>Favoritos</h1>
                <section className="favoritos">
                    <NumeroCardSlider/>
                </section>
            </div>
            <div className="Proceder-pedido">
            <ProcederPedido/>
            </div>
            <section className="Footer">
                    <h3>Nuestras Principales Ciudades</h3>
                    {cities.map((city)=>{
                    return <PiePagina pagina={city}/>})}
                    </section>
                    <section className="Footer-dos">
                    {contacto.map((contact)=>{
                        return <Company soporte={contact}/>})
                    }
                    <div className="siguenos">
                        <h3>SIGUENOS</h3>
                        <div>
                            <img src={Instagram} alt="instagram" />
                            <img src={facebook} alt="facebook" />
                            <img src={equis} alt="equis" />
                        </div>
                        <p>Recibe ofertas exclusivas en tu correo</p>
                        <section>
                            <input type="search" placeholder=" ✉️ Ingresa tu correo"/>
                            <button>Suscribirse</button>
                        </section>
                    </div>
                    </section>          
        </section>
    )
}

export default Restaurante