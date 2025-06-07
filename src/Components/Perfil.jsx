
import { useEffect, useState } from 'react';
import './Perfil.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Perfil({onClose}) {

    

        const navigate = useNavigate()

        const cerrarSesion = () =>{
            Swal.fire({
                title: '¿Deseas cerrar sesión?',
                icon: 'warning',
                showCloseButton: true,
                confirmButtonText: 'sí, cerrar',
                cancelButtonText: 'Cancelar'
            }).then((result) =>{
                if (result.isConfirmed) {
                    //Eliminar datos del local
                    localStorage.removeItem('token')
                    localStorage.removeItem('usuario')

                    //redirigir al login
                    navigate('/InicioSesion')
                }
            })
        }
    

    const [usuario, setUsuario] = useState(null);

    useEffect(() =>{
        const usuarioGuardado = localStorage.getItem('usuario')
        if (usuarioGuardado) {
            setUsuario(JSON.parse(usuarioGuardado))
        }
    }, [])

    if (!usuario) return null

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
                            <th>Nombre</th>
                            <td>{usuario.nombre}</td>
                        </tr>
                        <tr>
                            <th>Correo</th>
                            <td>{usuario.correo}</td>
                        </tr>
                        <tr>
                            <th>Teléfono</th>
                            <td>{usuario.telefono}</td>
                        </tr>
                        <tr>
                            <th>Contraseña</th>
                            <td>{usuario.contraseña}</td>
                        </tr>
                    </tbody>
                </table>
            
                <section className='contenedor-boton'>
                     <button onClick={cerrarSesion}>
                    Cerrar
                </button>

                <button onClick={onClose} >
                    Bolver a inicio
                </button>
                </section>
            </div>
        </div>
    );
}

export default Perfil

