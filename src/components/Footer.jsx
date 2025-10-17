import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Zum Griechen</h3>
            <p>Authentische griechische Küche in der wunderschönen Umgebung von Maria Alm.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><a href="#home" style={{color: 'white'}}>Startseite</a></p>
            <p><a href="#menu" style={{color: 'white'}}>Speisekarte</a></p>
            <p><a href="#contact" style={{color: 'white'}}>Kontakt</a></p>
          </div>
          <div className="footer-section">
            <h3>Folgen Sie Uns</h3>
            <p>Folgen Sie uns in den sozialen Medien für Updates und Special Offers.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Zum Griechen Restaurant. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;