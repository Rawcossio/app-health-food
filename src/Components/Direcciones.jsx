import './Direcciones.css';

const Direcciones = () => {
  return (
    <section className="direcciones">
      <div className="direcciones-contenido">
        <header className="direcciones-header">
          <h2>Dirección de Entrega</h2>
        </header>
        <section className="direcciones-lista">
          <div className="direccion-opcion">
            <div className="direccion-contenido">
              <div className="direccion-info">
                <img src="public\casa-direccion-img.png" alt="Casa" />
                <label htmlFor="casa">Casa</label>
              </div>
              <input type="radio" name="direccion" id="casa" />
            </div>
            <p>Calle 123 #45-67</p>
          </div>

          <div className="direccion-opcion">
            <div className="direccion-contenido">
              <div className="direccion-info">
                <img src="public\casa-direccion-img.png" alt="Trabajo" />
                <label htmlFor="trabajo">Trabajo</label>
              </div>
              <input type="radio" name="direccion" id="trabajo" />
            </div>
            <p>Cra 22 #33</p>
          </div>

          <div className="direccion-opcion">
            <div className="direccion-contenido">
              <div className="direccion-info">
                <img src="public\casa-direccion-img.png" alt="Otro" />
                <label htmlFor="otro">Otro</label>
              </div>
              <input type="radio" name="direccion" id="otro" />
            </div>
          </div>
        </section>
        <button>Agregar nueva Dirección</button>
        
      </div>
    </section>
  );
};

export default Direcciones;
