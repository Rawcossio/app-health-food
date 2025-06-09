import { useState, useEffect } from 'react';
import '../pages/Pago.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Pago({ onClose }) {
  const navigate = useNavigate();

  const [carrito, setCarrito] = useState([]);
  const [direcciones, setDirecciones] = useState([]);
  const [tarjetas, setTarjetas] = useState([]);
  const [direccionSeleccionada, setDireccionSeleccionada] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState('');

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito') || '[]');
    setCarrito(carritoGuardado);

    axios
      .get('https://app-health-food-back-2.onrender.com/direccion')
      .then(res => setDirecciones(res.data))
      .catch(() => setDirecciones([]));

    axios
      .get('https://app-health-food-back-2.onrender.com/tarjeta')
      .then(res => setTarjetas(res.data))
      .catch(() => setTarjetas([]));
  }, []);

  const calcularTotal = () => {
    return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  const handlePagar = () => {
    if (!direccionSeleccionada || !metodoPago || (metodoPago === 'tarjeta' && !tarjetaSeleccionada)) {
      Swal.fire('Faltan datos', 'Completa todos los campos antes de pagar', 'warning');
      return;
    }

    const orden = {
      id: Date.now(),
      productos: carrito,
      total: calcularTotal(),
      direccion: direccionSeleccionada,
      metodoPago: metodoPago,
      tarjeta: metodoPago === 'tarjeta' ? tarjetaSeleccionada : null,
      estado: metodoPago === 'tarjeta' ? 'Pagado' : 'Pendiente de pago',
      fecha: new Date().toLocaleString(),
      tiempoEntrega: '30 minutos'
    };

    const ordenesPrevias = JSON.parse(localStorage.getItem('ordenes') || '[]');
    ordenesPrevias.push(orden);
    localStorage.setItem('ordenes', JSON.stringify(ordenesPrevias));
    localStorage.removeItem('carrito');

    Swal.fire('¡Orden confirmada!', 'Tu pedido está en camino.', 'success').then(() => {
      onClose();
    });
  };

  return (
    <section className="pago">
      <div className="pago-contenedor">
        <h2 className="pago-titulo">Resumen del Pedido</h2>
        <button onClick={onClose} className="btn-cerrar">✖</button>

        <div className="pago-listado-productos">
          {carrito.map((item, idx) => (
            <div key={idx} className="pago-producto">
              <img src={item.imagenUrl} alt={item.nombre} className="pago-img" />
              <div>
                <h4>{item.nombre}</h4>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="pago-total">Total: ${calcularTotal().toLocaleString('es-CO')}</h3>

        <div className="pago-seleccion">
          <label>Dirección de envío:</label>
          {direcciones.length === 0 ? (
            <div className="mensaje-alerta">
              <p>No tienes direcciones registradas.</p>
              <button onClick={() => navigate('/agregar-direccion')}>Agregar Dirección</button>
            </div>
          ) : (
            <select value={direccionSeleccionada} onChange={e => setDireccionSeleccionada(e.target.value)}>
              <option value="">Selecciona una dirección</option>
              {direcciones.map(dir => (
                <option key={dir.id_usuario} value={dir.calle}>
                  {dir.calle}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="pago-seleccion">
          <label>Método de pago:</label>
          <select value={metodoPago} onChange={e => setMetodoPago(e.target.value)}>
            <option value="">Selecciona un método</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
          </select>
        </div>

        {metodoPago === 'tarjeta' && (
          <div className="pago-seleccion">
            <label>Selecciona tarjeta:</label>
            {tarjetas.length === 0 ? (
              <div className="mensaje-alerta">
                <p>No tienes tarjetas registradas.</p>
                <button onClick={() => navigate('/agregar-tarjeta')}>Agregar Tarjeta</button>
              </div>
            ) : (
              <select value={tarjetaSeleccionada} onChange={e => setTarjetaSeleccionada(e.target.value)}>
                <option value="">Selecciona una tarjeta</option>
                {tarjetas.map(tar => (
                  <option key={tar.id} value={tar.numero_tarjeta}>
                    {tar.nombre} - **** {tar.numero_tarjeta?.slice(-4) || '****'}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}

        <button className="btn-pagar" onClick={handlePagar}>Pagar</button>
      </div>
    </section>
  );
}

export default Pago;
