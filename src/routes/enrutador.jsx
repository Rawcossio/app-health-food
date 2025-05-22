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
import Restaurante from "../pages/Restaurante";


let enrutador = createBrowserRouter([
    {
      path:'/',
      element:<HealthFood/>
    },
    {
      path:'/HomeUser',
      element:<HomeUser/>
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
      path:'/restaurante',
      element: <Restaurante/>
    }
  ])

  export default enrutador