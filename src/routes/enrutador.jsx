import { createBrowserRouter } from "react-router-dom";
import HealthFood from '../pages/HealthFood'
import HomeUser from '../pages/HomeUser'
import Roles from '../pages/Roles'
import InicioRepartidor from "../pages/InicioRepartidor";
import Registrarse from "../Components/Registrarse";
import RegistroRepartidor from "../pages/RegistroRepartidor";
import InicioSesionRestaurante from "../pages/InicioSesionRestaurante";


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
    }
  ])

  export default enrutador