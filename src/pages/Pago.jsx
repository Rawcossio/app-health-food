import '../pages/Pago.css'

function Pago({ infor }) {
    return (
        <section className="pago">
            <div className="pago-contenido">

                <header className="pago-header">
                    <h1>Pago</h1>
                </header>

                <section className='pago-editar'>
                    <h2>Dirección de envio</h2>
                    <img src="public\Write icon.png" alt="" />
                </section>

                <div className='pago-direccion'>
                    <p>Calle 78 #77-8, Barrio El Poblado,medellin</p>
                </div>


                <section className='pago-objeto'>
                    <div className='pago-order'>
                        <h2>Order Summary</h2>

                        <div className='pago-precio'>
                            <button>editar</button>
                            <h2>$40.000</h2>
                        </div>

                    </div>

                    <div className='pago-producto'>

                        <div className='pago-articulo'>
                            <p>Hamburgesa con queso</p>
                            <p>Broccoli <br />
                                Lasagna</p>
                        </div>

                        <div className='pago-articulos'>
                            <p>2 artículos</p>
                            <p>1 artículos</p>
                        </div>
                    </div>
                </section>




                <section className='pago-tarjeta'>
                    <div className='tarjeta-texto'>
                        <h2>Payment Method</h2>
                        <div className='tarjeta-boton'>
                            <button>editar</button>
                        </div>
                    </div>

                    <div className='tarjeta-metodo'>
                        <div className='tarjeta-logo'>
                            <img src="public\vector.png" alt="logo" />
                            <p>tarjeta credito</p>
                        </div>

                        <div className='tarjeta-numero'>
                            <p>*** *** *** 43 /00 /000</p>
                        </div>
                    </div>
                </section>

                <section className='pago-pedido'>

                    <div className='pedido-texto-titulo'>
                    <h2>Delivery Time</h2>
                    </div>

                    <div className='pedido-texto'>
                        <p>Estimated Delivery</p>


                        <div className='pedido-texto-parrafo'>
                            <h2>25 mins</h2>
                        </div>



                    </div>

                </section>
                <section className='boton-pago'>
                <button >Paga ahora</button>
                </section>

                

            </div>
        </section>
    );
}

export default Pago;