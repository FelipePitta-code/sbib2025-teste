import React from 'react';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>
          XXIII SEMANA BRASILEIRA <br /> DE INFORMÁTICA <span style={{ color: 'var(--accent-purple)' }}>BIOMÉDICA</span>
        </h1>
        <p className="event-date">22 a 26 de Setembro</p>
        <Countdown />
      </div>
    </section>
  );
};

export default Hero;


