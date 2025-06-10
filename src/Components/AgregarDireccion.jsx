import { useState } from "react";
import "./AgregarDireccion.css";
import axios from "axios";
import Swal from "sweetalert2";

const AgregarDireccion = ({ onClose }) => {
  const [ciudad, setCiudad] = useState("");
  const [calle, setCalle] = useState("");

  // Saco el usuario logueado de localStorage
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const guardarDireccion = async () => {
    if (!ciudad || !calle) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa ciudad y calle.",
      });
      return;
    }

    try {
      await axios.post(
        "https://app-health-food-back-2.onrender.com/direccion",
        {
          calle,
          ciudad,
          codigo_postal: "00000", // default fijo
          pais: "Colombia", // default fijo
          usuario: {
            id: usuario.id, // tu usuario real del localStorage o donde lo guardes
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Dirección guardada",
        timer: 2000,
        showConfirmButton: false,
      });
      onClose();
    } catch (error) {
      console.error("Error al guardar la dirección:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo guardar la dirección, intenta de nuevo.",
      });
    }
  };

  return (
    <section className="agregar-direccion">
      <div className="agregar-contenido">
        <header className="agregar-header">
          <h2>Nueva Dirección</h2>
        </header>

        <div className="agregar-casa">
          <img src="/casa-direccion-img.png" alt="Casa" />
        </div>

        <div className="agregar-form">
          <div className="form-grupo">
            <label htmlFor="ciudad">Ciudad</label>
            <select
              id="ciudad"
              name="ciudad"
              className="form-select"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            >
              <option value="">Selecciona una ciudad</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Medellín">Medellín</option>
              <option value="Cali">Cali</option>
              <option value="Barranquilla">Barranquilla</option>
              <option value="Cartagena">Cartagena</option>
              <option value="Bucaramanga">Bucaramanga</option>
            </select>
          </div>

          <div className="form-grupo">
            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              id="direccion"
              placeholder="Ingresa tu dirección completa"
              value={calle}
              onChange={(e) => setCalle(e.target.value)}
            />
          </div>
        </div>

        <div className="agregar-footer">
          <button onClick={guardarDireccion}>Guardar Dirección</button>
          <button onClick={onClose}>Volver</button>
        </div>
      </div>
    </section>
  );
};

export default AgregarDireccion;
