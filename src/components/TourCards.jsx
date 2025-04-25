import React from 'react';

// TourCard component to display individual tour details
const TourCard = ({ id, name, info, image, price, onRemove }) => {
  return (
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        {/* Display the tour name */}
        <h2>{name}</h2>
        {/* Display the tour info */}
        <p>{info}</p>
        {/* Display the tour price */}
        <p className="tour-price">${price}</p>
        {/* Button to remove the tour */}
        <button className="btn-remove" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;