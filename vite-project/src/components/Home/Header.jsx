import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/icon.png'
import Account from '../../assets/images/userava.png'
import Iconka from '../../assets/images/Line.png'

const Header = () => {
  const token = localStorage.getItem("token");
  return (
    <header className="header">
    
      <NavLink to={'/'} className="logo"> <img src={Logo} alt="logo" /> fleet</NavLink>
      <nav className="navigation">
        <NavLink to={'/travelers'}>Travelers</NavLink>
        <NavLink to={token ? '/profile' : '/login'}>
          <img className='account' src={Account} alt="" />
        </NavLink>
      </nav>
    </header> 
  );
};

export default Header;
