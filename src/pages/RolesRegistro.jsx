import './Roles.css'
import user from '/user.png'
const RolesRegistro=()=>{
    return(
       <body>
        <section className='roles'>
        <div className="logo-roles">
            <h1>Nutri</h1>
            <img src="public/go.png" alt=""/>
        </div>
        <p>Ingresa el rol con el que deseas <strong>Registrarte</strong></p>
        <div className='boton-roles'>
        <button><img src={user} alt="" /> CLIENTE</button>
        <button><img src={user} alt="" /> RESTAURANTE</button>
        <button><img src={user} alt="" /> REPARTIDOR</button>
        </div>
        </section>
       </body>
    )
}
export default RolesRegistro 