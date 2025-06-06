import { createBrowserRouter } from "react-router-dom";
import HealthFood from '../pages/HealthFood';
import HomeUser from '../pages/HomeUser';
import Roles from '../pages/Roles';
import InicioRepartidor from "../pages/InicioRepartidor";
import RegistroRepartidor from "../pages/RegistroRepartidor";
import InicioSesionRestaurante from "../pages/InicioSesionRestaurante";
import RegistroRestaurante from "../pages/RegistroRestaurante";
import RolesRegistro from "../pages/RolesRegistro";
import VistaProducto from "../pages/VistaProducto";
import Pago from "../pages/Pago";
import Carrito from "../pages/Carrito";
import Direcciones from "../Components/Direcciones";
import AgregarDireccion from "../Components/AgregarDireccion";
import MetodoPago from "../Components/MetodoPago";
import Restaurante from "../pages/Restaurante";
<<<<<<< HEAD
import AgregarTarjeta from "../Components/AgregarTarjeta";
=======
import InicioSesionCliente from "../pages/InicioSesionCliente";
import RegistroCliente from "../pages/RegistroCliente";
import ProtectedRoute from "./ProtectedRoute";
>>>>>>> affd0a422fa1c7a9ffefb231db490a8296a76f97


let enrutador = createBrowserRouter([
    {
      path:'/',
      element:<HealthFood/>
    },
    {
      path:'/HomeUser',
<<<<<<< HEAD
      element:<HomeUser/>,
=======
      element:<ProtectedRoute>
        <HomeUser/>
      </ProtectedRoute>
>>>>>>> affd0a422fa1c7a9ffefb231db490a8296a76f97
    },
    {
      path:'/Roles',
      element:<Roles/>
    },
    {
      path:'/RolesRegistro',
      element:<RolesRegistro/>
    },
    {
      path:'/InicioRepartidor',
      element:<InicioRepartidor/>
    },
    {
      path:'/RegistroRepartidor',
      element:<RegistroRepartidor/>
    },
    {
      path:'/InicioRestaurante',
      element:<InicioSesionRestaurante/>
    },
    {
      path:'/RegistroRestaurante',
      element:<RegistroRestaurante/>
    },
    {
      path:'/vistaproducto',
      element:<VistaProducto/>
    },
    {
      path:'/pago',
      element:<Pago/>
    },
    {
      path:'/carrito',
      element:<Carrito/>
    },
    {
      path:'/metodopago',
      element:<MetodoPago/>
    },
    {
      path:'/direccion',
      element: <Direcciones/>
    },
    {
      path:'/agregar-direccion',
      element: <AgregarDireccion/>
    },

    { 
      path:'/restaurante',
      element: <Restaurante/>
    },
    {
      path:'/agregar-tarjeta',
      element: <AgregarTarjeta/>
    },
    {
      path: '/producto/:id', // Cambiar esto para incluir el parámetro id
      element: <VistaProducto />
    }
    
  ])

  export default enrutador