import React from "react";
import "./ShowRoom.css";

function ShowRoom() {
  return (
    <div className="showroom-section">
      <div className="showroom-container">
        <h2 className="showroom-title">Verwacht in onze showroom</h2>

        <div className="cars-grid">
          <div className="car-item">
            <h3 className="car-brand">Fiat</h3>
            <p className="car-model">500 0.9 TwinAir Lounge | Panoramak Bluetooth PDC</p>
            <p className="car-details">2016 | 52.460 km</p>
          </div>

          <div className="car-item">
            <h3 className="car-brand">Volkswagen</h3>
            <p className="car-model">Tiguan 1.4 TSI Comfortline| Panoramadak PDC Cruise Contro</p>
            <p className="car-details">2017 | 116.995 km</p>
          </div>

          <div className="car-item">
            <h3 className="car-brand">Mercedes-Benz</h3>
            <p className="car-model">A 250 e AMG Night| Pano Camera Carplay Widescreen Dodeho</p>
            <p className="car-details">2021 | 50.950 km</p>
          </div>

          <div className="car-item">
            <h3 className="car-brand">Audi</h3>
            <p className="car-model">Q5 55 TFSI-e S-Line | Pano HuD B&O ACC Matrix Trkhaak</p>
            <p className="car-details">2021 | 65.350 km</p>
          </div>

          <div className="car-item">
            <h3 className="car-brand">Audi</h3>
            <p className="car-model">Q3 35 TFSI S edition | Camera Carplay Leder Elek. Ach</p>
            <p className="car-details">2021 | 32.750 km</p>
          </div>

          <div className="car-item">
            <h3 className="car-brand">Mercedes-Benz</h3>
            <p className="car-model">A 250 e AMG Night | Pano Multibeam Camera Widescreen Car</p>
            <p className="car-details">2021 | 48.300 km</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowRoom;
