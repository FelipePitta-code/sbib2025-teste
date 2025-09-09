import React from 'react';

const VenueCard = ({ university, location, auditorium }: { university: string, location: string, auditorium: string }) => (
  <div className="venue-item" style={{ backgroundColor: 'var(--accent-purple)', padding: '2rem', borderRadius: '15px', textAlign: 'center' }}>
    <div>
      <h3 style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '1rem' }}>{university}</h3>
      <p style={{ color: 'var(--text-light)' }}>{location}</p>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{auditorium}</p>
    </div>
  </div>
);

const Venues = () => {
  return (
    <section className="content-section">
      <div className="container">
        <h2>SEDES PRESENCIAIS</h2>
        <div className="venues-list">
          <VenueCard university="USP" location="ESPAÇO DE EVENTOS" auditorium="BLOCO DIDÁTICO - USP FMRP" />
          <VenueCard university="UFPR" location="AUDITÓRIO" auditorium="DEPARTAMENTO DE INFORMÁTICA - UFPR" />
          <VenueCard university="UFCSPA" location="SALÃO NOBRE" auditorium="PRÉDIO 1 - UFCSPA" />
        </div>
      </div>
    </section>
  );
};

export default Venues;


