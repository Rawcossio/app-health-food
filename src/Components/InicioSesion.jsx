import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import google from '/google.png'


const InicioSesion=()=>{
    const [getName, setName]=useState("")
     const [getEmail, setEmail]=useState("")
     let redireccion=useNavigate()

     let usuarios=[
        {
            name:"Raul",
            phone:"3226235434",
            email:"raul@gmail.com"
        },
        {
            name:"Juan Diego",
            phone:"3008244233",
            email:"juandiego@gmail.com"
        },
        {
            name:"Juan David",
            phone:"3045795370",
            email:"juandavid@gmail.com"
        },
     ]
     

     function IniciarSesion(userName, userEmail) {
        const usuarioValido = usuarios.find(
          (usuario) =>
            (usuario.name === userName || usuario.phone === userName) &&
            usuario.email === userEmail
        );
      
        if (usuarioValido) {
          redireccion('/HomeUser');
        } else {
          alert("Error de credenciales");
        }
      }
    return(            
            <form action="" className='formulario'>
            <h2>Hola! Bienvenido</h2>
            <div>
            <label htmlFor="">Nombre o Numero telefonico</label>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Ingresa tu usuario o numero telefonico" />
            </div>
            <div>
            <label htmlFor="">Ingresa tu correo electronico</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Ingresa tu correo electronico" />
            </div>
            <div>
            <button type="button" onClick={()=>IniciarSesion(getName,getEmail)}>Inicio Sesión</button>
            <p>Aún no tienes cuenta? <strong>Registrarse</strong></p>
            </div> 
            <h2>Ó</h2>
            <button className='google'> <img src={google} alt="" />Inicia Sesión con Google</button>
            </form>
    )
}
export default InicioSesion