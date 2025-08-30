import React from 'react';

const VenueCard = ({ university, location, auditorium }: { university: string, location: string, auditorium: string }) => (
  <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700 card-hover">
    <h3 className="text-xl font-bold text-cyan-400">{university}</h3>
    <p className="text-gray-400">{location}</p>
    <p className="text-gray-500 text-sm mt-1">{auditorium}</p>
  </div>
);

const Venues = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">SEDES PRESENCIAIS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <VenueCard university="USP" location="ESPAÇO DE EVENTOS" auditorium="BLOCO DIDÁTICO - USP FMRP" />
          <VenueCard university="UFPR" location="AUDITÓRIO" auditorium="DEPARTAMENTO DE INFORMÁTICA - UFPR" />
          <VenueCard university="UFCSPA" location="SALÃO NOBRE" auditorium="PRÉDIO 1 - UFCSPA" />
        </div>
      </div>
    </section>
  );
};

export default Venues;
