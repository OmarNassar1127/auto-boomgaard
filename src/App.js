import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import SearchResults from "./components/Search/SearchResults";
import CarDetail from "./components/Search/CarDetail";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Set initial page based on URL path
    if (location.pathname === "/" || location.pathname === "") {
      setCurrentPage("home");
    } else if (location.pathname === "/aanbod/" || location.pathname === "/aanbod") {
      setCurrentPage("search");
    } else if (location.pathname.startsWith("/auto/")) {
      // Also set search page style for car detail pages
      setCurrentPage("search");
    } else if (location.pathname === "/contact/" || location.pathname === "/contact") {
      setCurrentPage("contact");
    }
    console.log("Current pathname:", location.pathname);
  }, [location.pathname]);

  // Handle navigation and URL changes
  const handleNavChange = (page) => {
    setCurrentPage(page);
    if (page === "home") {
      navigate("/");
    } else if (page === "search") {
      navigate("/aanbod/");
    } else if (page === "contact") {
      navigate("/contact/");
    }
  };

  return (
    <div className="site-wrapper">
      <Header onNavChange={handleNavChange} currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aanbod/" element={<SearchResults />} />
        <Route path="/auto/:id" element={<CarDetail />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
