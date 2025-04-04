import HeaderHome from "../Components/HeaderHome"
import EnDescuento from "../Components/EnDescuento"
import EncuentraComida from "../Components/EncuentraComida"
import ComoFunciona from "../components/ComoFunciona"
import PopularesCerca from "../components/PopularesCerca"
import { entregas, pedidos, restaurantes } from "../services/dataBase"
import { funciona } from "../services/dataBase"
import { populares } from "../services/dataBase"
import Restaurantes from "../Components/Restarantes"
import { tiendas } from "../services/dataBase"
import InstalarApp from "../Components/InstalarApp"
import TipoComida from "../Components/TipoComida"
import { tipos } from "../services/dataBase"
import CardEntrega from "../Components/CardEntrega"
import MejoresOfertas from "../Components/MejoresOfertas"
import { ofertas } from "../services/dataBase"
import ProcederPedido from "../Components/ProcederPedido"
import Company from "../components/Company"
import PiePagina from "../Components/PiePagina"
import { cities } from "../services/dataBase"
import { contacto } from "../services/dataBase"
import instagram from '/instagram.png'
import facebook from '/facebook.png'
import equis from '/equis.png'
import './HomeUser.css'



const HomeUser=()=>{
    return(
        <html>
        <body>
        <HeaderHome/>
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
                <img src={instagram} alt="instagram" />
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
        </body> 
        </html>
        )}
export default HomeUser