import { Link, useNavigate } from "react-router-dom";
import HeaderRegistro from "../Components/HeaderRegistro";
import "./RegistroCliente.css";
import { useEffect, useState } from "react";
import { alertaGenerica, alertaRedireccion } from "../helpers/funciones";

let urlApi = "https://app-health-food-back-2.onrender.com/usuario";

const RegistroCliente = () => {
  const [getNombre, setNombre] = useState("");
  const [getcorreoElectronico, setcorreElectronico] = useState("");
  const [getTelefono, setTelefono] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getConfirmContrasena, setConfirmContrasena] = useState("");
  const redireccion = useNavigate();

  const registrarUsuario = (e) => {
    e.preventDefault();

    if (getContrasena !== getConfirmContrasena) {
      return alertaGenerica("Error", "Las contraseñas no coinciden", "error");
    }

    const nuevoUsuario = {
      nombre: getNombre,
      correoElectronico: getcorreoElectronico,
      telefono: getTelefono,
      contrasena: getContrasena,
      tipoUsuario: "CLIENTE", // poner siempre
    };

    fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    })
      .then(() => {
        alertaRedireccion(
          redireccion,
          "Usuario registrado",
          "Será redireccionado al login",
          "success",
          "/InicioSesion"
        );
      })
      .catch((error) => {
        console.log(error);
        alertaGenerica("Error", "No se pudo registrar", "error");
      });
  };

  return (
    <section className="contenedor">
      <HeaderRegistro />

      <main className="registro-container">
        <section className="registro-form">
          <h2>Crear Cuenta</h2>
          <form onSubmit={registrarUsuario}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              id="nombre"
              placeholder="Ingrese tu nombre"
              required
            />

            {/* Aquí eliminamos el input de usuario */}

            <label htmlFor="telefono">Teléfono:</label>
            <input
              onChange={(e) => setTelefono(e.target.value)}
              type="tel"
              id="telefono"
              placeholder="Ingrese su Teléfono"
              required
            />

            <label htmlFor="email">Correo Electrónico:</label>
            <input
              onChange={(e) => setcorreElectronico(e.target.value)}
              type="email"
              id="email"
              placeholder="Ingrese su Correo Electrónico"
              required
            />

            <label htmlFor="password">Contraseña:</label>
            <input
              onChange={(e) => setContrasena(e.target.value)}
              type="password"
              id="password"
              placeholder="Ingrese una Contraseña"
              required
            />

            <label htmlFor="confirm-password">Confirmar Contraseña:</label>
            <input
              onChange={(e) => setConfirmContrasena(e.target.value)}
              type="password"
              id="confirm-password"
              placeholder="Confirme su Contraseña"
              required
            />

            <button type="submit" className="btn-registrarse">
              Registrarse
            </button>
          </form>

          <p>
            Ya tengo una cuenta{" "}
            <Link className="link-login" to="/InicioSesion">
              Inicio de Sesión
            </Link>
          </p>
        </section>
      </main>
    </section>
  );
};

export default RegistroCliente;
