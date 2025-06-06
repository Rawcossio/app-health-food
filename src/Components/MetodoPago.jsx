import "./MetodoPago.css";
const MetodoPago = () => {
  return (
    <section className="metodo-pago">
      <div className="metodo-contenido">
        <header className="metodo-header">
          <h2>Método de Pago</h2>
        </header>
        <section className="metodo-lista">
          <div className="metodo-opcion">
            <img src="public\tarjeta-img.png" alt="" />
            <label htmlFor="tarjeta">*** *** ***43</label>
            <input type="radio" name="pago" id="tarjeta" />
          </div>

          <div className="metodo-opcion">
            <img src="public\apple-img.png" alt="" />
            <label htmlFor="nequi">Apple Play</label>
            <input type="radio" name="pago" id="nequi" />
          </div>

          <div className="metodo-opcion">
            <img src="public\paypal-img.png" alt="paypal" />
            <label htmlFor="paypal">Paypal</label>
            <input type="radio" name="pago" id="paypal" />
          </div>

          <div className="metodo-opcion">
            <img src="public\google_play-img.png" alt="google play" />
            <label htmlFor="googleplay">Google Play</label>
            <input type="radio" name="pago" id="googleplay" />
          </div>
        </section>
        <button>Agregar nueva Tarjeta </button>
      </div>
    </section>
  );
};

export default MetodoPago;
