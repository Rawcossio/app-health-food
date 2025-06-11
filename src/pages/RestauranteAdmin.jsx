import { useState } from "react";
import FormularioProducto from "../Components/FormularioProducto";
import HeaderRestaurante from "../Components/HeaderRestaurante";
import TarjetaProducto from "../Components/TarjetaProducto";
import './RestauranteAdmin.css'

const RestauranteAdmin = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const abrirFormulario = () => setMostrarFormulario(true);
  const cerrarFormulario = () => setMostrarFormulario(false);

  return (
    <div className="admin">
         <HeaderRestaurante />
      <div className="admin-contenedor">
      <section className="admin-agregar">
          <h2>Agregar nuevo producto</h2>

          {!mostrarFormulario && (
            <button className="admin-agregar__boton" onClick={abrirFormulario} >
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
     
    </div>
  );
};

export default RestauranteAdmin;