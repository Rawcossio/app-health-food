import { useState } from "react";
import './FormularioProducto.css';

const FormularioProducto = ({ cerrarFormulario }) => {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    precioDescuento: "",
    descripcion: "",
    ubicacion: "",
    imagenUrl: "",
  });
  const idRestaurante = localStorage.getItem("id_restaurante");


  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://app-health-food-back-2.onrender.com/producto/tienda/${idRestaurante}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...producto,
          precio: parseFloat(producto.precio),
          precioDescuento: parseFloat(producto.precioDescuento)
        }),
      });

      if (!response.ok) throw new Error("❌ No se pudo agregar el producto.");

      setMensaje("✅ Producto agregado exitosamente.");
      setProducto({
        nombre: "",
        precio: "",
        precioDescuento: "",
        descripcion: "",
        ubicacion: "",
        imagenUrl: "",
      });
    } catch (err) {
      console.error("Error:", err);
      setMensaje(err.message);
    }
  };

  return (
    <div className="formulario-producto">
      <div className="formulario-producto__contenedor">
        <button className="formulario-producto__cerrar" onClick={cerrarFormulario}>&times;</button>
        <form onSubmit={handleSubmit} className="formulario-producto__formulario">
          <h2 className="formulario-producto__titulo">Agregar Producto</h2>

          <div className="formulario-producto__grupo">
            <label htmlFor="nombre">Nombre del producto</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={producto.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formulario-producto__fila">
            <div className="formulario-producto__grupo">
              <label htmlFor="precio">Precio</label>
              <input
                id="precio"
                name="precio"
                type="number"
                value={producto.precio}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formulario-producto__grupo">
              <label htmlFor="precioDescuento">Precio con descuento</label>
              <input
                id="precioDescuento"
                name="precioDescuento"
                type="number"
                value={producto.precioDescuento}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="formulario-producto__grupo">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={producto.descripcion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formulario-producto__grupo">
            <label htmlFor="ubicacion">Ubicación</label>
            <input
              id="ubicacion"
              name="ubicacion"
              type="text"
              value={producto.ubicacion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formulario-producto__grupo">
            <label htmlFor="imagenUrl">URL de la imagen</label>
            <input
              id="imagenUrl"
              name="imagenUrl"
              type="url"
              value={producto.imagenUrl}
              onChange={handleChange}
              required
            />
          </div>

          {mensaje && <div className="formulario-producto__mensaje">{mensaje}</div>}

          <button type="submit" className="formulario-producto__boton">
            Agregar Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioProducto;