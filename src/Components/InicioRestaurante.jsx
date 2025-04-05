import google from '/google.png'
const InicioRestaurante=()=>{
    return(            
            <form action="" className='formulario'>
            <h2>Hola! Bienvenido</h2>
            <div>
            <label htmlFor="">Correo electronico o Numero telefonico</label>
            <input type="search" placeholder="Ingresa tu usuario o numero telefonico" />
            </div>
            <div>
            <label htmlFor="">Ingresa tu correo electronico</label>
            <input type="search" placeholder="Ingresa tu correo electronico" />
            </div>
            <div>
            <button type="submit">Inicio Sesión</button>
            <p>Aún no tienes cuenta? <strong>Registrarse</strong></p>
            </div> 
            <h2>Ó</h2>
            <button className='google'> <img src={google} alt="" />Inicia Sesión con Google</button>
            </form>
    )
}
export default InicioRestaurante