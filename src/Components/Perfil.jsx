import { useEffect, useState } from "react";
import "./Perfil.css";

function Perfil() {

    const [usuario, setUsuario] = useState([])

    useEffect(() =>{
        const usuarioLocal = JSON.parse(localStorage.getItem("usuario"))
        if(usuarioLocal){
            setUsuario(usuarioLocal);
        }
    }, [])


    if(!usuario){
        return <p>Cargando datos del perfil</p>
    }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <section className="content-logo">
          <img src="public\avatar.png" alt="" />
          <h2>Datos del Usuario</h2>
        </section>

        <table>
          <tbody>
            <tr>
              <td>Nombre:</td>
              <td>{usuario.nombre}</td>
            </tr>
            <tr>
              <td>Correo:</td>
              <td>{usuario.correoElectronico}</td>
            </tr>
            <tr>
              <td>Teléfono:</td>
              <td>{usuario.telefono}</td>
            </tr>
            {/* Añade más filas según tus datos */}
          </tbody>
        </table>
        <button>Cerrar</button>
      </div>
    </div>
  );
}

export default Perfil;

