import { useState } from "react";
import Swal from "sweetalert2";
import "./AgregarTarjeta.css";

const AgregarTarjeta = ({ onClose, onTarjetaGuardada }) => {

  const [propietario, setPropietario] = useState("");
  const [numero, setNumero] = useState("");
  const [fecha, setFecha] = useState("");
  const [cvv, setCvv] = useState("");

  const guardarTarjeta = async (e) => {
    e.preventDefault();

    if (!propietario || !numero || !fecha || !cvv) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos.",
      });
      return;
    }

    try {
      await axios.post("http://localhost:3000/tarjetas", {
        propietario,
        numero,
        fecha,
        cvv,
      });

      Swal.fire({
        icon: "success",
        title: "Tarjeta guardada",
        text: "Tu tarjeta fue guardada exitosamente.",
      });

      onTarjetaGuardada(); // Actualiza la lista en MetodoPago
    } catch (error) {
      console.error("Error al guardar la tarjeta:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al guardar la tarjeta. Intenta de nuevo.",
      });
    }
  };




  const  [titular, setTitular] = useState("")
  const  [cvv, setCvv] = useState("")
  const  [numeroTarjeta, setNumeroTarjeta] = useState("")
  const  [fecha_vencimiento, setFecha_vencimiento] = useState("")


  const registrarTarjeta = (e) => {
    e.preventDefault(); 


    const nuevaTarjeta  = {
      titular: titular,
      cvv: cvv,
      numeroTarjeta: numeroTarjeta,
      fecha_vencimiento:fecha_vencimiento
    }

    fetch(urlApiTarjeta,{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevaTarjeta)
    })
    .catch()
  
  }
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
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>

          <div className="tarjeta__grupo">
            <label htmlFor="numero">Número de tarjeta</label>
            <input
              type="text"
              id="numero"
              placeholder="0000 0000 0000 0000"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
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
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
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
                maxLength={4}
              />
            </div>
          </div>

          <div className="tarjeta__footer">
            <button className="tarjeta__boton" type="submit">
              Guardar Tarjeta
            </button>
            <button
              className="tarjeta__boton"
              type="button"
              onClick={onClose}
            >
              Volver
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AgregarTarjeta;
