import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import SearchResults from './components/Search/SearchResults';
import CarDetail from './components/Search/CarDetail';
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
    } else if (location.pathname.startsWith('/auto/')) {
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aanbod/" element={<SearchResults />} />
        <Route path="/auto/:id" element={<CarDetail />} />
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
