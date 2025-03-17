
import EnDescuento from "../Components/EnDescuento"
import EncuentraComida from "../Components/EncuentraComida"
import Header from "../Components/Header"
import ComoFunciona from "../components/ComoFunciona"
import PopularesCerca from "../components/PopularesCerca"
import { pedidos, restaurantes } from "../services/dataBase"
import { funciona } from "../services/dataBase"
import { populares } from "../services/dataBase"
import Restaurantes from "../components/Restarantes"
import { tiendas } from "../services/dataBase"

const HealthFood=()=>{
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
        <section className="Restaurantes">
            <h2>Restaurantes Destacados</h2>
            <div>
                {tiendas.map((tienda)=>{
                    return<Restaurantes destacado={tienda}/>})}
            </div>
            <div>
                {restaurantes.map((restaurante)=>{
                    return<Restaurantes destacado={restaurante}/>})}
            </div>
            <button className="verTodo">Ver todo</button>
        </section>
        </body> 
        </html>
        
        )
            
}
export default HealthFood