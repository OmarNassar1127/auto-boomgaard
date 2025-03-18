import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="site-wrapper">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
