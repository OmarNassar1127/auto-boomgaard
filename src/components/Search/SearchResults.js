import React, { useState, useEffect } from "react";
import "./SearchResults.css";

function SearchResults() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("newest");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    brands: [],
    status: [],
  });

  useEffect(() => {
    // Mock data for vehicles
    const mockVehicles = [
      {
        id: 1,
        brand: "Fiat",
        model: "500 0.9 TwinAir Lounge | Panoramak Bluetooth PDC",
        price: "€ 8.995",
        year: 2016,
        mileage: "52.460 km",
        image:
          "https://prod.pictures.autoscout24.net/listing-images/593602f9-771c-4e57-84ec-20cd82210c02_eaa98a26-6c92-4748-b684-40cfc3bc616d.jpg/480x360.webp",
        status: "",
        favorite: false,
      },
      {
        id: 2,
        brand: "Volkswagen",
        model: "Tiguan 1.4 TSI Comfortline| Panoramadak PDC Cruise Contro",
        price: "€ 17.995",
        year: 2017,
        mileage: "116.995 km",
        image:
          "https://prod.pictures.autoscout24.net/listing-images/79949e76-8893-45c2-b582-3f84f89f25cd_7c654ed1-0858-4fe9-bd57-37ca359c6e76.jpg/480x360.webp",
        status: "",
        favorite: false,
      },
      {
        id: 3,
        brand: "Mercedes-Benz",
        model: "A 250 e AMG Night| Pano Camera Carplay Widescreen Dodeho",
        price: "€ 32.495",
        year: 2021,
        mileage: "50.950 km",
        image:
          "https://prod.pictures.autoscout24.net/listing-images/22af2738-a4c9-4f64-a620-fbf7ca5db287_ad6fa5eb-fc3e-4d5a-92bd-5ebd768b1e54.jpg/480x360.webp",
        status: "",
        favorite: false,
      },
      {
        id: 4,
        brand: "Audi",
        model: "Q5 55 TFSI-e S-Line | Pano HuD B&O ACC Matrix Trkhaak",
        price: "€ 47.495",
        year: 2021,
        mileage: "65.350 km",
        image:
          "https://prod.pictures.autoscout24.net/listing-images/0df962f4-d89b-4063-83b5-cb8493de7f79_ae145c77-7a3e-488d-9ff5-b69ef4665209.jpg/480x360.webp",
        status: "",
        favorite: false,
      },
      {
        id: 5,
        brand: "Audi",
        model: "Q3 35 TFSI S edition | Camera Carplay Leder Elek. Ach",
        price: "€ 29.900",
        year: 2021,
        mileage: "32.750 km",
        image:
          "https://prod.pictures.autoscout24.net/listing-images/9d2ab3ef-e128-497c-9f73-8d2a667335c8_eee0d272-a306-41cc-b6ea-2f6d73735edb.jpg/480x360.webp",
        status: "",
        favorite: false,
      },
      {
        id: 6,
        brand: "Mercedes-Benz",
        model: "A 250 e AMG Night | Pano Multibeam Camera Widescreen Car",
        price: "€ 31.495",
        year: 2021,
        mileage: "48.300 km",
        image:
          "https://prod.pictures.autoscout24.net/listing-images/96069039-e59b-406a-b60f-aea71bf276cf_3a7b0d4d-b1cd-4be6-826e-5b225ab6664e.jpg/480x360.webp",
        status: "",
        favorite: false,
      },
      {
        id: 7,
        brand: "Mercedes-Benz",
        model: "GLC 300 e AMG| Pano Burmester 360' Cam. DigiDash HeadUp",
        price: "€ 44.895",
        year: 2021,
        mileage: "72.500 km",
        image:
          "https://prod.pictures.autoscout24.net/listing-images/73b9f630-27b3-42d9-b4f5-c938527a5bf3_fdbac173-edfb-4ca6-ae10-97c6bd40fd93.jpg/480x360.webp",
        status: "",
        favorite: false,
      },
      {
        id: 8,
        brand: "Audi",
        model: "Q5 55 TFSI-e S-Line | B&O Camera Carplay HeadUp Lucht",
        price: "€ 37.995",
        year: 2020,
        mileage: "57.850 km",
        image:
          "https://prod.pictures.autoscout24.net/listing-images/7368632c-e85e-4913-b2b7-1f1ddae6870a_322d6b31-ab53-4faa-8ae4-a51c52b708f2.jpg/480x360.webp",
        status: "",
        favorite: false,
      },
      {
        id: 9,
        brand: "Audi",
        model: "Q5 55 TFSI-e S-Line| B&O RS Leder HuD Camera Matrix",
        price: "€ 38.495",
        year: 2019,
        mileage: "52.500 km",
        image:
          "https://prod.pictures.autoscout24.net/listing-images/b7dd3f98-eecb-444f-b4b2-d1c29a1bf69d_dffdc8b8-1933-4b66-9dbf-2abe15808d5c.jpg/480x360.webp",
        status: "",
        favorite: false,
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would trigger a search API call
    console.log("Searching for:", searchQuery);
  };

  const toggleFilter = (type, value) => {
    setActiveFilters((prevFilters) => {
      if (prevFilters[type].includes(value)) {
        return {
          ...prevFilters,
          [type]: prevFilters[type].filter((item) => item !== value),
        };
      } else {
        return {
          ...prevFilters,
          [type]: [...prevFilters[type], value],
        };
      }
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      brands: [],
      status: [],
    });
    setSearchQuery("");
  };

  const toggleFavorite = (id) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((vehicle) =>
        vehicle.id === id
          ? { ...vehicle, favorite: !vehicle.favorite }
          : vehicle
      )
    );
  };

  // Apply filters to vehicles
  const filteredVehicles = vehicles.filter((vehicle) => {
    const passedBrandFilter =
      activeFilters.brands.length === 0 ||
      activeFilters.brands.includes(vehicle.brand);

    const passedStatusFilter =
      activeFilters.status.length === 0 ||
      (vehicle.status === "" && activeFilters.status.includes("Beschikbaar")) ||
      (vehicle.status !== "" && activeFilters.status.includes(vehicle.status));

    const passedSearchFilter =
      !searchQuery ||
      vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchQuery.toLowerCase());

    return passedBrandFilter && passedStatusFilter && passedSearchFilter;
  });

  // Sort filtered vehicles
  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return (
          parseFloat(a.price.replace("€ ", "").replace(".", "")) -
          parseFloat(b.price.replace("€ ", "").replace(".", ""))
        );
      case "price-desc":
        return (
          parseFloat(b.price.replace("€ ", "").replace(".", "")) -
          parseFloat(a.price.replace("€ ", "").replace(".", ""))
        );
      case "year-desc":
        return b.year - a.year;
      case "year-asc":
        return a.year - b.year;
      case "mileage-asc":
        return (
          parseFloat(a.mileage.replace(".", "").replace(" km", "")) -
          parseFloat(b.mileage.replace(".", "").replace(" km", ""))
        );
      case "mileage-desc":
        return (
          parseFloat(b.mileage.replace(".", "").replace(" km", "")) -
          parseFloat(a.mileage.replace(".", "").replace(" km", ""))
        );
      case "newest":
      default:
        return b.id - a.id;
    }
  });

  const getSortLabel = (option) => {
    switch (option) {
      case "newest":
        return "Nieuwste eerst";
      case "price-asc":
        return "Prijs oplopend";
      case "price-desc":
        return "Prijs aflopend";
      case "year-desc":
        return "Bouwjaar nieuw-oud";
      case "year-asc":
        return "Bouwjaar oud-nieuw";
      case "mileage-asc":
        return "Kilometerstand oplopend";
      case "mileage-desc":
        return "Kilometerstand aflopend";
      default:
        return "Sorteer op";
    }
  };

  return (
    <div className="search-results-page">
      {/* Black navbar specifically for search page */}
      <div className="search-page-navbar">
        {/* This creates a background for the header */}
      </div>

      <div className="search-results-header">
        <div className="container">
          <div className="results-summary">
            <h1 className="results-count">73 occasions gevonden</h1>
            {activeFilters.brands.length > 0 ||
            activeFilters.status.length > 0 ||
            searchQuery ? (
              <button className="clear-filters" onClick={clearFilters}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                Filters wissen
              </button>
            ) : null}
          </div>

          {/* Modern search section */}
          <div className="search-controls">
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <div className="search-input-container">
                <svg
                  className="search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Zoek op merk, model of trefwoord"
                  className="search-input"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="clear-search"
                    onClick={() => setSearchQuery("")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
              <button type="submit" className="search-submit">
                Zoeken
              </button>
            </form>

            <div className="sort-control">
              <div className="sort-wrapper">
                <button
                  className="sort-button"
                  onClick={toggleSortDropdown}
                  aria-expanded={isSortDropdownOpen}
                >
                  <span className="sort-label">{getSortLabel(sortOption)}</span>
                  <svg
                    className={`sort-icon ${isSortDropdownOpen ? "open" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isSortDropdownOpen && (
                  <div className="sort-dropdown-menu">
                    <button
                      onClick={() => handleSortChange("newest")}
                      className={sortOption === "newest" ? "active" : ""}
                    >
                      Nieuwste eerst
                    </button>
                    <button
                      onClick={() => handleSortChange("price-asc")}
                      className={sortOption === "price-asc" ? "active" : ""}
                    >
                      Prijs oplopend
                    </button>
                    <button
                      onClick={() => handleSortChange("price-desc")}
                      className={sortOption === "price-desc" ? "active" : ""}
                    >
                      Prijs aflopend
                    </button>
                    <button
                      onClick={() => handleSortChange("year-desc")}
                      className={sortOption === "year-desc" ? "active" : ""}
                    >
                      Bouwjaar nieuw-oud
                    </button>
                    <button
                      onClick={() => handleSortChange("year-asc")}
                      className={sortOption === "year-asc" ? "active" : ""}
                    >
                      Bouwjaar oud-nieuw
                    </button>
                    <button
                      onClick={() => handleSortChange("mileage-asc")}
                      className={sortOption === "mileage-asc" ? "active" : ""}
                    >
                      Kilometerstand oplopend
                    </button>
                    <button
                      onClick={() => handleSortChange("mileage-desc")}
                      className={sortOption === "mileage-desc" ? "active" : ""}
                    >
                      Kilometerstand aflopend
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter chips */}
      <div className="filter-section">
        <div className="container">
          <div className="filter-category">
            <h3 className="filter-heading">Merk</h3>
            <div className="filter-chips">
              <button
                className={`filter-chip ${
                  activeFilters.brands.includes("Audi") ? "active" : ""
                }`}
                onClick={() => toggleFilter("brands", "Audi")}
              >
                <span>Audi</span>
                {activeFilters.brands.includes("Audi") && (
                  <svg
                    className="chip-close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                )}
              </button>
              <button
                className={`filter-chip ${
                  activeFilters.brands.includes("Fiat") ? "active" : ""
                }`}
                onClick={() => toggleFilter("brands", "Fiat")}
              >
                <span>Fiat</span>
                {activeFilters.brands.includes("Fiat") && (
                  <svg
                    className="chip-close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                )}
              </button>
              <button
                className={`filter-chip ${
                  activeFilters.brands.includes("Mercedes") ? "active" : ""
                }`}
                onClick={() => toggleFilter("brands", "Mercedes")}
              >
                <span>Mercedes</span>
                {activeFilters.brands.includes("Mercedes") && (
                  <svg
                    className="chip-close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                )}
              </button>
              <button
                className={`filter-chip ${
                  activeFilters.brands.includes("Volkswagen") ? "active" : ""
                }`}
                onClick={() => toggleFilter("brands", "Volkswagen")}
              >
                <span>Volkswagen</span>
                {activeFilters.brands.includes("Volkswagen") && (
                  <svg
                    className="chip-close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="filter-category">
            <h3 className="filter-heading">Status</h3>
            <div className="filter-chips">
              <button
                className={`filter-chip ${
                  activeFilters.status.includes("Beschikbaar") ? "active" : ""
                }`}
                onClick={() => toggleFilter("status", "Beschikbaar")}
              >
                <span>Beschikbaar</span>
                {activeFilters.status.includes("Beschikbaar") && (
                  <svg
                    className="chip-close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                )}
              </button>
              <button
                className={`filter-chip ${
                  activeFilters.status.includes("Verwacht") ? "active" : ""
                }`}
                onClick={() => toggleFilter("status", "Verwacht")}
              >
                <span>Verwacht</span>
                {activeFilters.status.includes("Verwacht") && (
                  <svg
                    className="chip-close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                )}
              </button>
              <button
                className={`filter-chip ${
                  activeFilters.status.includes("Verkocht") ? "active" : ""
                }`}
                onClick={() => toggleFilter("status", "Verkocht")}
              >
                <span>Verkocht</span>
                {activeFilters.status.includes("Verkocht") && (
                  <svg
                    className="chip-close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                )}
              </button>
              <button
                className={`filter-chip ${
                  activeFilters.status.includes("Carrosserie") ? "active" : ""
                }`}
                onClick={() => toggleFilter("status", "Carrosserie")}
              >
                <span>Carrosserie</span>
                {activeFilters.status.includes("Carrosserie") && (
                  <svg
                    className="chip-close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="search-results-content">
        <div className="container">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <div className="loading-text">Zoeken naar occasions...</div>
            </div>
          ) : sortedVehicles.length === 0 ? (
            <div className="no-results">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              <p>Geen resultaten gevonden voor de huidige zoekcriteria.</p>
              <button className="reset-search" onClick={clearFilters}>
                Filters wissen
              </button>
            </div>
          ) : (
            <div className="vehicle-grid">
              {sortedVehicles.map((vehicle) => (
                <div key={vehicle.id} className="vehicle-card">
                  <div className="vehicle-image-container">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.brand} ${vehicle.model}`}
                      className="vehicle-image"
                    />
                    {vehicle.status && (
                      <div
                        className={`vehicle-status ${vehicle.status.toLowerCase()}`}
                      >
                        {vehicle.status}
                      </div>
                    )}
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
                        <span className="vehicle-mileage">
                          {vehicle.mileage}
                        </span>
                      </div>
                    </div>

                    <a href={`/aanbod/${vehicle.id}`} className="vehicle-link">
                      Details bekijken
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
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
