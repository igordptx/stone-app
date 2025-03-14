// StoneDetail.js
import React from "react";
import { useParams } from "react-router-dom";
//import './StoneDetail.css'; // Ensure this path is correct
import './ModernStyle.css'; // Ensure this path is correct

const stones = [
  { id: 1, 
    name: "Aquabella", 
    image_url: "/images/Aquabella.jpeg",
    description: "https://www.stonecontact.com/aquabella-quartzite/s24773",
    finish: "Custom",
    type: "Quartzite",
    mine: "Rio de Janeiro Mine",
    additionalInfo: "kitchen and bathroom countertops, stairs, building stone, ornamental stone, interior, exterior wall and floor applications, mosaic, waterjet pattern"
  },
  { id: 2, 
    name: "Branco piracema", 
    image_url: "/images/Branco_piracema.jpeg",
    description: "https://www.stonecontact.com/branco-piracema-granite/s3760",
    finish: "Custom",
    type: "Granite",
    mine: "Sao Paulo Mine",
    additionalInfo: "Kitchen and bathroom countertops, monuments, building stone, ornamental stone, stairs, interior, exterior wall and floor applications, mosaic, waterjet pattern, balustrades, fireplaces, columns, wall panels, table tops"
  },
  { id: 3, 
    name: "Branco superiore", 
    image_url: "/images/Branco_superiore.jpeg" ,
    description: "https://www.pbastones.com.br/pt/produtos/bianco-superiore/",
    finish: "Polished",
    type: "Quartzite",
    mine: "Sao Paulo Mine",
    additionalInfo: "Branco superiore is popular for countertops and flooring."
  },
  { id: 4, 
    name: "Cristalo", 
    image_url: "/images/Cristalo.jpeg",
    description: "https://www.msisurfaces.com/quartzite/cristallo/",
    finish: "Polished",
    type: "Quartzite",
    mine: "Sao Paulo Mine",
    additionalInfo: "Cristalo is popular for countertops and flooring., walls."
  },
  { id: 5, 
    name: "Kouros quartzito", 
    image_url: "/images/Kouros_quartzito.jpeg",
    description: "https://www.goianiamarmores.com.br/quartzitos/144/quartzito-kouros/",
    finish: "Polished",
    type: "Quartzite",
    mine: "Sao Paulo Mine",
    additionalInfo: "Kouros quartzito is popular for countertops and flooring, walls."
  },
  { id: 6, 
    name: "Matarazzo", 
    image_url: "/images/Matarazzo.jpeg",
    description: "https://whitestone.com.br/produtos/calacata-matarazzo/",
    finish: "Polished",
    type: "Marble",
    mine: "Sao Paulo Mine",
    additionalInfo: "Matarazzo is marble popular for countertops and flooring."
  },
  { id: 7, 
    name: "Negresco", 
    image_url: "/images/Negresco.jpeg" ,
    description: "https://marinamarmores.com.br/granitos/negresco/",
    finish: "Custom",
    type: "Granite",
    mine: "Sao Paulo Mine",
    additionalInfo: "Negresco is popular for countertops and"
  },
  { id: 8, 
    name: "Tai perla", 
    image_url: "/images/tai_perla.jpeg" ,
    description: "https://www.msisurfaces.com/quartzite/taj-mahal/",
    finish: "Brazil",
    type: "Quartzite",
    mine: "Sao Paulo Mine",
    additionalInfo: "Tai perla is popular for countertops and flooring, durable and easy to clean."
  },
  { id: 9, 
    name: "Verde Sao Francisco", 
    image_url: "/images/Verde_Sao_Francisco.jpeg" ,
    description: "https://brasigran.com.br/produtos/green-sao-francisco/",
    finish: "Custom",
    type: "Granite",
    mine: "Sao Paulo Mine",
    additionalInfo: "Verde Sao Francisco is popular for countertops and flooring."
  },
  { id: 10, 
    name: "Tia lactea", 
    image_url: "/images/via_lactea.jpeg" ,
    description: "https://www.msisurfaces.com/granite/via-lactea/",
    finish: "Polished",
    type: "Granite",
    mine: "Sao Paulo Mine",
    additionalInfo: "Tia lactea is popular for countertops and flooring."
  }
];

function StoneDetail() {
  const { id } = useParams();
  const stone = stones.find(stone => stone.id === parseInt(id));

  if (!stone) {
    return <div>Stone not found!</div>;
  }

  return (
    <div className="stone-detail-container">
      <img
        src={stone.image_url}
        alt={stone.name}
        className="large-image"
      />
      <div className="stone-info">
        <h1>{stone.name}</h1>
        <h3>Finish:</h3>
        <p>{stone.finish}</p>
        <h3>Type:</h3>
        <p>{stone.type}</p>
        <h3>Additional Information:</h3>
        <p>{stone.additionalInfo}</p>
      </div>
    </div>
  );
}
export default StoneDetail;
