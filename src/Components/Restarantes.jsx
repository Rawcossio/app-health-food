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
            key={restaurante.id_restaurante} // aquí el id correcto
            to={`/restaurante/${restaurante.id_restaurante}`}
            className="Card-restaurantes"
          >
            <h2>{restaurante.nombre}</h2>
            <p>{restaurante.categoria}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurantes;
