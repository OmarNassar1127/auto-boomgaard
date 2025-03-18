import React, { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import SearchResults from './components/Search/SearchResults';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <div className="site-wrapper">
        <Header 
          onNavChange={(page) => setCurrentPage(page)} 
          currentPage={currentPage}
        />
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'search' && <SearchResults />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
