import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alertaGenerica, alertaRedireccion } from "../helpers/funciones";

const Registrarse = () => {
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    categoria: "",
    logoUrl: "",
    portadaUrl: "",
    correoElectronico: "",
    contrasena: "",
  });

  const [mensaje, setMensaje] = useState(null);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formulario.nombre ||
      !formulario.direccion ||
      !formulario.telefono ||
      !formulario.categoria ||
      !formulario.logoUrl ||
      !formulario.portadaUrl ||
      !formulario.correoElectronico ||
      !formulario.contrasena
    ) {
      setMensaje(alertaGenerica("error", "Completa todos los campos", "error"));
      return;
    }

    const datosTienda = {
      ...formulario,
      pedidos: [],
      productos: [],
      categorias: null,
    };

    try {
      const res = await fetch(
        "https://app-health-food-back-2.onrender.com/tienda",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datosTienda),
        }
      );

      if (!res.ok) {
        throw new Error("Error al registrar la tienda");
      }

      const data = await res.json();

      localStorage.setItem("id_restaurante", data.id_restaurante);

      alertaRedireccion(
        (url) => navigate(url),
        "✅ Registro exitoso",
        "Serás redirigido al inicio de sesión...",
        "success",
        "/InicioRestaurante"
      );
    } catch (error) {
      setMensaje("❌ Algo salió mal. Intenta de nuevo.");
    }
  };

  return (
    <form className="formulario-registro" onSubmit={handleSubmit}>
      <h2>Registra tu tienda en NutriGo</h2>

      <input name="nombre" placeholder="Nombre del restaurante" value={formulario.nombre} onChange={handleChange} />
      <input name="direccion" placeholder="Dirección" value={formulario.direccion} onChange={handleChange} />
      <input name="telefono" placeholder="Teléfono" value={formulario.telefono} onChange={handleChange} />
      <input name="categoria" placeholder="Categoría (ej: Mexicana)" value={formulario.categoria} onChange={handleChange} />
      <input name="logoUrl" placeholder="URL del logo" value={formulario.logoUrl} onChange={handleChange} />
      <input name="portadaUrl" placeholder="URL de la portada" value={formulario.portadaUrl} onChange={handleChange} />
      <input name="correoElectronico" placeholder="Correo electrónico" value={formulario.correoElectronico} onChange={handleChange} />
      <input type="password" name="contrasena" placeholder="Contraseña" value={formulario.contrasena} onChange={handleChange} />

      <button className="btn-registrarse" type="submit">¡Comencemos!</button>

      <p>¿Ya tienes cuenta? <strong>Inicia Sesión</strong></p>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </form>
  );
};

export default Registrarse;
