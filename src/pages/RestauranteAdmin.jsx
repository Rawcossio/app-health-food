import { useState } from "react";
import FormularioProducto from "../Components/FormularioProducto";
import HeaderRestaurante from "../Components/HeaderRestaurante";
import TarjetaProducto from "../Components/TarjetaProducto";

const RestauranteAdmin = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const abrirFormulario = () => setMostrarFormulario(true);
  const cerrarFormulario = () => setMostrarFormulario(false);

  return (
    <div className="admin">
      <HeaderRestaurante />
      <section className="admin-agregar">
          <h2>Agregar nuevo producto</h2>

          {!mostrarFormulario && (
            <button onClick={abrirFormulario} className="admin-agregar__boton">
              + Agregar producto
            </button>
          )}

          {mostrarFormulario && (
            <FormularioProducto cerrarFormulario={cerrarFormulario} />
          )}
        </section>

      <main className="admin-contenido">
        <section className="admin-productos">
          <h2>Mis productos</h2>
          <TarjetaProducto modoAdmin={true} />
        </section>


      </main>
    </div>
  );
};

export default RestauranteAdmin;