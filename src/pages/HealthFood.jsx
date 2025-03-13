
import EnDescuento from "../Components/EnDescuento"
import EncuentraComida from "../Components/EncuentraComida"
import Header from "../Components/Header"

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
            })
            }
        </div>
        </body> 
        </html>
        
        )
            
}
export default HealthFood