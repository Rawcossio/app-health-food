
import EnDescuento from "../Components/EnDescuento"
import EncuentraComida from "../Components/EncuentraComida"
import Header from "../Components/Header"
import ComoFunciona from "../components/ComoFunciona"
import PopularesCerca from "../components/PopularesCerca"

const HealthFood=()=>{
    let pedidos=[
        {
            img:"/ensalada_10.png",
            off:"15%",
            food:"Ensalada",
            dias_restantes:"6"
        },
        {
            img:"/ensalada_15.png",
            off:"10%",
            food:"Ensalada",
            dias_restantes:"6"
        },
        {
            img:"/ensalada_25.png",
            off:"25%",
            food:"Ensalada",
            dias_restantes:"7"
        },
        {
            img:"/ensalada_20.png",
            off:"20%",
            food:"Ensalada",
            dias_restantes:"8"
        }

    ]
    let funciona=[
        {
        img:"/ubicacion.png",
        titulo:"Selecciona Ubicación",
        parrafo:"Elija el lugar donde se le entregará la comida."
        },
        {
        img:"/elegir_orden.png",
        titulo:"Elegir Orden",
        parrafo:"Consulta cientos de menús para elegir tu comida favorita."  
        },
        {
        img:"/paga_adelantado.png",
        titulo:"Paga por Adelantado",
        parrafo:"Es rápido, seguro y sencillo. Seleccione varias formas de pago."
        },
        {
        img:"/disfruta_comida.png",
        titulo:"Disfruta tu Comida",
        parrafo:"La comida se prepara y se entrega directamente en tu casa."
        }
    ]
    let populares=[
        {
        img:"/hamburguesa_queso.png",
        titulo:"Hamburguesa con queso",
        parrafo:"📍Arena hamburguesa.",
        precio:"$12.800"
        },
        {
        img:"/pastel_toffe.png",
        titulo:"Pastel de toffe",
        parrafo:"📍La Chagra.",
        precio:"$20.000"
        },
        {
        img:"/pastelito.png",
        titulo:"Pastelito",
        parrafo:"📍Cake World.",
        precio:"$2.000"
        },
        {
        img:"/sandwiches_crujiente.png",
        titulo:"Sándwich crujiente",
        parrafo:"📍Seré.",
        precio:"$9.000"
        },
        {
        img:"/sopa_tailandesa.png",
        titulo:"Sopa tailandesa",
        parrafo:"📍El Cielo.",
        precio:"$12.000"
        }
    ]
    return(
        <html>
        <body>
        <Header/>
            <section>
                <EncuentraComida/>
            </section>
        <div className="tarjetas">
            {pedidos.map((pedido)=>{
                return<EnDescuento info={pedido}/>
            })}
        </div>
        <section className="Comofunciona">
            <h2>Como funciona?</h2>
            {funciona.map((funcion)=>{
                return <ComoFunciona datos={funcion}/>
            })}
        </section>
        <div className="Populares">
            <h2>Populares cerca de ti</h2>
            {populares.map((popular)=>{
                return <PopularesCerca cerca={popular}/>
            })}
        </div>
        </body> 
        </html>
        
        )
            
}
export default HealthFood