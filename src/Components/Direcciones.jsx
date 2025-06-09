import { Await, Navigate, useNavigate } from 'react-router-dom';
import './Direcciones.css';
import AgregarDireccion from './AgregarDireccion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Direcciones = ({ onClose }) => {

  const [mostrarAgregarDireccion, setMostrarAgregarDireccion] = useState(false)

  const [direcciones, setDirecciones] = useState([]);

  // Función para obtener las direcciones del usuario desde JSON Server
  const obtenerDirecciones = async () => {
    try {
      const respuesta = await axios.get('https://app-health-food-back-2.onrender.com/direccion');
      setDirecciones(respuesta.data);
    } catch (error) {
      console.error('Error al obtener las direcciones:', error);
    }
  }

  useEffect(() => {
    obtenerDirecciones();
  }, [])

  const eliminarDireccion = async (id) => {
    const resultado = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la dirección de forma permanente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e74c3c',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (resultado.isConfirmed) {
      try {
        await axios.delete(`https://app-health-food-back-2.onrender.com/direccion/${id}`);
        obtenerDirecciones();

        Swal.fire({
          title: '¡Eliminado!',
          text: 'La dirección ha sido eliminada correctamente.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
      } catch (error) {
        console.error('Error al eliminar la dirección:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo eliminar la dirección. Intenta de nuevo.',
          icon: 'error'
        });
      }
    }
  };


  return (
    <section className="direcciones">
      <div className="direcciones-contenido">
        <header className="direcciones-header">
          <h2>Dirección de Entrega</h2>
        </header>

        <section className="direcciones-lista">
          {direcciones.map((direccion) => (
            <div className="direccion-opcion" key={direccion.id}>
              <div className="direccion-contenido">
                <div className="direccion-info">
                  <img src="/casa-direccion-img.png" alt="Casa" />
                  <label htmlFor={`direccion-${direccion.id}`}>{direccion.tipo || 'Dirección'}</label>
                </div>
                <input type="radio" name="direccion" id={`direccion-${direccion.id}`} />
              </div>
              <p>{direccion.calle}</p>

              {/* Botón para eliminar */}
              <button
                className="btn-eliminar"
                onClick={() => eliminarDireccion(direccion.id)}
              >
                🗑 Eliminar
              </button>
            </div>
          ))}

        </section>

        <button onClick={() => setMostrarAgregarDireccion(true)}>
          Agregar nueva Dirección
        </button>{mostrarAgregarDireccion && (
          <div className="overlay">
            <AgregarDireccion onClose={() => {
              setMostrarAgregarDireccion(false);
              obtenerDirecciones(); // recargar las direcciones al cerrar
            }} />
          </div>
        )}


        <button className="btn-volver" onClick={onClose}>
          Volver
        </button>



      </div>
    </section>
  );

};

export default Direcciones;


