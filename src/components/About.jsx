import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Unsere Geschichte</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Wir sind ein Traditionsunternehmen. Unser Restaurant Metaxa gibt es seit 1999 in der Lutherstadt Eisleben in Deutschland. Wir bieten eine große Auswahl an griechischen Spezialitäten mit Gemüse, Fisch und Fleisch. Dazu passend können Sie an einer großen Auswahl an griechischen Weinen auswählen. 
              
            </p>
            <p>
              Unser Restaurant bietet Platz für ca. 120 Siztplätze. Gerne buchbar für Firmen-, Gruppen-, Weihnachts-, und Familienfeiern.
            </p>
            
          </div>
          <div className="about-image">
            <img 
              src={require('../assets/images/restaurant-interior.jpg')} 
              alt="Restaurant Innenbereich" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;