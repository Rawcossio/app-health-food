import { useState } from "react";
import Swal from "sweetalert2";
import "./AgregarTarjeta.css";
import axios from "axios";

const AgregarTarjeta = ({ onClose, onTarjetaGuardada }) => {
  const [titular, setTitular] = useState("");
  const [cvv, setCvv] = useState("");
  const [numero_tarjeta, setnumero_tarjeta] = useState("");
  const [fecha_vencimiento, setFecha_vencimiento] = useState("");
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const fecha_final = fecha_vencimiento + "-01"; // Ej: "2025-07" → "2025-07-01"

  const guardarTarjeta = async (e) => {
    e.preventDefault();

    if (!titular || !cvv || !fecha_vencimiento || !numero_tarjeta) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos.",
      });
      return;
    }

    try {
      // Hacer directamente el POST sin consultar usuarios
      await axios.post("https://app-health-food-back-2.onrender.com/tarjeta", {
        titular,
        cvv,
        fecha_vencimiento: fecha_final,
        numero_tarjeta,
        usuario: {
          id: usuario.id,
        },
      });

      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "Tarjeta guardada correctamente",
        timer: 1500,
        showConfirmButton: false,
      });

      onTarjetaGuardada();
      onClose();
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo guardar la tarjeta",
      });
    }
  };

  return (
    <section className="tarjeta">
      <div className="tarjeta__contenido">
        <header className="tarjeta__header">
          <h2>Nueva Tarjeta</h2>
        </header>

        <div className="tarjeta__imagen">
          <img src="/tarjeta-agregar-img.png" alt="tarjeta" />
        </div>

        <form className="tarjeta__form" onSubmit={guardarTarjeta}>
          <div className="tarjeta__grupo">
            <label htmlFor="propietario">Nombre del propietario</label>
            <input
              type="text"
              id="propietario"
              placeholder="Nombre como aparece en la tarjeta"
              value={titular}
              onChange={(e) => setTitular(e.target.value)}
            />
          </div>

          <div className="tarjeta__grupo">
            <label htmlFor="numero">Número de tarjeta</label>
            <input
              type="text"
              id="numero"
              placeholder="0000 0000 0000 0000"
              value={numero_tarjeta}
              onChange={(e) => setnumero_tarjeta(e.target.value)}
              maxLength={19}
            />
          </div>

          <div className="tarjeta__minimo">
            <div className="tarjeta__grupo">
              <label htmlFor="fecha">Fecha de vencimiento</label>
              <input
                type="month"
                id="fecha"
                placeholder="MM/AA"
                value={fecha_vencimiento}
                onChange={(e) => setFecha_vencimiento(e.target.value)}
              />
            </div>
            <div className="tarjeta__grupo">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="000"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength={3}
              />
            </div>
          </div>

          <div className="tarjeta__footer">
            <button className="tarjeta__boton" type="submit">
              Guardar Tarjeta
            </button>
            <button className="tarjeta__boton" type="button" onClick={onClose}>
              Volver
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AgregarTarjeta;
