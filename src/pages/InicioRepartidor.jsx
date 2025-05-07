import Header from '../Components/Header'
import ProcederPedido from '../Components/ProcederPedido'
import PiePagina from '../Components/PiePagina'
import Company from "../components/Company"
import { cities } from "../services/dataBase"
import { contacto } from "../services/dataBase"
import instagram from '/instagram.png'
import facebook from '/facebook.png'
import equis from '/equis.png'
import InicioSesion from '../Components/InicioSesion'
import repartidor from '/repartidor.png'
import amarillo_uno from '/amarillo_uno.png'
import amarillo_dos from '/amarillo_dos.png'
import amarillo_tres from '/amarillo_tres.png'
import './InicioRepartidor.css'
import { useState } from 'react'

const InicioRepartidor=()=>{
    return(
        <>
            <Header/>
                <section className='fondo-login'>
                    <div className='img-login'>
                        <img src={repartidor} alt="" />
                    </div>
                    <div className='form-login'><InicioSesion/></div>
                </section>
        <div className="Proceder-pedido-repartidor">
            <ProcederPedido/>
        </div>
        <section className="Footer-repartidor">
        <h3>Nuestras Principales Ciudades</h3>
        {cities.map((city)=>{
        return <PiePagina pagina={city}/>})}
        </section>
        <section className="Footer-dos-repartidor">
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
        </>
    )
}
export default InicioRepartidor;