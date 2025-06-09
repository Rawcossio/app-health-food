import { useState } from 'react';
import './AgregarDireccion.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const AgregarDireccion = ({onClose}) => {

  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');

 const guardarDireccion = async () => {
  if (!ciudad || !direccion) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos incompletos',
      text: 'Por favor, completa todos los campos.'
    });
    return;
  }

  try {
    await axios.post('https://app-health-food-back-2.onrender.com/direccion', {
      ciudad,
      direccion,
    });

    Swal.fire({
      icon: 'success',
      title: 'Dirección guardada',
      text: 'La dirección ha sido guardada exitosamente.',
      timer: 2000,
      showConfirmButton: false
    });

    onClose();
  } catch (error) {
    console.error('Error al guardar la dirección:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ocurrió un error al guardar la dirección. Por favor, inténtalo de nuevo.'
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
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
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


export default AgregarDireccion