import React, { useState } from "react";

const CrearDireccionCard = () => {
    const [form, setForm] = useState({
      nombre: "",
      direccion: "",
    });
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Dirección guardada:", form);
      // Aquí podrías hacer un POST al backend o actualizar el estado global
      alert("¡Dirección guardada exitosamente!");
    };
  
    return (
      <div className="metodo-container">
        <h2 className="titulo">Agregar nueva dirección</h2>
        <form onSubmit={handleSubmit} className="form-direccion">
          <label className="label">
          <img src="casa.png" alt="imagen" />
            Nombre de la dirección
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Ej: Casa, Oficina..."
              required
            />
          </label>
  
          <label className="label">
            Dirección
            <input
              type="text"
              name="direccion"
              value={form.direccion}
              onChange={handleChange}
              placeholder="Ej: Cra 74a # 30-31"
              required
            />
          </label>
  
          <button type="submit" className="btn-agregar">
            Guardar dirección
          </button>
        </form>
      </div>
    );
  };
  
  export default CrearDireccionCard;