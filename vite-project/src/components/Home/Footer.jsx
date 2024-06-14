import React from 'react';
import './Footer.css';
import { FaSearch } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          <div>
            <button>About</button>
            <button>Projects</button>
          </div>
          <div>
            <button>What we do</button>
            <button>Press</button>
          </div>
          <div>
            <button>Jobs</button>
            <button>Downloads</button>
          </div>
          <div className=''>
            <h4>Join our community 🔥</h4>
            

          </div>
        </div>
        <div className='land'>
          <p className='phar'>Copyright © 2024 UI8 LLC. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
