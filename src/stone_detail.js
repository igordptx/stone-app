// StoneDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import './StoneDetail.css'; // Ensure this path is correct

const stones = [
  { id: 1, name: "Aquabella", image_url: "/images/Aquabella.jpeg" },
  { id: 2, name: "Branco_piracema", image_url: "/images/Branco_piracema.jpeg" },
  { id: 3, name: "Branco_superiore", image_url: "/images/Branco_superiore.jpeg" },
  { id: 4, name: "Cristalo", image_url: "/images/Cristalo.jpeg" },
  { id: 5, name: "Kouros_quartzito", image_url: "/images/Kouros_quartzito.jpeg" },
  { id: 6, name: "Matarazzo", image_url: "/images/Matarazzo.jpeg" },
  { id: 7, name: "Negresco", image_url: "/images/Negresco.jpeg" },
  { id: 8, name: "tai_perla", image_url: "/images/tai_perla.jpeg" },
  { id: 9, name: "Verde_Sao_Francisco", image_url: "/images/Verde_Sao_Francisco.jpeg" },
  { id: 10, name: "via_lactea", image_url: "/images/via_lactea.jpeg" }
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

// import React from "react";
// import { useParams } from "react-router-dom";

// const stones = [
  // { id: 1, name: "Aquabella", image_url: "/images/Aquabella.jpeg" },
  // { id: 2, name: "Branco_piracema", image_url: "/images/Branco_piracema.jpeg" },
// ];

// function StoneDetail() {
  // const { id } = useParams();
  // const stone = stones.find(stone => stone.id === parseInt(id));

  // if (!stone) {
    // return <div>Stone not found!</div>;
  // }

  // return (
    // <div>
      // <h1>{stone.name}</h1>
      // <img src={stone.image_url} alt={stone.name} width="100" />
      // <p>{stone.description}</p>
    // </div>
  // );
// }

// export default StoneDetail;




// /// import React, { useEffect, useState } from "react";
// /// import { Stone } from "@/entities/Stone";
// /// import { Button } from "@/components/ui/button";
// /// import { ArrowLeft } from "lucide-react";
// /// import { Link } from "react-router-dom";
// /// import { createPageUrl } from "@/utils";
// /// import { Badge } from "@/components/ui/badge";

// /// export default function StoneDetail() {
  // /// const [stone, setStone] = useState(null);
  // /// const urlParams = new URLSearchParams(window.location.search);
  // /// const stoneId = urlParams.get('id');

  // /// useEffect(() => {
    // /// if (stoneId) {
      // /// loadStone();
    // /// }
  // /// }, [stoneId]);

  // /// const loadStone = async () => {
    // /// const data = await Stone.get(stoneId);
    // /// setStone(data);
  // /// };

  // /// if (!stone) return null;

  // /// return (
    // /// <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 p-6">
      // /// <div className="max-w-4xl mx-auto">
        // /// <Link to={createPageUrl("Home")}>
          // /// <Button variant="ghost" className="mb-6">
            // /// <ArrowLeft className="w-4 h-4 mr-2" />
            // /// Back to Collection
          // /// </Button>
        // /// </Link>

        // /// <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          // /// <div className="aspect-video relative">
            // /// <img
              // /// src={stone.image_url}
              // /// alt={stone.name}
              // /// className="object-cover w-full h-full"
            // /// />
          // /// </div>
          
          // /// <div className="p-8">
            // /// <div className="flex items-center justify-between mb-4">
              // /// <h1 className="text-3xl font-bold text-stone-800">{stone.name}</h1>
              // /// {stone.category && (
                // /// <Badge variant="outline" className="text-stone-600">
                  // /// {stone.category.replace('_', ' ')}
                // /// </Badge>
              // /// )}
            // /// </div>
            
            // /// <p className="text-lg text-stone-600 leading-relaxed whitespace-pre-wrap">
              // /// {stone.description}
            // /// </p>
          // /// </div>
        // /// </div>
      // /// </div>
    // /// </div>
  // /// );
// /// }