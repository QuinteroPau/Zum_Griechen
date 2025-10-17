import React from 'react';

const Hero = () => {
  const handleBookTable = () => {
    window.open('https://booking.pauquintero.com/Zum_Griechen', '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Zum Griechen</h1>
        <p>Authentische griechische Küche im Herzen von Saalfelden</p>
        <div className="hero-buttons">
          <button className="btn btn-gold" onClick={handleBookTable}>
            Tisch reservieren
          </button>
          <a href="#menu" className="btn">
            Speisekarte ansehen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;