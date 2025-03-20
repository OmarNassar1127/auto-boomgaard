import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import SearchResults from './components/Search/SearchResults';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Set initial page based on URL path
    if (location.pathname === '/') {
      setCurrentPage('home');
    } else if (location.pathname === '/aanbod/') {
      setCurrentPage('search');
    }
  }, [location.pathname]);

  // Handle navigation and URL changes
  const handleNavChange = (page) => {
    setCurrentPage(page);
    if (page === 'home') {
      navigate('/');
    } else if (page === 'search') {
      navigate('/aanbod/');
    }
  };

  return (
    <div className="site-wrapper">
      <Header 
        onNavChange={handleNavChange} 
        currentPage={currentPage}
      />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'search' && <SearchResults />}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<AppContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
