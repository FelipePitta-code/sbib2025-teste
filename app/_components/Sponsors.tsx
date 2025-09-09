import React from 'react';

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <div className="container text-center">
        <h2>PATROCÍNIOS E APOIOS</h2>
        <h3 style={{ color: 'var(--accent-purple)' }}>PATROCÍNIO OURO</h3>
        {/* Aqui você pode adicionar os logos dos patrocinadores */}
        <div className="h-20 w-40 mx-auto rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent-purple-dark)' }}>
          <p style={{ color: 'var(--text-secondary)' }}>Logo Patrocinador</p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;


