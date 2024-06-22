import React from 'react';
import './AdventureSection.css';
import Snow from '../../assets/images/winter.png'
import Forest from '../../assets/images/forest.png'
import Beach from '../../assets/images/beach.png'
import { NavLink } from 'react-router-dom';


const AdventureSection = () => {
  return (
    <section className="adventure-section">
      <h2>Let’s go on an adventure</h2>
      <div className="adventures">
        <NavLink className="adventure">
          <img src={Snow} alt="Luxury resort" />
          <p>Winter holidays in boarding houses</p>
        </NavLink>
        <NavLink className="adventure">
          <img src={Forest} alt="Camping" />
          <p>Camping amidst the wild</p>
        </NavLink>
        <NavLink className="adventure">
          <img src={Beach} alt="Luxury resort" />
          <p>Luxury resort at the sea</p>
        </NavLink>
      </div>
    </section>
  );
};

export default AdventureSection;
