import React from 'react';
import './ServiceSection.css';

function ServiceSection() {
  return (
    <div className="service-section">
      <div className="container">
        <div className="service-content">
          <div className="service-text">
            <h2>Maximale service op uw aankoop</h2>
            <p>
              Wij bieden onze relaties maximale service zoals een 
              gratis haal- en brengservice en vervangend vervoer, 
              waar dan ook in Nederland. Wie zich bewust is van stijl 
              en klasse én waarde hecht aan service moet beslist een 
              bezoekje brengen aan onze exclusieve showroom.
            </p>
            <a href="/aanbod/" className="btn-occasions">ALLE OCCASIONS</a>
          </div>
          
          <div className="service-image">
            <img 
              src={require('../../assets/images/mercedes.png')} 
              alt="Mercedes" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;