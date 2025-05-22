import Navbar from "../Components/Navbar"
import NumeroCardSlider from "../Components/NumeroCardSlider"

import ProductSlider from "../Components/ProductoSlider"
import './Restaurante.css'

const Restaurante =()=>{
    return(
        <section className="contenedor-principal">
            <div>
                <Navbar/>
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

            <section className="footer">
                
            </section>

            

        </section>
    )
}

export default Restaurante