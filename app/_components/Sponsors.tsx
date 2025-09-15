import React from 'react';
import Image from 'next/image';

const Sponsors = () => {
  return (
      <section className="bg-gradient-to-b from-[#193f55] to-[#000000]">
      <div className="container mx-auto px-4 text-center">
        <h2>PATROCÍNIOS E APOIOS</h2>
        
        {/* Patrocinador Especial - Alura */}
        <div className="mb-12">
          <h3 style={{ color: 'var(--accent-purple)' }}>PATROCÍNIO ESPECIAL</h3>
          <div className="w-52 h-52 mx-auto rounded-lg flex items-center justify-center p-4">
            <a href="https://www.alura.com.br/?srsltid=AfmBOooQIjFjlCejtsonkfFhfwk-0iQulj5mTvOsr4ufG0adLYCE9LSW" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/logos/alura-light.svg" 
                alt="Logo Alura"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </a>
          </div>
        </div>

        {/* Patrocinadores Ouro */}
        <div>
          <h3 style={{ color: 'var(--accent-purple)' }}>PATROCÍNIO OURO</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Infobio */}
            <div className="w-48 h-48 mx-auto rounded-lg flex items-center justify-center p-4">
              <a href="https://infobiojr.com.br/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/logos/logo infobio.png" 
                  alt="Logo Infobio Jr."
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </a>
            </div>

            {/* Ilegra */}
            <div className="w-48 h-48 mx-auto rounded-lg flex items-center justify-center p-4">
              <a href="https://www.ilegra.com/pt" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/logos/Logo ilegra 2024_horizontal-laranja.png" 
                  alt="Logo Ilegra"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </a>
            </div>

            {/* Beri */}
            <div className="w-48 h-48 mx-auto rounded-lg flex items-center justify-center p-4">
              <a href="https://beribiotech.com.br/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/logos/logo-beri.png" 
                  alt="Logo Beri"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </a>
            </div>

            {/* BioCodeJr */}
            <div className="w-48 h-48 mx-auto rounded-lg flex items-center justify-center p-4">
              <a href="https://biocodejr.com.br/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/logos/logo-biocodejr.svg" 
                  alt="Logo BioCodeJr"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                  />
                </a>
            </div>
          </div>

        {/* Patrocinadores Bronze */}
        <div>
          <h3 style={{ color: 'var(--accent-purple)' }}>PATROCÍNIO Bronze</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* USPapel */}
            <div className="w-33 h-33 mx-auto rounded-lg flex items-center justify-center p-4">
              <a href="https://www.uspapelartigos.com/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/logos/uspapel-canva.png" 
                  alt="Logo USPapel."
                  width={150}
                  height={150}
                  className="object-contain w-50 h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Sponsors;


