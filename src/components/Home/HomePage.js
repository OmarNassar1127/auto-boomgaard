import React from 'react';
import HeroSection from './HeroSection';
import CarTypes from './CarTypes';
import OccasionHighlights from './OccasionHighlights';
import ShowRoom from './ShowRoom';
import ServiceSection from './ServiceSection';
import ImageButtons from './ImageButtons';
import QuoteSection from './QuoteSection';

function HomePage() {
  return (
    <div className="site-content">
      <HeroSection />
      <CarTypes />
      <OccasionHighlights />
      <ShowRoom />
      <ServiceSection />
      <ImageButtons />
      <QuoteSection />
    </div>
  );
}

export default HomePage;
