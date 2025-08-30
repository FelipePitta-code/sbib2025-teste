import React from 'react';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <section className="text-center py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          XXIII SEMANA BRASILEIRA <br /> DE INFORMÁTICA <span className="text-cyan-400">BIOMÉDICA</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light text-gray-400">22 a 26 de Setembro</p>
        <Countdown />
      </div>
    </section>
  );
};

export default Hero;
