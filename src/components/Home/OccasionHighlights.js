import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OccasionHighlights.css";

function OccasionHighlights() {
  const [activeCardIndex, setActiveCardIndex] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState({});
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
        power: "150 pk",
        km: "12.250 km",
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
        power: "2018 pk",
        km: "36000 km",
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
        power: "140 pk",
        km: "92.600 km",
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

      // Initialize activeImageIndex with 0 for each car
      const initialIndices = {};
      mockOccasions.forEach((occasion) => {
        initialIndices[occasion.id] = 0;
      });
      setActiveImageIndex(initialIndices);
    }, 500);
  }, []);

  const handleMouseEnter = (index) => {
    setActiveCardIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveCardIndex(1);
  };

  const handleImageChange = (occasionId, imageIndex) => {
    setActiveImageIndex({
      ...activeImageIndex,
      [occasionId]: imageIndex,
    });
  };

  const generateBadge = (text) => {
    if (text === "Verkocht") {
      return <div className="car-badge sold">Verkocht</div>;
    }
    return null;
  };

  return (
    <section className="occasion-highlights-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Recente Occasions</h2>
          <div className="section-subtitle">Ontdek onze selectie</div>
        </div>

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <Row className="g-4">
            {occasions.map((occasion, index) => (
              <Col key={occasion.id} lg={4} md={6} sm={12} className="mb-4">
                <div
                  className={`car-card ${
                    activeCardIndex === index ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="card-image-wrapper">
                    <div className="">
                      <img
                        src={occasion.images[activeImageIndex[occasion.id]]}
                        alt={`${occasion.brand} ${occasion.model}`}
                        className="main-image"
                      />
                      {generateBadge(occasion.price)}

                      {/* Arrow navigation */}
                      <button
                        className="image-nav-arrow arrow-left"
                        onClick={(e) => {
                          e.stopPropagation();
                          const currentIndex = activeImageIndex[occasion.id];
                          const newIndex =
                            currentIndex === 0
                              ? occasion.images.length - 1
                              : currentIndex - 1;
                          handleImageChange(occasion.id, newIndex);
                        }}
                        aria-label="Previous image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </button>

                      <button
                        className="image-nav-arrow arrow-right"
                        onClick={(e) => {
                          e.stopPropagation();
                          const currentIndex = activeImageIndex[occasion.id];
                          const newIndex =
                            currentIndex === occasion.images.length - 1
                              ? 0
                              : currentIndex + 1;
                          handleImageChange(occasion.id, newIndex);
                        }}
                        aria-label="Next image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </button>

                      {/* Dot indicators */}
                      <div className="image-dots">
                        {occasion.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            className={`dot ${
                              activeImageIndex[occasion.id] === imgIndex
                                ? "active"
                                : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageChange(occasion.id, imgIndex);
                            }}
                            aria-label={`Go to image ${imgIndex + 1}`}
                          ></button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="card-content">
                    <div className="card-brand-model">
                      <h3 className="car-brand">{occasion.brand}</h3>
                      <div className="car-model">{occasion.model}</div>
                    </div>

                    <div className="card-details">
                      <div className="details-row">
                        <div className="detail-item">
                          <div className="detail-icon price-icon"></div>
                          <div className="detail-value">{occasion.price}</div>
                        </div>
                      </div>

                      <div className="details-row">
                        <div className="detail-item">
                          <div className="detail-icon power-icon"></div>
                          <div className="detail-value">{occasion.power}</div>
                        </div>

                        <div className="detail-item">
                          <div className="detail-icon km-icon"></div>
                          <div className="detail-value">{occasion.km}</div>
                        </div>
                      </div>
                    </div>

                    <Link to={`/auto/${occasion.id}`} className="view-button">
                      <span>Bekijk</span>
                      <svg
                        className="arrow-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}

        <div className="section-footer">
          <Link to="#/aanbod/" className="view-all-button">
            Bekijk alle occasions
            <svg
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default OccasionHighlights;
