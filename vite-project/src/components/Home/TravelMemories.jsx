import React from 'react';
import './TravelMemories.css';
import karakol from '../../assets/images/karakol.png'
import IK from '../../assets/images/issyk.png'
import suusamyr from '../../assets/images/suusamyr.png'
import bereza from '../../assets/images/bereza.png'
import manasordo from '../../assets/images/manasordo.png'
import osh from '../../assets/images/osh.png'
import { motion } from "framer-motion"


const TravelMemories = () => {
  return (
    <section className="travel-memories">
      <h2>Travel to make memories all around the world</h2>
      <div className="memories">
        <div className="product-list">
          <div className="product">
            <img src={osh} alt="" />
              <h3>Osh</h3>
              <p>$19.99</p>
          </div>
          <div className="product">
            <img src={manasordo} alt="" />
              <h3>Manas-Horde</h3>
              <p>$29.99</p>
          </div>
          <div className="product">
            <img src={bereza} alt="" />
              <h3>Birch grove</h3>
              <p>$39.99</p>
          </div>
        </div>
        <div className="product-list2">
          <div className="product">
            <img src={suusamyr} alt="" />
              <h3>Suusamyr</h3>
              <p>$19.99</p>
          </div>
          <div className="product">
              <img src={karakol} alt="" />
              <h3>Karakol</h3>
              <p>$29.99</p>
          </div>
          <div className="product">
            <img src={IK} alt="" />
              <h3>Issyk-Kul</h3>
              <p>$39.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelMemories;

