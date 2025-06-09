import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Restaurantes = ({ inicio = 0, cantidad = 4 }) => {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    fetch(`https://app-health-food-back-2.onrender.com/tienda`)
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Data de la API:", data);
        setRestaurantes(data);
      })
      .catch((err) => console.error(err));
  }, []);

    const restaurantesAMostrar = restaurantes.slice(inicio, inicio + cantidad);


  return (
    <div>
      <div className="lista-restaurantes">
        {restaurantes((restaurante) => (
          <Link
            key={restaurante.id_restaurante}
            to={`/restaurante/${restaurante.id_restaurante}`}
            className="Card-restaurantes">
            <section>
              <div className="Img-restaurantes">
                <img src={restaurante.portadaUrl} alt={restaurante.nombre} />
                <button>{restaurante.oferta || "10%"} off</button>
              </div>

              <div className="Card-restaurante-estrella">
                <section className="Card-estrella">
                  <img src={restaurante.logo} alt="logo restaurante" />
                  <h3>{restaurante.nombre}</h3>
                  <p>⭐{restaurante.estrellas || "4.5"}</p>
                </section>
                <button>{restaurante.boton || "Ver más"}</button>
              </div>
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurantes;
