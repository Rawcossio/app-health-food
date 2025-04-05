import google from '/google.png'
const Registrarse=()=>{
    return(            
            <form className='formulario-registro'>
            <h2>Reparte a través de NutriGo y empieza a obtener ganancias</h2>
            <div>
            <label htmlFor="">Ciudad</label>
            <input type="text" placeholder="Ingresa la ciudad donde estas" />
            </div>
            <div>
            <label htmlFor="">Nombre</label>
            <input type="text" placeholder="Ingresa tu nombre" />
            </div>
            <div>
            <label htmlFor="">Telefono</label>
            <input type="text" placeholder="Ingresa tu telefono" />
            </div>
            <div>
            <button type="submit">¡Comencemos!</button>
            <p>Ya tienes cuenta? <strong>Inicio Sesion</strong></p>
            </div> 
            <h3>Ó</h3>
            <button className='google'> <img src={google} alt="" />Inicia Sesión con Google</button>
            </form>
    )
}
export default Registrarse