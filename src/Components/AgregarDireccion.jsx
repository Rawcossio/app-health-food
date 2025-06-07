import './AgregarDireccion.css';

const AgregarDireccion = () => {
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
            >
              <option value="">Selecciona una ciudad</option>
              <option value="bogota">Bogotá</option>
              <option value="medellin">Medellín</option>
              <option value="cali">Cali</option>
              <option value="barranquilla">Barranquilla</option>
              <option value="cartagena">Cartagena</option>
              <option value="bucaramanga">Bucaramanga</option>
            </select>
          </div>

          <div className="form-grupo">
            <label htmlFor="direccion">Dirección</label>
            <input type="text" id="direccion" placeholder="Ingresa tu dirección completa" />
          </div>
        </div>

        <div className="agregar-footer">
          <button>Guardar Dirección</button>
        </div>
      </div>
    </section>
  );
};

export default AgregarDireccion;
