import React, { useState, useEffect } from 'react';
import './OccasionHighlights.css';

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
        brand: 'Ferrari',
        model: 'SF90 Spider',
        price: '€ 549.800',
        images: [
          'https://api.akker.nl/storage/images/2489/thumbnails/68RqCR6D29AW9wEwjxfvJNYudk8gbvcgwWqc9bpX.RESIZED_600_400_0.500000_0.500000_80.jpg',
          'https://api.akker.nl/storage/images/2489/thumbnails/amhQy3OhVGAlNaFfYusnwoChgCHaqB4ikYoBYLiw.RESIZED_600_400_0.500000_0.500000_80.jpg',
          'https://api.akker.nl/storage/images/2489/thumbnails/hr1OJ3qQd9C0NEisfYUR7n5tqMph5s0jPkIuCZil.RESIZED_600_400_0.500000_0.500000_80.jpg'
        ]
      },
      {
        id: 2,
        brand: 'Porsche',
        model: '992 Sport Classic',
        price: 'Verkocht',
        images: [
          'https://api.akker.nl/storage/images/2540/thumbnails/t9jQL6QAYI8jIV8Tmc5lxgYZtPtOhs9XlcT0XKuh.RESIZED_600_400_0.500000_0.500000_80.jpg',
          'https://api.akker.nl/storage/images/2540/thumbnails/qJzZccpnQ3FxQS4pTSX01ecKXhHJ5uFHXW97Zk9I.RESIZED_600_400_0.500000_0.500000_80.jpg',
          'https://api.akker.nl/storage/images/2540/thumbnails/htjqAaxDcPZ3bxkHuhBp27l0Q4co5MX9YicLdoq1.RESIZED_600_400_0.500000_0.500000_80.jpg'
        ]
      },
      {
        id: 3,
        brand: 'Audi',
        model: 'RSQ8 Performance (facelift)',
        price: '€ 256.450',
        images: [
          'https://api.akker.nl/storage/images/2445/thumbnails/5i9w35w2UHhiiQlbDNHunWCJtDl9fnTiS27ufRbw.RESIZED_600_400_0.500000_0.500000_80.jpg',
          'https://api.akker.nl/storage/images/2445/thumbnails/oNTQyvBu4bCCn8c9mXE0Bf0xVenyqCn8zaXdAQuF.RESIZED_600_400_0.500000_0.500000_80.jpg',
          'https://api.akker.nl/storage/images/2445/thumbnails/CnFHG2VNR82fUJNyggtUtrbSLYOklqRbnwxumrbR.RESIZED_600_400_0.500000_0.500000_80.jpg'
        ]
      }
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
                  href={`https://www.akker.nl/aanbod/occasion/${occasion.id}/${occasion.brand.toLowerCase()}-${occasion.model.toLowerCase()}/`}
                  className={`occasion-highlight ${
                    activeCardIndex === index ? 'active' : ''
                  }`}
                >
                  <div className="occasion-highlight-main-image">
                    <div
                      className="object-fit-wrapper lazy-container occasion-highlight-main-image"
                      style={{ paddingBottom: '56.25%' }}
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
