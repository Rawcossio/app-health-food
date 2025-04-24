import React from "react";

import tarjeta from "/tarjetas-bancarias.png";
import apple from "/apple-pay.png";
import paypal from "/paypal.png";
import google from "/google-play.png";

const MetodoPagoCom = () => {
    const metodos = [
      { id: 1, nombre: "*** *** ***43", icono: tarjeta },
      { id: 2, nombre: "Apple Play", icono: apple },
      { id: 3, nombre: "Paypal", icono: paypal },
      { id: 4, nombre: "Google Play", icono: google },
    ];

    return (
        <div className="metodo-container">
          <h2 className="titulo">Metodo de Pago</h2>
          <div className="tarjetas">
            {metodos.map((metodo) => (
              <div className="fila-metodo" key={metodo.id}>
                <div className="icono-nombre">
                  <img src={metodo.icono} alt={metodo.nombre} className="icono-img" />
                  <span className="nombre">{metodo.nombre}</span>
                </div>
                <input type="radio" name="metodo" />
              </div>
            ))}
          </div>
          <button className="btn-agregar">Agregar nueva Tarjeta</button>
        </div>
    )
    
}

export default MetodoPagoCom;

