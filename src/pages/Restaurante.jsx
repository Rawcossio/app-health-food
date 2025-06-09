import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HeaderHome from "../Components/HeaderHome";
import ProductSlider from "../Components/ProductoSlider";
import NumeroCardSlider from "../Components/NumeroCardSlider";
import ProcederPedido from "../Components/ProcederPedido";
import PiePagina from "../Components/PiePagina";
import Company from "../Components/Company";

import { cities, contacto } from "../services/dataBase";

import Instagram from "/instagram.png";
import facebook from "/facebook.png";
import equis from "/equis.png";

import "./Restaurante.css";

const Restaurante = () => {
  const [restaurante, setRestaurante] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const apiRestaurante = `https://app-health-food-back-2.onrender.com/tienda/${id}`;
    fetch(apiRestaurante)
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos del restaurante:", data);
        setRestaurante(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!restaurante) return <p>Cargando restaurante...</p>;

  return (
    <section className="contenedor-principal">
      <div>
        <HeaderHome />
        <main className="main">
          <img src={restaurante.logoUrl} alt={restaurante.nombre} />

          <section className="titulo-restaurante">
            <h1>{restaurante.nombre}</h1>
            <p>5,0(600) {restaurante.categoria}</p>
          </section>
        </main>

        <section className="precio-domicilio">
          <p className="uno">Entrega a domicilio 35-50Min</p>
          <p className="dos">$7.000</p>
        </section>

        <div className="productos">
          <h1>Promociones</h1>
          <section className="Promociones">
            {/* Aquí pasan los productos al slider */}
            <ProductSlider productos={restaurante.productos} />
          </section>

          <h1>Favoritos</h1>
          <section className="favoritos">
            <NumeroCardSlider productos={restaurante.productos}/>
          </section>
        </div>

        <div className="Proceder-pedido">
          <ProcederPedido />
        </div>

        <section className="Footer">
          <h3>Nuestras Principales Ciudades</h3>
          {cities.map((city) => (
            <PiePagina key={city.id} pagina={city} />
          ))}
        </section>

        <section className="Footer-dos">
          {contacto.map((contact) => (
            <Company key={contact.id} soporte={contact} />
          ))}

          <div className="siguenos">
            <h3>SÍGUENOS</h3>
            <div>
              <img src={Instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={equis} alt="equis" />
            </div>
            <p>Recibe ofertas exclusivas en tu correo</p>
            <section>
              <input type="search" placeholder=" ✉️ Ingresa tu correo" />
              <button>Suscribirse</button>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Restaurante;
