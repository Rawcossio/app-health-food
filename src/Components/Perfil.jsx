import { useEffect, useState } from "react";
import "./Perfil.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Perfil({ onClose }) {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    Swal.fire({
      title: "¿Deseas cerrar sesión?",
      icon: "warning",
      showCloseButton: true,
      confirmButtonText: "sí, cerrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //Eliminar datos del local
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");

        //redirigir al login
        navigate("/InicioSesion");
      }
    });
  };

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
        <section className="contenedor-boton">
          <button onClick={cerrarSesion}>Cerrar</button>

          <button
            onClick={() => {
              if (onClose) onClose();
              navigate("/HomeUser");
            }}
          >
            Volver a inicio
          </button>
        </section>
      </div>
    </div>
  );
}

export default Perfil;
