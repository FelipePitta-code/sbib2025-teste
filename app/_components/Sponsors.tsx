import React from 'react';

const Sponsors = () => {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">PATROCÍNIOS E APOIOS</h2>
        <h3 className="text-xl font-bold text-yellow-400 mb-4">PATROCÍNIO OURO</h3>
        {/* Aqui você pode adicionar os logos dos patrocinadores */}
        <div className="h-20 w-40 bg-slate-700 mx-auto rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Logo Patrocinador</p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
