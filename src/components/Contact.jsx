import React from 'react';

const Contact = () => {
  const handleBookTable = () => {
    window.open('https://booking.pauquintero.com/Zum_Griechen', '_blank');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Besuchen Sie Uns</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Standort</h3>
            <p>Hauptstraße 123</p>
            <p>Maria Alm, Österreich</p>
          </div>
          <div className="contact-item">
            <h3>Öffnungszeiten</h3>
            <p>Montag - Sonntag: 11:30 - 23:00 Uhr</p>
            <p>Küche: 12:00 - 22:00 Uhr</p>
          </div>
          <div className="contact-item">
            <h3>Kontakt</h3>
            <p>Telefon: +43 123 456 789</p>
            <p>Email: info@zumgriechen.com</p>
          </div>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <button className="btn btn-gold" onClick={handleBookTable}>
            Jetzt Tisch reservieren
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;