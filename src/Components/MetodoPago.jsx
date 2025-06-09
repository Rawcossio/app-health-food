import { useState } from "react";
import "./MetodoPago.css";
import AgregarTarjeta from "./AgregarTarjeta";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const MetodoPago = ({onClose}) => {

  const [mostrarAgregarTarjeta, setMostrarAgregarTarjeta] = useState(false);
  const [tarjetas, setTarjetas] = useState([]);

  const obtenerTarjetas = async () => {
    try {
      const res = await axios.get("http://localhost:3000/tarjetas");
      setTarjetas(res.data);
    } catch (error) {
      console.error("Error al obtener las tarjetas:", error);
    }
  };

  useEffect(() => {
    obtenerTarjetas();
  }, []);

  const handleTarjetaAgregada = () => {
    obtenerTarjetas();
    setMostrarAgregarTarjeta(false);
  };

  const eliminarTarjeta = (id) => {
    Swal.fire({
      title: "¿Deseas eliminar esta tarjeta?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/tarjetas/${id}`);
          Swal.fire("Eliminada", "La tarjeta ha sido eliminada.", "success");
          obtenerTarjetas();
        } catch (error) {
          Swal.fire("Error", "No se pudo eliminar la tarjeta.", "error");
        }
      }
    });
  };


  return (
    <section className="metodo-pago">
      <div className="metodo-contenido">
        <header className="metodo-header">
          <h2>Método de Pago</h2>
        </header>

        <section className="metodo-lista">
          {tarjetas.map((tarjeta) => (
            <div className="metodo-opcion" key={tarjeta.id}>
              <div className="metodo-contenido-tarjeta">
                <img src="/tarjeta-img.png" alt="Tarjeta" />
                <label htmlFor={`tarjeta-${tarjeta.id}`}>
                  **** **** **** {tarjeta.numero.slice(-4)}
                </label>
                <input
                  type="radio"
                  name="pago"
                  id={`tarjeta-${tarjeta.id}`}
                />
              </div>
              <button
                className="btn-eliminar"
                onClick={() => eliminarTarjeta(tarjeta.id)}
              >
                🗑 Eliminar
              </button>
            </div>
          ))}
        </section>

        <button onClick={() => setMostrarAgregarTarjeta(true)}>
          Agregar nueva Tarjeta
        </button>
        {mostrarAgregarTarjeta && (
          <AgregarTarjeta
            onClose={() => setMostrarAgregarTarjeta(false)}
            onTarjetaGuardada={handleTarjetaAgregada}
          />
        )}

        <button onClick={onClose}>Volver</button>
      </div>
    </section>
  );


};

export default MetodoPago;
