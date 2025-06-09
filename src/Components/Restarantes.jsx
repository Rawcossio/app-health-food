import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Restaurantes = () => {
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

  return (
    <div>
      <h1>Lista de Restaurantes</h1>
      <div className="lista-restaurantes">
        {restaurantes.map((restaurante) => (
          <Link
            key={restaurante.id_restaurante}
            to={`/restaurante/${restaurante.id_restaurante}`}
            className="Card-restaurantes"
          >
            <section className="Card-restaurantes">
              <div className="Img-restaurantes">
                <img src={restaurante.portadaUrl} alt={restaurante.nombre} />
                <button>{restaurante.oferta || "10%"} off</button>
                <p>🕓Fast</p>
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
