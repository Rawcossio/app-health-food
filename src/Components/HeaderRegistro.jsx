
import { FaMapMarkerAlt, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderRegistro =() =>{

    return(
    <header className="header">
                <div className="header-left">
                    <Link className="logo-text" to="/">Nutri</Link>
                    <img src="public\go.png" alt="Logo" className="logo-img" />
                </div>
                <div className="header-right">
                    <div className="header-item">
                        <span className="bold">Entregar en:</span>
                        <FaMapMarkerAlt className="icon" />
                        <span>Ubicación Medellín, Antioquia</span>
                    </div>
                    <div className="header-item">
                        <FaSearch className="icon" />
                        <input type="text" placeholder='Buscar Comida' />
                    </div>
                    <Link className="inicio-btn" to="/InicioSesion">
                        <FaUser className="icon" />
                        Iniciar Sesión
                    </Link>
                </div>
            </header>
    )
}

export default HeaderRegistro