import React from 'react';

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <div className="container text-center">
        <h2>PATROCÍNIOS E APOIOS</h2>
        <h3 style={{ color: 'var(--accent-purple)' }}>PATROCÍNIO OURO</h3>
        <div className="w-48 h-48 mx-auto rounded-lg flex items-center justify-center p-4" style={{ backgroundColor: 'var( --bg-primary)' }}>
          {/* A tag <a> agora envolve a tag <img> */}
          <a href="https://infobiojr.com.br/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://infobiojr.com.br/wp-content/uploads/2025/02/logo.png" 
              alt="Logo Infobio Jr."
              className="object-contain w-full h-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;


