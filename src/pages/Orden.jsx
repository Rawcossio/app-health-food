import go from '/go.png'
import './Orden.css'
const Orden=()=>{
    return(
        <body>
        <section className='orden'>
            <div className='logo-orden'>
                <h2>Nutri</h2>
                <img src={go}/>
            </div>
            <div className='texto-orden'>
                <h2>¡ORDEN CONFIRMADA!</h2>
                <p>Tu orden ha sido aceptada exitosamente</p>
                <button>SIGUE TU ORDEN</button>
            </div>
        </section>
    </body>
    )
}
export default Orden 