import React from "react";
import { Link } from "react-router-dom";
import './StoneDetail.css'; // Ensure this path is correct

const stones = [
  { id: 1, name: "Aquabella", image_url: "/images/Aquabella.jpeg" },
  { id: 2, name: "Branco piracema", image_url: "/images/Branco_piracema.jpeg" },
  { id: 3, name: "Branco superiore", image_url: "/images/Branco_superiore.jpeg" },
  { id: 4, name: "Cristalo", image_url: "/images/Cristalo.jpeg" },
  { id: 5, name: "Kouros quartzito", image_url: "/images/Kouros_quartzito.jpeg" },
  { id: 6, name: "Matarazzo", image_url: "/images/Matarazzo.jpeg" },
  { id: 7, name: "Negresco", image_url: "/images/Negresco.jpeg" },
  { id: 8, name: "Tai perla", image_url: "/images/tai_perla.jpeg" },
  { id: 9, name: "Verde Sao Francisco", image_url: "/images/Verde_Sao_Francisco.jpeg" },
  { id: 10, name: "Via lactea", image_url: "/images/via_lactea.jpeg" }
];

function Home() {
  return (
    <div>
      <h1>Stone Collection</h1>
      <ul>
        {stones.map((stone) => (
          <li key={stone.id}>
            <Link to={`/stone/${stone.id}`}>
            <img src={stone.image_url} alt={stone.name} width="100" />
              <h2>{stone.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
