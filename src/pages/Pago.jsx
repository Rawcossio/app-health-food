import { useState, useEffect } from "react";
import "../pages/Pago.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Pago({ onClose }) {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);
  const [direcciones, setDirecciones] = useState([]);
  const [tarjetas, setTarjetas] = useState([]);
  const [direccionSeleccionada, setDireccionSeleccionada] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  useEffect(() => {
    const obtenerDatos = async () => {
      if (!usuario?.id) {
        setIsLoading(false);
        return;
      }

      try {
        // Obtener carrito del localStorage
        const carritoGuardado = JSON.parse(
          localStorage.getItem("carrito") || "[]"
        );
        setCarrito(carritoGuardado);

        // Obtener usuario específico por ID
        const respuesta = await axios.get(
          `https://app-health-food-back-2.onrender.com/usuario/${usuario.id}`
        );
        const usuarioData = respuesta.data;

        if (usuarioData) {
          setDirecciones(usuarioData.direcciones || []);
          setTarjetas(usuarioData.tarjetas || []);
        }
      } catch (error) {
        console.error("Error al cargar datos:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudieron cargar los datos del usuario",
        });
      } finally {
        setIsLoading(false);
      }
    };
    obtenerDatos();
  }, [usuario?.id]);

  const calcularTotal = () => {
    return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  const handlePagar = async () => {
    if (
      !direccionSeleccionada ||
      !metodoPago ||
      (metodoPago === "tarjeta" && !tarjetaSeleccionada)
    ) {
      Swal.fire(
        "Faltan datos",
        "Completa todos los campos antes de pagar",
        "warning"
      );
      return;
    }

    const usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));

    try {
      // Primero creamos el pago
      const datosPago = {
        metodo_pago: metodoPago.toUpperCase(), // Asegurar que sea mayúscula para el enum
        estado_pago: "COMPLETADO",
        fecha_pago: new Date().toISOString()
      };

      console.log("Creando pago:", datosPago);
      const respuestaPago = await axios.post(
        "https://app-health-food-back-2.onrender.com/pago", // Cambié la URL
        datosPago
      );
      const pagoCreado = respuestaPago.data;
      console.log("Pago creado:", pagoCreado);

      // Agrupar productos por tienda
      const pedidosPorTienda = carrito.reduce((acc, producto) => {
        // Obtener el ID de la tienda del producto
        const tiendaId = producto.tienda?.id_restaurante || producto.id_restaurante;
        
        if (!tiendaId) {
          console.error("Producto sin tienda:", producto);
          throw new Error(`El producto ${producto.nombre} no tiene tienda asociada`);
        }

        if (!acc[tiendaId]) {
          acc[tiendaId] = {
            productos: [],
            total: 0,
          };
        }
        acc[tiendaId].productos.push(producto);
        acc[tiendaId].total += producto.precio * producto.cantidad;
        return acc;
      }, {});

      console.log("Pedidos agrupados por tienda:", pedidosPorTienda);

      // Crear pedidos para cada tienda
      const promesasOrdenes = Object.entries(pedidosPorTienda).map(
        async ([tiendaId, data]) => {
          // Crear los detalles con subtotales calculados
          const detalles = data.productos.map((producto) => {
            const subtotal = producto.precio * producto.cantidad;
            return {
              cantidad: producto.cantidad,
              subtotal: subtotal,
              precio_unitario: producto.precio,
              producto: {
                id_producto: producto.id_producto,
              },
            };
          });

          const pedido = {
            estado_pedido: "PENDIENTE",
            fecha_pedido: new Date().toISOString(),
            total_pedido: data.total,
            usuario: {
              id: usuarioLogueado.id,
            },
            tienda: {
              id_restaurante: parseInt(tiendaId),
            },
            pago: {
              id_pago: pagoCreado.id_pago,
            },
            detalles: detalles,
          };

          console.log(`Creando pedido para tienda ${tiendaId}:`, pedido);
          
          return axios.post(
            "https://app-health-food-back-2.onrender.com/pedido",
            pedido
          );
        }
      );

      const resultados = await Promise.all(promesasOrdenes);
      console.log("Todos los pedidos creados:", resultados.map(r => r.data));

      // Limpiar el carrito
      localStorage.removeItem("carrito");

      Swal.fire({
        icon: "success",
        title: "¡Orden confirmada!",
        text: "Tu pedido está en camino",
      }).then(() => {
        onClose();
        window.dispatchEvent(new Event("carritoActualizado"));
        navigate("/Orden");
      });
    } catch (error) {
      console.error("Error al crear la orden:", error);
      console.error("Detalles del error:", error.response?.data);
      
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.response?.data?.message ||
          error.message ||
          "No se pudo procesar tu pedido. Intenta nuevamente.",
      });
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="pago">
      <div className="pago-contenedor">
        <h2 className="pago-titulo">Resumen del Pedido</h2>
        <button onClick={onClose} className="btn-cerrar">
          ✖
        </button>

        <div className="pago-listado-productos">
          {carrito.map((item, idx) => (
            <div key={idx} className="pago-producto">
              <img
                src={item.imagenUrl}
                alt={item.nombre}
                className="pago-img"
              />
              <div>
                <h4>{item.nombre}</h4>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p>Tienda: {item.tienda?.nombre || 'Sin tienda'}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="pago-total">
          Total: ${calcularTotal().toLocaleString("es-CO")}
        </h3>

        <div className="pago-seleccion">
          <label>Dirección de envío:</label>
          {direcciones.length === 0 ? (
            <div className="mensaje-alerta">
              <p>No tienes direcciones registradas.</p>
              <button onClick={() => navigate("/agregar-direccion")}>
                Agregar Dirección
              </button>
            </div>
          ) : (
            <select
              value={direccionSeleccionada}
              onChange={(e) => setDireccionSeleccionada(e.target.value)}
            >
              <option value="">Selecciona una dirección</option>
              {direcciones.map((dir) => (
                <option key={dir.id_direccion} value={dir.id_direccion}>
                  {dir.calle} - {dir.ciudad}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="pago-seleccion">
          <label>Método de pago:</label>
          <select
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
          >
            <option value="">Selecciona un método</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
          </select>
        </div>

        {metodoPago === "tarjeta" && (
          <div className="pago-seleccion">
            <label>Selecciona tarjeta:</label>
            {tarjetas.length === 0 ? (
              <div className="mensaje-alerta">
                <p>No tienes tarjetas registradas.</p>
                <button onClick={() => navigate("/agregar-tarjeta")}>
                  Agregar Tarjeta
                </button>
              </div>
            ) : (
              <select
                value={tarjetaSeleccionada}
                onChange={(e) => setTarjetaSeleccionada(e.target.value)}
              >
                <option value="">Selecciona una tarjeta</option>
                {tarjetas.map((tar) => (
                  <option key={tar.id_tarjeta} value={tar.numero_tarjeta}>
                    {tar.titular} - ****{" "}
                    {tar.numero_tarjeta?.slice(-4) || "****"}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}

        <button className="btn-pagar" onClick={handlePagar}>
          Pagar
        </button>
      </div>
    </section>
  );
}

export default Pago;