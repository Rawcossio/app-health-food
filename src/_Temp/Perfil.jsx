
import './Perfil.css'

function Perfil() {
    return (

        <div className="modal-overlay">
            <div className="modal-content">
                <section className='content-logo'>
                    <img src="public\avatar.png" alt="" />
                    <h2>Datos del Usuario</h2>
                </section>
               
                <table>
                    <tbody>
                        <tr>
                            <td>Nombre:</td>
                            <td>Juan Escobar</td>
                        </tr>
                        <tr>
                            <td>Correo:</td>
                            <td>juan@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Teléfono:</td>
                            <td>3008244233</td>
                        </tr>
                        {/* Añade más filas según tus datos */}
                    </tbody>
                </table>
                <button>Cerrar</button>
            </div>
        </div>
    );
}

export default Perfil

