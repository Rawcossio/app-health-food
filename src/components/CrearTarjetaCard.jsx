import React, { useState } from "react";

const CrearTarjetacard = () => {

  /* useState para manejar los datos del formulario: nombre del titular, 
   número de tarjeta, fecha de expiración y CVV*/
    const [form, setForm] = useState({
      nombre: "",
      numero: "",
      fecha: "",
      cvv: "",
    });

    /*Esta función se ejecuta cuando se escribe en un input*/
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    /*Esta función se ejecuta cuando se envía el formulario y tin */
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Tarjeta guardada:", form);
      alert("Tarjeta guardada correctamente");
    };
  
    return (
      <div className="tarjeta-container">
        <h2 className="titulo-tarjeta">Crear Tarjeta</h2>
  
        <div className="card-visual">
          <div className="numero-tarjeta">{form.numero || "0000 0000 0000 00"}</div>
          <div className="card-detalles">
            <div className="card-nombre">{form.nombre || "John Smith"}</div>
            <div className="card-fecha">{form.fecha || "04/28"}</div>
          </div>
        </div>
  
        <form onSubmit={handleSubmit} className="form-tarjeta">
          <label>
            Nombre del titular
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </label>
  
          <label>
            Número de tarjeta
            <input
              type="text"
              name="numero"
              value={form.numero}
              onChange={handleChange}
              required
            />
          </label>
  
          <div className="fila">
            <label>
              Fecha de expiración
              <input
                type="text"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
                required
              />
            </label>
  
            <label>
              CVV
              <input
                type="text"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                required
              />
            </label>
          </div>
  
          <button type="submit" className="btn-guardar">
            Guardar tarjeta
          </button>
        </form>
      </div>
    );
  };
  
  export default CrearTarjetacard;