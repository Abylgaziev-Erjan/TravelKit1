import React from 'react';
import vanImage from '../../assets/images/suusamyr.png'; // Update the path to your image
import './TourCardPage.css';


const TourCard = () => {
  return (
    <div className="tour-card">
      <div className="image-section">
        <div className="best-selling">BEST SELLING</div>
        <img src={vanImage} alt="Tour Van" className="tour-image" />
      </div>
      <div className="info-section">
        <div className="tour-title">
          Premium Milford Sound Tour ex Queenstown
        </div>
        <div className="tour-details">
          <span>12 hours</span> <span>Up to 10 people</span>
        </div>
        <div className="tour-price-section">
          <span className="discounted-price">$267</span>
          <span className="original-price">$356</span>
        </div>
        <div className="guide-info">
          <img src="https://via.placeholder.com/40" alt="Guide" className="guide-image" />
          <span>The best 16 passenger small group, intimate and unique, Milford Sound...</span>
        </div>
        <div className="tour-footer">
          <span className="total-price">$200 total</span>
          <span className="rating">⭐ 4.8 (12 reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
