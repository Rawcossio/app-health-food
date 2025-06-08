import { useState } from 'react';
import './AgregarDireccion.css';
import axios from 'axios';

const AgregarDireccion = ({onClose, onDireccionGuardada}) => {

  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleGuardar = async () => {
    if (!ciudad || !direccion) {
      alert('Por favor completa todos los campos');
      return;
    }

     const nuevaDireccion = {
      ciudad,
      direccion
    };

    try {
      const response = await axios.post('http://localhost:3000/direcciones', nuevaDireccion);
      onDireccionGuardada(response.data); // Llama al padre para actualizar lista
      onClose(); // Cierra el formulario
    } catch (error) {
      console.error('Error al guardar dirección:', error);
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
          <button onClick={handleGuardar}>Guardar Dirección</button>
          <button onClick={onClose}>Volver</button>
        </div>
      </div>
    </section>
  );
};

export default AgregarDireccion;