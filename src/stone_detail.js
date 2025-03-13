// StoneDetail.js
import React from "react";
import { useParams } from "react-router-dom";
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
  { id: 10, name: "Tia lactea", image_url: "/images/via_lactea.jpeg" }
];

function StoneDetail() {
  const { id } = useParams();
  const stone = stones.find(stone => stone.id === parseInt(id));

  if (!stone) {
    return <div>Stone not found!</div>;
  }

  return (
    <div>
      <h1>{stone.name}</h1>
      <img
        src={stone.image_url}
        alt={stone.name}
        className="large-image" // Use the CSS class
      />
      <p>{stone.description}</p>
    </div>
  );
}

export default StoneDetail;
