import { Link } from 'react-router-dom'
import './Roles.css'
import user from '/user.png'
const RolesRegistro=()=>{
    return(
       <>
        <section className='roles'>
        <div className="logo-roles">
            <Link to="/"className='titulo-roles'>Nutri</Link>
            <img src="public/go.png" alt=""/>
        </div>
        <p>Ingresa el rol con el que deseas <strong>Registrarte</strong></p>
        <div className='boton-roles'>
        <Link className='button' to="/RegistroCliente"><img src={user} alt="" /> CLIENTE</Link>
        <Link className='button' to="/RegistroRestaurante"><img src={user} alt="" /> RESTAURANTE</Link >
        <Link className='button'to="/RegistroRepartidor"><img src={user} alt="" /> REPARTIDOR</Link >
        </div>
        </section>
       </>
    )
}
export default RolesRegistro 