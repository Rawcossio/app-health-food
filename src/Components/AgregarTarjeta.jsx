import "./AgregarTarjeta.css";

const AgregarTarjeta = ({onClose}) => {

  return (
    <section className="tarjeta">
      <div className="tarjeta__contenido">
        <header className="tarjeta__header">
          <h2>Nueva Tarjeta</h2>
        </header>

        <div className="tarjeta__imagen">
          <img src="public\tarjeta-agregar-img.png" alt="tarjeta" />
        </div>

        <form className="tarjeta__form">
          <div className="tarjeta__grupo">
            <label htmlFor="propietario">Nombre del propietario</label>
            <input
              type="text"
              id="propietario"
              placeholder="Nombre como aparece en la tarjeta"
            />
          </div>

          <div className="tarjeta__grupo">
            <label htmlFor="numero">Número de tarjeta</label>
            <input
              type="text"
              id="numero"
              placeholder="0000 0000 0000 0000"
            />
          </div>
        </form>

        <div className="tarjeta__minimo">
          <div className="tarjeta__grupo">
            <label htmlFor="fecha">Fecha de vencimiento</label>
            <input type="date" id="fecha" placeholder="MM/AA" />
          </div>
          <div className="tarjeta__grupo">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="000" />
          </div>
        </div>

        <div className="tarjeta__footer">
          <button className="tarjeta__boton">Guardar Tarjeta</button>
          <button className="tarjeta__boton" onClick={onClose}>Volver</button>
        </div>
      </div>
    </section>
  );
};

export default AgregarTarjeta;
