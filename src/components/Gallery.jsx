import React from 'react';
import TourCard from './TourCards';

// Gallery component to display a list of tours
const Gallery = ({ tours, onRemove }) => {
  return (
    <div className="gallery">
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard
          key={tour.id} // Unique key for each tour
          id={tour.id} // Pass tour ID
          name={tour.name} // Pass tour name
          info={tour.info} // Pass tour info
          image={tour.image} // Pass tour image URL
          price={tour.price} // Pass tour price
          onRemove={onRemove} // Pass the remove function
        />
      ))}
    </div>
  );
};

export default Gallery;