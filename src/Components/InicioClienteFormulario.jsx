import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

let urlApiLogin = "https://app-health-food-back-2.onrender.com/usuario/login";

const InicioClienteFormulario = () => {
  const [form, setForm] = useState({ correoElectronico: "", contrasena: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    fetch(urlApiLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correoElectronico: form.correoElectronico,
        contrasena: form.contrasena,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Credenciales inválidas");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", "true"); {/* Es token no isAuthenticated */}
        localStorage.setItem("usuario", JSON.stringify(data)); 
        Swal.fire("¡Bienvenido!", "Inicio de sesión exitoso", "success");
        navigate("/HomeUser");
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
  };

  return (
    <div className="login-content">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Inicio de Sesión</h2>
        <input
          type="text"
          name="correoElectronico"
          placeholder="Ingresa tu correo"
          onChange={handleChange}
          required
          value={form.correoElectronico}
        />
        <input
          type="password"
          name="contrasena"
          placeholder="Ingresa tu contraseña"
          onChange={handleChange}
          required
          value={form.contrasena}
        />
        <button type="submit" className="login-btn">
          Iniciar Sesión
        </button>
        <div className="extra-links">
          <span>¿Olvidaste tu contraseña?</span>
          <span>
            ¿No tienes una cuenta? <Link to="/RegistroCliente">Regístrate</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default InicioClienteFormulario;
