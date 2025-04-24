import React from 'react'
import { FaMapMarkerAlt, FaMoneyCheckAlt, FaHeadset, FaUser } from 'react-icons/fa';

const HeaderMetodoPago = () => {
    return (
      <header>
        <div className="logo">
          <span className="logo-text">Nutri</span>
          <img src="go.png" alt="Logo" className="logo-icon" />
        </div>

        <div className="nav-links">
          <div className="nav-item">
            <FaMapMarkerAlt /> <span>Dirección de envío</span>
          </div>
          <div className="nav-item">
            <FaMoneyCheckAlt /> <span>Métodos de Pago</span>
          </div>
          <div className="nav-item">
            <FaHeadset /> <span>Contáctenos</span>
          </div>
          <div className="nav-item">
            <FaUser /> <span>Mi Perfil</span>
          </div>
        </div>
      </header>
    );
}

export default HeaderMetodoPago