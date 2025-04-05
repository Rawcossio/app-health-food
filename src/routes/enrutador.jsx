import { createBrowserRouter } from "react-router-dom";
import HealthFood from '../pages/HealthFood';
import HomeUser from '../pages/HomeUser';
import Roles from '../pages/Roles';
import InicioRepartidor from "../pages/InicioRepartidor";
import RegistroRepartidor from "../pages/RegistroRepartidor";
import InicioSesionRestaurante from "../pages/InicioSesionRestaurante";
import RegistroRestaurante from "../pages/RegistroRestaurante";
import RolesRegistro from "../pages/RolesRegistro";
import Orden from "../pages/Orden";


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
      path:'/Orden',
      element:<Orden/>
    }
  ])

  export default enrutador