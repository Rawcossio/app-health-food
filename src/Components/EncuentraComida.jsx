function EncuentraComida() {
    return(
        <section className="Encuentra-Comida">
            <div className="Titulo-Encuentra-Comida">
                <h1>Estas Hambriento?</h1>
                 <p>Encuentre restaurantes de comida saludable accesibles cerca de usted</p>
                 <div className="Card-Encuentra-comida">
                    <section>
                    <button className="Entrega"><img src="public/moto.png" alt="" />Entrega</button>
                    <button className="Recogida"><img src="public/bolsa.png" alt="" />Recogida</button>
                    </section>
                 <section>
                    <input className="Ubicacion" type="search" placeholder="📍Ingresa tu Dirección"/>
                    <button className="Boton-Encuentra">🔍 Encuentra comida</button>
                    </section>
                </div>
            </div>
            <img src="public/fondo-fideos.png" alt="" className="fondo-fideos"/>
        </section>
    )
    
}export default EncuentraComida
