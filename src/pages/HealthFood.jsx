
import EnDescuento from "../Components/EnDescuento"
import EncuentraComida from "../Components/EncuentraComida"
import Header from "../Components/Header"
import ComoFunciona from "../components/ComoFunciona"
import PopularesCerca from "../components/PopularesCerca"
import { entregas, pedidos, restaurantes } from "../services/dataBase"
import { funciona } from "../services/dataBase"
import { populares } from "../services/dataBase"
import Restaurantes from "../components/Restarantes"
import { tiendas } from "../services/dataBase"
import InstalarApp from "../components/InstalarApp"
import TipoComida from "../components/TipoComida"
import { tipos } from "../services/dataBase"
import CardEntrega from "../components/CardEntrega"
import MejoresOfertas from "../components/MejoresOfertas"
import { ofertas } from "../services/dataBase"
import ProcederPedido from "../components/ProcederPedido"

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
        <div className="TiposComida">
            <section className="Tipotitulo">
                <h2>Buscar Tipo de comida</h2>
                <button>Ver todo</button>
            </section>
            <section className="Card-tipo">
            {tipos.map((tipo)=>{
                return <TipoComida type={tipo}/>})}
            </section>
        </div>
        <section className="CardEntrega">
            {entregas.map((entrega)=>{
                return <CardEntrega delivery={entrega}/>  
            })}
        </section>
        <div className="InstalarApp">
            <InstalarApp/>
        </div>
        <section className="MejoresOfertas">
            {ofertas.map((oferta)=>{
                return<MejoresOfertas mejor={oferta}/>})}
        </section>
        <div className="Proceder-pedido">
            <ProcederPedido/>
        </div>
        </body> 
        </html>
        
        )
            
}
export default HealthFood