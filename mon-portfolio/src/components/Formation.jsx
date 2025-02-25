import React, { useEffect, useState } from "react";
import "../styles/formations.scss";

export const Formation = () => {
  const [formationsData, setFormationsData] = useState([]);

  useEffect(() => {
    fetch('/data/formations.json') 
    .then(response => response.json())
    .then(data => setFormationsData(data))
    .catch(error => console.error('Error loading formations:', error));
  
  }, []);
  

  return (
    <div id="formation">
      <h2>Mes Formations</h2>
      <div className="formations-list">
        {formationsData.map((formation, index) => (
          <div className="formation-card" key={index}>
            <h3>{formation.title}</h3>
            <p>{formation.institution}</p>
            <em>{formation.duration}</em>
            <p><strong>{formation.description}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};
