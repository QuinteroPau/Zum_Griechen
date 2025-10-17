import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      name: "Moussaka",
      description: "Schichten aus Aubergine, Hackfleisch und cremiger Béchamelsauce",
      price: "€18,90"
    },
    {
      name: "Souvlaki",
      description: "Gegrillte Fleischspieße serviert mit Pita-Brot und Tzatziki",
      price: "€16,50"
    },
    {
      name: "Griechischer Salat",
      description: "Frische Tomaten, Gurken, Zwiebeln, Feta-Käse und Oliven",
      price: "€12,90"
    },
    {
      name: "Dolmades",
      description: "Gefüllte Weinblätter mit Reis und Kräutern",
      price: "€14,50"
    },
    {
      name: "Frischer Grillfisch",
      description: "Tagesfang perfekt gegrillt mit Kräutern und Zitrone",
      price: "€22,90"
    },
    {
      name: "Baklava",
      description: "Süßes Gebäck mit Nüssen und Honigsirup",
      price: "€8,90"
    }
  ];

  return (
    <section id="menu" className="section">
      <div className="container">
        <h2 className="section-title">Unsere Spezialitäten</h2>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;