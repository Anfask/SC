import React from 'react';
import './Navbar.css';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Wisbato" className="logo-image" onClick={() => handleNavigate('/')} />
        <span className="logo-text"></span>
      </div>
      <div className="nav-links">
        <p className="nav-link" onClick={() => handleNavigate('/')}>HOME</p>
        <p className="nav-link" onClick={() => handleNavigate('/about')}>ABOUT</p>
        <p className="nav-link" onClick={() => handleNavigate('/Courses')}>COURSES</p>
        <p className="nav-link" onClick={() => handleNavigate('/services')}>SERVICES</p>
        <p className="nav-link" onClick={() => handleNavigate('/study-destinations')}>STUDY DESTINATIONS</p>
        <button className="contact-button" onClick={() => handleNavigate('/contact')}>CONTACT</button>
      </div>
    </nav>
  );
};

export default NavBar;