import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/icon.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo"> <img src={Logo} alt="logo" /> fleet</div>
      <nav className="navigation">
        <NavLink to={'/travelers'}>Travelers</NavLink>
        <NavLink to={'/support'}>Support</NavLink>
        <NavLink to={'/language'}>Language</NavLink>
        <button className="list-property">List your property</button>
      </nav>
    </header>
  );
};

export default Header;
