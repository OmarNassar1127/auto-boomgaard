import React from "react";
import "./ImageButtons.css";

function ImageButtons() {
  return (
    <div className="image-buttons-section bg-gradient-hard-to-dark no-margin-bottom">
      <div className="col-row">
        <div className="col">
          <div className="col-wrapper">
            <div className="item image image-button">
              <img
                src="https://www.akker.nl/imageresizer/w1200q90/wp-content/uploads/2019/08/DGT-Droneshot-Bovenaanzicht-bocht-vanuit-tunnel.jpg"
                alt="Nieuws & media"
              />
              <a href="/nieuws-media/" className="image-button-box">
                <div className="image-button-inner">
                  <div className="image-button-title">Nieuws & media</div>
                  <div className="image-button-subtitle"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col-wrapper">
            <div className="item image image-button">
              <img
                src="https://prod.pictures.autoscout24.net/listing-images/0df962f4-d89b-4063-83b5-cb8493de7f79_ae145c77-7a3e-488d-9ff5-b69ef4665209.jpg/480x360.webp"
                alt="Over Auto Boomgaard"
              />
              <a href="/over-vd-akker/" className="image-button-box">
                <div className="image-button-inner">
                  <div className="image-button-title">Over Auto Boomgaard</div>
                  <div className="image-button-subtitle"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageButtons;
