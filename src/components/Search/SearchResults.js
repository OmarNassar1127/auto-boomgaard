import React, { useState, useEffect } from 'react';
import './SearchResults.css';

function SearchResults() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('newest');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    brands: [],
    status: []
  });

  useEffect(() => {
    // Mock data for vehicles
    const mockVehicles = [
      {
        id: 1,
        brand: 'Audi',
        model: 'RS7 Sportback',
        price: '€ 189.500',
        year: 2024,
        mileage: '5.000 km',
        image: 'https://www.autozeitung.de/assets/styles/article_image/public/field/image/audi-rs7-sportback-2023-test-01.jpg',
        status: '',
        favorite: false
      },
      {
        id: 2,
        brand: 'Bentley',
        model: 'Continental GT',
        price: '€ 259.800',
        year: 2023,
        mileage: '12.500 km',
        image: 'https://static.automarket.ro/img/db/22/41/35/ho-bentley-continental-gt-v8-c-1173358.jpg',
        status: '',
        favorite: true
      },
      {
        id: 3,
        brand: 'Porsche',
        model: '911 Turbo S',
        price: '€ 299.500',
        year: 2023,
        mileage: '8.000 km',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2021-porsche-911-turbo-s-coupe-104-1582929872.jpg',
        status: 'Verkocht',
        favorite: false
      },
      {
        id: 4,
        brand: 'Audi',
        model: 'e-tron GT',
        price: '€ 145.800',
        year: 2022,
        mileage: '18.500 km',
        image: 'https://cdn.motor1.com/images/mgl/wMOQm/s1/audi-e-tron-gt-2.jpg',
        status: '',
        favorite: false
      },
      {
        id: 5,
        brand: 'Bentley',
        model: 'Bentayga',
        price: '€ 249.900',
        year: 2023,
        mileage: '15.000 km',
        image: 'https://www.bentleymotors.com/content/dam/bentley/Master/World%20of%20Bentley/Mulliner/redesign/coachbuilt/1920x1080_BM_Mulliner_Bacalar_Static_FRONT_3-4.jpg/_jcr_content/renditions/original.image_file.1920.1080.file/1920x1080_BM_Mulliner_Bacalar_Static_FRONT_3-4.jpg',
        status: '',
        favorite: false
      },
      {
        id: 6,
        brand: 'Porsche',
        model: 'Taycan Turbo S',
        price: '€ 189.500',
        year: 2022,
        mileage: '22.000 km',
        image: 'https://cdn.motor1.com/images/mgl/OYqyo/s1/porsche-taycan-turbo-s.jpg',
        status: '',
        favorite: true
      },
      {
        id: 7,
        brand: 'Porsche',
        model: 'Macan GTS',
        price: '€ 139.800',
        year: 2023,
        mileage: '10.000 km',
        image: 'https://cdn.motor1.com/images/mgl/9YrX6/s1/porsche-macan-gts-2021.jpg',
        status: 'Verwacht',
        favorite: false
      },
      {
        id: 8,
        brand: 'Audi',
        model: 'RS6 Avant',
        price: '€ 198.900',
        year: 2023,
        mileage: '8.500 km',
        image: 'https://www.topgear.com/sites/default/files/2022/08/1-Audi-RS6-Avant.jpg',
        status: '',
        favorite: false
      },
      // Add more mock vehicles to reach 73 items in total
    ];

    // Simulate data loading delay
    setTimeout(() => {
      setVehicles(mockVehicles);
      setLoading(false);
    }, 500);
  }, []);

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsSortDropdownOpen(false);
  };

  const toggleBrandFilter = (brand) => {
    setActiveFilters(prevFilters => {
      if (prevFilters.brands.includes(brand)) {
        return {
          ...prevFilters,
          brands: prevFilters.brands.filter(b => b !== brand)
        };
      } else {
        return {
          ...prevFilters,
          brands: [...prevFilters.brands, brand]
        };
      }
    });
  };

  const toggleStatusFilter = (status) => {
    setActiveFilters(prevFilters => {
      if (prevFilters.status.includes(status)) {
        return {
          ...prevFilters,
          status: prevFilters.status.filter(s => s !== status)
        };
      } else {
        return {
          ...prevFilters,
          status: [...prevFilters.status, status]
        };
      }
    });
  };

  const toggleFavorite = (id) => {
    setVehicles(prevVehicles => 
      prevVehicles.map(vehicle => 
        vehicle.id === id ? {...vehicle, favorite: !vehicle.favorite} : vehicle
      )
    );
  };

  // Apply filters to vehicles
  const filteredVehicles = vehicles.filter(vehicle => {
    const passedBrandFilter = activeFilters.brands.length === 0 || 
                             activeFilters.brands.includes(vehicle.brand);
    
    const passedStatusFilter = activeFilters.status.length === 0 || 
                              (vehicle.status === '' && activeFilters.status.includes('Beschikbaar')) ||
                              (vehicle.status !== '' && activeFilters.status.includes(vehicle.status));
    
    return passedBrandFilter && passedStatusFilter;
  });

  // Sort filtered vehicles
  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return parseFloat(a.price.replace('€ ', '').replace('.', '')) - 
               parseFloat(b.price.replace('€ ', '').replace('.', ''));
      case 'price-desc':
        return parseFloat(b.price.replace('€ ', '').replace('.', '')) - 
               parseFloat(a.price.replace('€ ', '').replace('.', ''));
      case 'year-desc':
        return b.year - a.year;
      case 'year-asc':
        return a.year - b.year;
      case 'mileage-asc':
        return parseFloat(a.mileage.replace('.', '').replace(' km', '')) - 
               parseFloat(b.mileage.replace('.', '').replace(' km', ''));
      case 'mileage-desc':
        return parseFloat(b.mileage.replace('.', '').replace(' km', '')) - 
               parseFloat(a.mileage.replace('.', '').replace(' km', ''));
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  return (
    <div className="search-results-page">
      {/* Black navbar specifically for search page */}
      <div className="search-page-navbar">
        {/* This creates a background for the header */}
      </div>

      <div className="search-results-header">
        <div className="container">
          <h1 className="results-count">73 occasions gevonden</h1>
          
          {/* Search filters section */}
          <div className="search-filters">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Zoek op merk, model of trefwoord" 
                className="search-input" 
              />
              <div className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>

            <div className="sort-dropdown">
              <button className="sort-button" onClick={toggleSortDropdown}>
                <span>Sorteren op: {
                  sortOption === 'newest' ? 'Nieuwste eerst' :
                  sortOption === 'price-asc' ? 'Prijs oplopend' :
                  sortOption === 'price-desc' ? 'Prijs aflopend' :
                  sortOption === 'year-desc' ? 'Bouwjaar nieuw-oud' :
                  sortOption === 'year-asc' ? 'Bouwjaar oud-nieuw' :
                  sortOption === 'mileage-asc' ? 'Kilometerstand oplopend' :
                  'Kilometerstand aflopend'
                }</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {isSortDropdownOpen && (
                <div className="sort-dropdown-menu">
                  <button onClick={() => handleSortChange('newest')}>Nieuwste eerst</button>
                  <button onClick={() => handleSortChange('price-asc')}>Prijs oplopend</button>
                  <button onClick={() => handleSortChange('price-desc')}>Prijs aflopend</button>
                  <button onClick={() => handleSortChange('year-desc')}>Bouwjaar nieuw-oud</button>
                  <button onClick={() => handleSortChange('year-asc')}>Bouwjaar oud-nieuw</button>
                  <button onClick={() => handleSortChange('mileage-asc')}>Kilometerstand oplopend</button>
                  <button onClick={() => handleSortChange('mileage-desc')}>Kilometerstand aflopend</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Filter buttons */}
      <div className="filter-buttons">
        <div className="container">
          <div className="filter-group-title">Merk</div>
          <div className="filter-group brand-filters">
            <button 
              className={`filter-button ${activeFilters.brands.includes('Audi') ? 'active' : ''}`}
              onClick={() => toggleBrandFilter('Audi')}
            >
              Audi
            </button>
            <button 
              className={`filter-button ${activeFilters.brands.includes('Bentley') ? 'active' : ''}`}
              onClick={() => toggleBrandFilter('Bentley')}
            >
              Bentley
            </button>
            <button 
              className={`filter-button ${activeFilters.brands.includes('Porsche') ? 'active' : ''}`}
              onClick={() => toggleBrandFilter('Porsche')}
            >
              Porsche
            </button>
            <button 
              className={`filter-button ${activeFilters.brands.includes('Overig') ? 'active' : ''}`}
              onClick={() => toggleBrandFilter('Overig')}
            >
              Overig
            </button>
          </div>
          
          <div className="filter-group-title">Status</div>
          <div className="filter-group status-filters">
            <button 
              className={`filter-button ${activeFilters.status.includes('Beschikbaar') ? 'active' : ''}`}
              onClick={() => toggleStatusFilter('Beschikbaar')}
            >
              Beschikbaar
            </button>
            <button 
              className={`filter-button ${activeFilters.status.includes('Verwacht') ? 'active' : ''}`}
              onClick={() => toggleStatusFilter('Verwacht')}
            >
              Verwacht
            </button>
            <button 
              className={`filter-button ${activeFilters.status.includes('Verkocht') ? 'active' : ''}`}
              onClick={() => toggleStatusFilter('Verkocht')}
            >
              Verkocht
            </button>
            <button 
              className={`filter-button ${activeFilters.status.includes('Carrosserie') ? 'active' : ''}`}
              onClick={() => toggleStatusFilter('Carrosserie')}
            >
              Carrosserie
            </button>
          </div>
        </div>
      </div>
      
      <div className="search-results-content">
        <div className="container">
          {loading ? (
            <div className="loading">Zoeken naar occasions...</div>
          ) : (
            <div className="vehicle-grid">
              {sortedVehicles.map(vehicle => (
                <div key={vehicle.id} className="vehicle-card">
                  <div className="vehicle-image-container">
                    <img 
                      src={vehicle.image} 
                      alt={`${vehicle.brand} ${vehicle.model}`} 
                      className="vehicle-image"
                    />
                    {vehicle.status && (
                      <div className={`vehicle-status ${vehicle.status.toLowerCase()}`}>
                        {vehicle.status}
                      </div>
                    )}
                    <button 
                      className={`favorite-button ${vehicle.favorite ? 'active' : ''}`}
                      onClick={() => toggleFavorite(vehicle.id)}
                      aria-label={vehicle.favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={vehicle.favorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="vehicle-details">
                    <h2 className="vehicle-title">
                      <span className="vehicle-brand">{vehicle.brand}</span>
                      <span className="vehicle-model">{vehicle.model}</span>
                    </h2>
                    
                    <div className="vehicle-specs">
                      <div className="vehicle-price">{vehicle.price}</div>
                      <div className="vehicle-meta">
                        <span className="vehicle-year">{vehicle.year}</span>
                        <span className="vehicle-mileage">{vehicle.mileage}</span>
                      </div>
                    </div>
                    
                    <a href={`/aanbod/${vehicle.id}`} className="vehicle-link">
                      Details bekijken
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;