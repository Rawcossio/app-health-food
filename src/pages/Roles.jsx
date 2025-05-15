import { Link } from 'react-router-dom'
import './Roles.css'
import user from '/user.png'
const Roles=()=>{
    return(
       <body>
        <section className='roles'>
        <div className="logo-roles">
            <Link to="/"className='titulo-roles'>Nutri</Link>
            <img src="public/go.png" alt=""/>
        </div>
        <p>Ingresa el rol con el que deseas <strong>Iniciar Sesión</strong></p>
        <div className='boton-roles'>
        <Link className='button'><img src={user} alt="" /> CLIENTE</Link>
        <Link className='button' to="/InicioRestaurante"><img src={user} alt="" /> RESTAURANTE</Link>
        <Link className='button'to="/InicioRepartidor"><img src={user} alt="" /> REPARTIDOR</Link>
        </div>
        </section>
       </body>
    )
}
export default Roles 