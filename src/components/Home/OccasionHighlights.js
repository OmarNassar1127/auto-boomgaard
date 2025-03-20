import React, { useState, useEffect } from "react";
import "./OccasionHighlights.css";

function OccasionHighlights() {
  // We have 3 cards: indices 0, 1, 2
  // Make the middle card (index 1) active by default
  const [activeCardIndex, setActiveCardIndex] = useState(1);
  const [occasions, setOccasions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated fetch
    const mockOccasions = [
      {
        id: 1,
        brand: "Audi",
        model: "Q5 55 TFSI-e S-Line",
        price: "€ 549.800",
        power: "150 pk", // Added
        km: "12.250 km", // Added km
        images: [
          "https://prod.pictures.autoscout24.net/listing-images/7368632c-e85e-4913-b2b7-1f1ddae6870a_322d6b31-ab53-4faa-8ae4-a51c52b708f2.jpg/720x540.webp",
          "https://prod.pictures.autoscout24.net/listing-images/7368632c-e85e-4913-b2b7-1f1ddae6870a_e9aa86b6-d7d9-4a25-8174-d2355bfe39e9.jpg/720x540.webp",
          "https://prod.pictures.autoscout24.net/listing-images/7368632c-e85e-4913-b2b7-1f1ddae6870a_3006beea-3662-45c6-a0ce-b93b574722fa.jpg/720x540.webp",
        ],
      },
      {
        id: 2,
        brand: "Mercedes",
        model: "A 250",
        price: "Verkocht",
        power: "2018 pk", // Added power
        km: "36000 km", // Added km
        images: [
          "https://prod.pictures.autoscout24.net/listing-images/96069039-e59b-406a-b60f-aea71bf276cf_3a7b0d4d-b1cd-4be6-826e-5b225ab6664e.jpg/720x540.webp",
          "https://prod.pictures.autoscout24.net/listing-images/96069039-e59b-406a-b60f-aea71bf276cf_130c2344-09b8-4b7d-a450-791e36394349.jpg/720x540.webp",
          "https://prod.pictures.autoscout24.net/listing-images/96069039-e59b-406a-b60f-aea71bf276cf_08fc0b6a-8a3b-46cf-8bc2-5775f59bdeff.jpg/720x540.webp",
        ],
      },
      {
        id: 3,
        brand: "Fiat",
        model: "500",
        price: "€ 8.450",
        power: "140 pk", // Added power
        km: "92.600 km", // Added km
        images: [
          "https://prod.pictures.autoscout24.net/listing-images/593602f9-771c-4e57-84ec-20cd82210c02_eaa98a26-6c92-4748-b684-40cfc3bc616d.jpg/720x540.webp",
          "https://prod.pictures.autoscout24.net/listing-images/593602f9-771c-4e57-84ec-20cd82210c02_c93d6e74-2af7-48f0-8059-d1a39d92279a.jpg/720x540.webp",
          "https://prod.pictures.autoscout24.net/listing-images/593602f9-771c-4e57-84ec-20cd82210c02_2edc5ed3-7125-4bd6-a276-fcd280f52e9b.jpg/720x540.webp",
        ],
      },
    ];

    // Simulate loading
    setTimeout(() => {
      setOccasions(mockOccasions);
      setLoading(false);
    }, 500);
  }, []);

  // On mouse enter, activate that card
  const handleMouseEnter = (index) => {
    setActiveCardIndex(index);
  };

  // On mouse leave, revert back to the middle card (index 1)
  const handleMouseLeave = () => {
    setActiveCardIndex(1);
  };

  return (
    <div className="occasion-highlights-section">
      <div className="container">
        <div className="occasion-cards-container">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            occasions.map((occasion, index) => (
              <div
                key={occasion.id}
                className="tile-grid-item"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={`https://www.akker.nl/aanbod/occasion/${
                    occasion.id
                  }/${occasion.brand.toLowerCase()}-${occasion.model.toLowerCase()}/`}
                  className={`occasion-highlight ${
                    activeCardIndex === index ? "active" : ""
                  }`}
                >
                  <div className="occasion-highlight-main-image">
                    <div
                      className="object-fit-wrapper lazy-container occasion-highlight-main-image"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <img
                        className="lazyloaded"
                        data-src={occasion.images[0]}
                        src={occasion.images[0]}
                        alt={`${occasion.brand} ${occasion.model}`}
                      />
                    </div>
                  </div>

                  <div className="occasion-highlight-wrapper">
                    <div className="occasion-highlight-info">
                      <h3>
                        <span className="occasion-highlight-brand">
                          {occasion.brand}
                        </span>
                        <span className="occasion-highlight-model">
                          {occasion.model}
                        </span>
                      </h3>
                      <div className="occasion-highlight-details">
                        <span className="occasion-highlight-price">
                          {occasion.price}
                        </span>
                        {activeCardIndex === index && occasion.power && (
                          <span className="occasion-highlight-power">
                            {occasion.power}
                          </span>
                        )}
                        {activeCardIndex === index && occasion.km && (
                          <span className="occasion-highlight-km">
                            {occasion.km}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Additional images (visible only if .active) */}
                    <div className="occasion-highlight-images">
                      <div className="occasion-highlight-images-image">
                        <div className="object-fit-wrapper lazy-container">
                          <img
                            className="lazyloaded"
                            data-src={occasion.images[1]}
                            src={occasion.images[1]}
                            alt={`${occasion.brand} ${occasion.model} - additional 1`}
                          />
                        </div>
                      </div>
                      <div className="occasion-highlight-images-image">
                        <div className="object-fit-wrapper lazy-container">
                          <img
                            className="lazyloaded"
                            data-src={occasion.images[2]}
                            src={occasion.images[2]}
                            alt={`${occasion.brand} ${occasion.model} - additional 2`}
                          />
                        </div>
                      </div>
                    </div>

                    <span className="occasion-highlight-view">
                      Bekijk
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 1024 1024"
                        >
                          <path d="M1024 512L801.2 290v180.4H0v88.8h801.2V734z"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default OccasionHighlights;
