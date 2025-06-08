import { Await, Navigate, useNavigate } from 'react-router-dom';
import './Direcciones.css';
import AgregarDireccion from './AgregarDireccion';
import { useEffect, useState } from 'react';

const Direcciones = ({onClose}) => {

  const [mostrarAgregarDireccion, setMostrarAgregarDireccion] = useState(false)

   const [direcciones, setDirecciones] = useState([]);

   useEffect(() => {
    obtenerDirecciones();
  }, []);

  const obtenerDirecciones = async () => {
    try {
      const response = await axios.get('http://localhost:3000/direcciones');
      setDirecciones(response.data);
    } catch (error) {
      console.error('Error al obtener direcciones:', error);
    }
  };

  const handleDireccionGuardada = (nuevaDireccion) => {
    setDirecciones([...direcciones, nuevaDireccion]);
  };

  


  return (
    <section className="direcciones">
      <div className="direcciones-contenido">
        <header className="direcciones-header">
          <h2>Dirección de Entrega</h2>
        </header>

        <section className="direcciones-lista">
          {direcciones.map((dir) => (
            <div className="direccion-opcion" key={dir.id}>
              <div className="direccion-contenido">
                <div className="direccion-info">
                  <img src="/casa-direccion-img.png" alt="Casa" />
                  <label>{dir.ciudad}</label>
                </div>
                <p>{dir.direccion}</p>
              </div>
            </div>
          ))}
        </section>

        <button onClick={() => setMostrarAgregarDireccion(true)}>
          Agregar nueva Dirección
        </button>

        <button className="btn-volver" onClick={onClose}>
          Volver
        </button>

        {mostrarAgregarDireccion && (
          <AgregarDireccion
            onClose={() => setMostrarAgregarDireccion(false)}
            onDireccionGuardada={handleDireccionGuardada}
          />
        )}
      </div>
    </section>
  );

};

export default Direcciones;
