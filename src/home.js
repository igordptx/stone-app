import React from "react";
import { Link } from "react-router-dom";

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




















 /// import React, { useEffect, useState } from "react";
 /// import { Stone } from "@/entities/Stone";
 /// import { Link } from "react-router-dom";
 /// import { createPageUrl } from "@/utils";
 /// import { Card, CardContent } from "@/components/ui/card";
 /// import { Button } from "@/components/ui/button";

 /// export default function Home() {
   /// const [stones, setStones] = useState([]);

   /// useEffect(() => {
     /// loadStones();
   /// }, []);

   /// const loadStones = async () => {
     /// const data = await Stone.list();
     /// setStones(data);
   /// };

   /// return (
     /// <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 p-6">
       /// <div className="max-w-6xl mx-auto">
         /// <h1 className="text-4xl font-bold text-center mb-8 text-stone-800">Stone Collection</h1>
        
         /// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           /// {stones.map((stone) => (
             /// <Card key={stone.id} className="overflow-hidden hover:shadow-lg transition-shadow">
               /// <div className="relative aspect-square">
                 /// <img
                   /// src={stone.image_url}
                   /// alt={stone.name}
                   /// className="object-cover w-full h-full"
                 /// />
               /// </div>
               /// <CardContent className="p-4">
                 /// <h2 className="text-xl font-semibold mb-2">{stone.name}</h2>
                 /// <Link to={createPageUrl(`StoneDetail?id=${stone.id}`)}>
                   /// <Button className="w-full bg-stone-800 hover:bg-stone-900">
                     /// View Details
                   /// </Button>
                 /// </Link>
               /// </CardContent>
             /// </Card>
           /// ))}
         /// </div>
       /// </div>
     /// </div>
   /// );
 /// }