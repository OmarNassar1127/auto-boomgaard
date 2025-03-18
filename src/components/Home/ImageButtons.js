import React from "react";
import "./ImageButtons.css";

function ImageButtons() {
  return (
    <div className="image-buttons-section bg-gradient-hard-to-dark no-margin-bottom">
      <div className="col-row">
        <div className="col col-24 col-10-tablet-m col-l-2-tablet-m col-8-desktop-s col-l-4-desktop-s">
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
        <div className="col col-24 margin-top-1 col-10-tablet-m margin-top-0-tablet-m col-8-desktop-s">
          <div className="col-wrapper">
            <div className="item image image-button">
              <img
                src="https://www.akker.nl/imageresizer/w1200q90/wp-content/uploads/2019/08/DGT-Closeup-bijna-inhalen.jpg"
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
