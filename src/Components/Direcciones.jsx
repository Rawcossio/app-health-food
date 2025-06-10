import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Direcciones.css';
import AgregarDireccion from './AgregarDireccion';

const Direcciones = ({ onClose }) => {
  const [mostrarAgregarDireccion, setMostrarAgregarDireccion] = useState(false);
  const [direcciones, setDirecciones] = useState([]);
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const obtenerDirecciones = async () => {
    try {
      const respuesta = await axios.get('https://app-health-food-back-2.onrender.com/usuario');
      const usuarios = respuesta.data;
      
      // Encontrar el usuario actual por su ID
      const usuarioActual = usuarios.find(u => u.id === usuario.id);
      
      if (usuarioActual && usuarioActual.direcciones) {
        setDirecciones(usuarioActual.direcciones);
        console.log('Direcciones cargadas:', usuarioActual.direcciones);
      } else {
        setDirecciones([]);
      }
    } catch (error) {
      console.error('Error al obtener las direcciones:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudieron cargar las direcciones'
      });
    }
  };

  useEffect(() => {
    if (usuario?.id) {
      obtenerDirecciones();
    }
  }, [usuario]);

  const eliminarDireccion = async (idDireccion) => {
    try {
      await axios.delete(`https://app-health-food-back-2.onrender.com/direccion/${idDireccion}`);
      // Actualizar direcciones después de eliminar
      obtenerDirecciones();
      Swal.fire({
        icon: 'success',
        title: '¡Eliminada!',
        text: 'Dirección eliminada correctamente',
        timer: 1500
      });
    } catch (error) {
      console.error('Error al eliminar:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo eliminar la dirección'
      });
    }
  };

  return (
    <section className="direcciones">
      <div className="direcciones-contenido">
        <header className="direcciones-header">
          <h2>Dirección de Entrega</h2>
        </header>

        <section className="direcciones-lista">
          {direcciones.length === 0 ? (
            <p className="no-direcciones">No tienes direcciones guardadas</p>
          ) : (
            direcciones.map((direccion) => (
              <div className="direccion-opcion" key={direccion.id_direccion}>
                <div className="direccion-contenido">
                  <div className="direccion-info">
                    <img src="/casa-direccion-img.png" alt="Casa" />
                    <label>{direccion.calle}</label>
                  </div>
                  <input 
                    type="radio" 
                    name="direccion" 
                    id={`direccion-${direccion.id_direccion}`} 
                  />
                </div>
                <p>{direccion.ciudad}</p>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarDireccion(direccion.id_direccion)}
                >
                  🗑 Eliminar
                </button>
              </div>
            ))
          )}
        </section>

        <button 
          className="btn-agregar"
          onClick={() => setMostrarAgregarDireccion(true)}
        >
          Agregar nueva Dirección
        </button>

        {mostrarAgregarDireccion && (
          <div className="overlay">
            <AgregarDireccion 
              onClose={() => {
                setMostrarAgregarDireccion(false);
                obtenerDirecciones();
              }} 
            />
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


