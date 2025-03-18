import React from 'react';
import HeroSection from './HeroSection';
import CarTypes from './CarTypes';
import OccasionHighlights from './OccasionHighlights';
import ServiceSection from './ServiceSection';
import ImageButtons from './ImageButtons';
import QuoteSection from './QuoteSection';

function HomePage() {
  return (
    <div className="site-content">
      <HeroSection />
      <CarTypes />
      <OccasionHighlights />
      <ServiceSection />
      <ImageButtons />
      <QuoteSection />
    </div>
  );
}

export default HomePage;
