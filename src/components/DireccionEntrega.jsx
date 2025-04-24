import React from "react";

const DireccionEntrega = () => {
    const direcciones = [
      { id: 1, titulo: "Casa", detalle: "Cra 74a # 30-31", icono: "/casa.png" },
      { id: 2, titulo: "Oficina", detalle: "Cll 30 # 30-35", icono: "/casa.png" },
      { id: 3, titulo: "Casa padres", detalle: "Cra 45 # 30-35", icono: "/casa.png" },
    ];
  
    return (
      <div className="metodo-container">
        <h2 className="titulo">Dirección de Entrega</h2>
        <div className="tarjetas">
          {direcciones.map((direccion) => (
            <div className="fila-metodo" key={direccion.id}>
              <div className="icono-nombre">
                <img src={direccion.icono} alt={direccion.titulo} className="icono-img" />
                <div>
                  <div className="nombre">{direccion.titulo}</div>
                  <div className="detalle">{direccion.detalle}</div>
                </div>
              </div>
              <input type="radio" name="direccion" />
            </div>
          ))}
        </div>
        <button className="btn-agregar">Agregar nueva dirección</button>
      </div>
    );
  };
  
  export default DireccionEntrega;