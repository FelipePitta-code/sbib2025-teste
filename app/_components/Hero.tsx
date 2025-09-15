import React from 'react';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>
          XXIII SEMANA BRASILEIRA <br /> DE <span style={{ color: 'var(--accent-purple)' }}>INFORMÁTICA BIOMÉDICA</span>
        </h1>
        <p className="event-date">22 a 26 de Setembro</p>
        <Countdown />
        <br />
        <br />
        {/* Botão Call to Action (CTA) */}<a
          href="https://www.sympla.com.br/evento-online/xxiii-semana-brasileira-de-informatica-biomedica/3093188" // Mude este link para a sua seção de inscrição ou link externo
          className="
            inline-flex items-center justify-center gap-3
            px-8 py-4 font-bold text-lg text-white
            bg-[#c73db7] rounded-full
            transition-all duration-300
            hover:bg-[#8f3985] hover:scale-105 hover:shadow-2xl
            focus:outline-none focus:ring-4 focus:ring-[#c73db7]/50
          "
        >
          Garanta sua Vaga
        </a>

      </div>
    </section>
  );
};

export default Hero;


