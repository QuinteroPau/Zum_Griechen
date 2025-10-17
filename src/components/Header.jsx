import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo-container">
          <img 
            src={require('../assets/images/logo.png')} 
            alt="Zum Griechen Logo" 
            className="logo-image"
          />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Startseite</a></li>
          <li><a href="#about">Über Uns</a></li>
          <li><a href="#menu">Speisekarte</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;