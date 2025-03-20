import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./CarDetail.css";

function CarDetail() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Mock data for the selected vehicle
    setTimeout(() => {
      // Find the vehicle with the matching ID
      // In a real app, you'd fetch this from an API
      const mockVehicles = [
        {
          id: 1,
          brand: "Fiat",
          model: "500 0.9 TwinAir Lounge",
          price: "€ 8.995",
          year: 2016,
          mileage: "52.460 km",
          images: [
            "https://prod.pictures.autoscout24.net/listing-images/593602f9-771c-4e57-84ec-20cd82210c02_eaa98a26-6c92-4748-b684-40cfc3bc616d.jpg/480x360.webp",
            "https://prod.pictures.autoscout24.net/listing-images/593602f9-771c-4e57-84ec-20cd82210c02_0527ac7b-b750-4a5e-b415-d54d58c1c03b.jpg/720x540.webp",
            "https://prod.pictures.autoscout24.net/listing-images/593602f9-771c-4e57-84ec-20cd82210c02_c93d6e74-2af7-48f0-8059-d1a39d92279a.jpg/720x540.webp",
            "https://prod.pictures.autoscout24.net/listing-images/593602f9-771c-4e57-84ec-20cd82210c02_88ad516f-9e92-4ba6-a22b-ec255f6ed39b.jpg/720x540.webp",
            "https://prod.pictures.autoscout24.net/listing-images/593602f9-771c-4e57-84ec-20cd82210c02_2edc5ed3-7125-4bd6-a276-fcd280f52e9b.jpg/720x540.webp",
            "https://prod.pictures.autoscout24.net/listing-images/593602f9-771c-4e57-84ec-20cd82210c02_9f7caa3b-c4e7-4aaa-a59a-dd8568a1b18c.jpg/720x540.webp",
          ],
          status: "",
          favorite: false,
          specifications: {
            transmission: "Handgeschakeld",
            fuel: "Benzine",
            power: "85 pk",
            engine: "0.9L TwinAir",
            doors: "3",
            seats: "4",
            color: "Wit",
            bodyType: "Hatchback",
            emissions: "90 g/km",
            energyLabel: "A",
          },
          features: [
            "Panoramadak",
            "Bluetooth",
            "Parkeersensoren",
            "Airconditioning",
            "Cruise Control",
            "Elektrische ramen",
            "Start/Stop Systeem",
            "ABS",
            "ESP",
            "Centrale vergrendeling",
            "Isofix",
            "Boordcomputer",
          ],
          description:
            "Deze Fiat 500 TwinAir Lounge is een compacte en zuinige stadsauto met stijl. De wagen is uitgerust met verschillende premium functies zoals het panoramadak en parkeersensoren. De zuinige TwinAir motor zorgt voor een dynamische maar economische rijervaring. De auto verkeert in uitstekende staat en heeft een volledige onderhoudshistorie.",
          history:
            "De auto is altijd netjes onderhouden volgens schema bij de officiële Fiat dealer. Recent is een grote onderhoudsbeurt uitgevoerd waarbij de distributieriem is vervangen. Alle facturen en onderhoudsboekjes zijn aanwezig.",
        },
        // Other vehicles would be here in a real implementation
      ];

      const foundVehicle =
        mockVehicles.find((v) => v.id === parseInt(id)) || mockVehicles[0];
      setVehicle(foundVehicle);
      setLoading(false);
    }, 600);
  }, [id]);

  if (loading) {
    return (
      <div className="car-detail-page">
        <div className="detail-loading-container">
          <div className="loading-spinner"></div>
          <div className="loading-text">Voertuiggegevens laden...</div>
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="car-detail-page">
        <div className="container">
          <div className="not-found-container">
            <h2>Voertuig niet gevonden</h2>
            <p>Het voertuig waar je naar zoekt is niet beschikbaar.</p>
            <Link to="/aanbod/" className="back-button">
              Terug naar zoekresultaten
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="car-detail-page">
      {/* We don't need the navbar placeholder anymore since Header component is already included in App.js */}

      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> /<Link to="/aanbod/">Occasions</Link> /
          <span>{`${vehicle.brand} ${vehicle.model}`}</span>
        </div>

        {/* Car title section */}
        <div className="car-title-section">
          <div className="car-title-container">
            <h1>
              <span className="car-brand">{vehicle.brand}</span>
              <span className="car-model">{vehicle.model}</span>
            </h1>
            <div className="car-price">{vehicle.price}</div>
          </div>
        </div>

        {/* Image gallery */}
        <div className="image-gallery-section">
          <div className="main-image-container">
            <img
              src={vehicle.images[activeImage]}
              alt={`${vehicle.brand} ${vehicle.model}`}
              className="main-image"
            />
          </div>
          <div className="thumbnail-container">
            {vehicle.images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${activeImage === index ? "active" : ""}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Content grid */}
        <div className="content-grid">
          <div className="main-content">
            {/* Key specs */}
            <div className="section key-specs">
              <h2>Kerngegevens</h2>
              <div className="specs-grid">
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div className="spec-detail">
                    <div className="spec-label">Bouwjaar</div>
                    <div className="spec-value">{vehicle.year}</div>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className="spec-detail">
                    <div className="spec-label">Kilometerstand</div>
                    <div className="spec-value">{vehicle.mileage}</div>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div className="spec-detail">
                    <div className="spec-label">Brandstof</div>
                    <div className="spec-value">
                      {vehicle.specifications.fuel}
                    </div>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <div className="spec-detail">
                    <div className="spec-label">Transmissie</div>
                    <div className="spec-value">
                      {vehicle.specifications.transmission}
                    </div>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="11 5 6 9 2 6 2 13 6 16 11 12 18 17 22 13 22 6 18 9 11 5"></polygon>
                    </svg>
                  </div>
                  <div className="spec-detail">
                    <div className="spec-label">Vermogen</div>
                    <div className="spec-value">
                      {vehicle.specifications.power}
                    </div>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <div className="spec-detail">
                    <div className="spec-label">Kleur</div>
                    <div className="spec-value">
                      {vehicle.specifications.color}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="section description">
              <h2>Omschrijving</h2>
              <p>{vehicle.description}</p>
            </div>

            {/* Vehicle history */}
            <div className="section history">
              <h2>Onderhoudshistorie</h2>
              <p>{vehicle.history}</p>
            </div>

            {/* Features */}
            <div className="section features">
              <h2>Uitrusting</h2>
              <div className="features-grid">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sidebar">
            {/* Contact box */}
            <div className="contact-box">
              <h3>Interesse in deze auto?</h3>
              <p>
                Neem direct contact met ons op voor meer informatie of een
                proefrit.
              </p>

              <button
                className="contact-button"
                onClick={() => setShowContact(!showContact)}
              >
                Contact opnemen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </button>

              {showContact && (
                <div className="contact-details">
                  <div className="contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>+31 (0)20 123 4567</span>
                  </div>
                  <div className="contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>info@autoverkoop.nl</span>
                  </div>
                  <div className="contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Hoofdstraat 123, Amsterdam</span>
                  </div>
                </div>
              )}
            </div>

            {/* Technical specs */}
            <div className="technical-specs">
              <h3>Technische specificaties</h3>
              <div className="specs-list">
                <div className="spec-row">
                  <div className="spec-name">Carrosserie</div>
                  <div className="spec-value">
                    {vehicle.specifications.bodyType}
                  </div>
                </div>
                <div className="spec-row">
                  <div className="spec-name">Motor</div>
                  <div className="spec-value">
                    {vehicle.specifications.engine}
                  </div>
                </div>
                <div className="spec-row">
                  <div className="spec-name">Deuren</div>
                  <div className="spec-value">
                    {vehicle.specifications.doors}
                  </div>
                </div>
                <div className="spec-row">
                  <div className="spec-name">Zitplaatsen</div>
                  <div className="spec-value">
                    {vehicle.specifications.seats}
                  </div>
                </div>
                <div className="spec-row">
                  <div className="spec-name">CO2-uitstoot</div>
                  <div className="spec-value">
                    {vehicle.specifications.emissions}
                  </div>
                </div>
                <div className="spec-row">
                  <div className="spec-name">Energielabel</div>
                  <div className="spec-value">
                    {vehicle.specifications.energyLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="back-section">
          <Link to="/aanbod/" className="back-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Terug naar zoekresultaten
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
