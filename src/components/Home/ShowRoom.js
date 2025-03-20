import React from "react";
import "./ShowRoom.css";

function ShowRoom() {
  return (
    <div className="showroom-section">
      <div className="showroom-container">
        <h2 className="showroom-title">Verwacht in onze showroom</h2>

        <div className="cars-grid">
          {/* Row 1 */}
          <div className="car-item">
            <h3 className="car-brand">Audi</h3>
            <p className="car-model">Q8 60 TFSI e quattro (facelift)</p>
            <p className="car-details">2025 | 1.350 km</p>
          </div>

          <div className="car-item">
            <h3 className="car-brand">Audi</h3>
            <p className="car-model">Q8 60 TFSI e quattro (facelift)</p>
            <p className="car-details">2025 | 1.100 km</p>
          </div>

          <div className="car-item">
            <h3 className="car-brand">Audi</h3>
            <p className="car-model">RS5 Avant Johann ABT Signature Edition</p>
            <p className="car-model-extra">(Nr. 17 van 64)</p>
            <p className="car-details">2021 | 14.730 km</p>
          </div>

          {/* Row 2 */}
          <div className="car-item">
            <h3 className="car-brand">Audi</h3>
            <p className="car-model">
              RSQ8 ABT Signature Edition (nr. 12 van 96)
            </p>
            <p className="car-details">2022 | 17.700 km</p>
          </div>

          <div className="car-item">
            <h3 className="car-brand">Porsche</h3>
            <p className="car-model">991 Targa 4 GTS</p>
            <p className="car-details">2018 | 33.150 km</p>
          </div>

          <div className="car-item">
            <h3 className="car-brand">Porsche</h3>
            <p className="car-model">Panamera Turbo S E-Hybrid Sport</p>
            <p className="car-model-extra">Turismo SportDesign</p>
            <p className="car-details">2020 | 67.300 km</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowRoom;
