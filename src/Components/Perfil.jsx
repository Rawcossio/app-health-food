import { useEffect, useState } from "react";
import "./Perfil.css";

function Perfil() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioLocal) {
      setUsuario(usuarioLocal);
    }
  }, []);

  if (!usuario) {
    return <p>Cargando datos del perfil</p>;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <section className="content-logo">
          <img src="public\avatar.png" alt="" />
          <h2>Datos del Usuario</h2>
        </section>

        {/* //Aqui solo funcionan estos datos {
        "id": 2,
        "nombre": "Juan david",
        "correoElectronico": "chalajuandavid876@gmail.com",
        "contrasena": "pepito123",
        "telefono": "3225889904",
        "tipoUsuario": "CLIENTE",
        "direcciones": [],
        "pedidos": []
    } estos son los datos del usuario según lo que quiera llamar en el return */}

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
