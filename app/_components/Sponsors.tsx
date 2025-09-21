import React from 'react';
import Image from 'next/image';

const Sponsors = () => {
  return (
    // Seção principal com padding vertical e fundo gradiente
    <section className="bg-gradient-to-b from-[#193f55] to-[#000000] py-20 sm:py-28">
      <div className="container mx-auto px-4 text-center">
        
        {/* Título Principal */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-16">
          Patrocínios e Apoios
        </h2>

        {/* --- Categoria: Patrocínio Ouro --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#8c7ff5] mb-8">
            PATROCÍNIO OURO
          </h3>
          <div className="flex justify-center">
            {/* O grid agora tem no máximo 3 colunas, ideal para os 3 patrocinadores */}
            <div className="inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Infobio */}
              <div className="w-full h-40 p-4 bg-white/10 rounded-xl flex items-center justify-center transition-transform hover:scale-105">
                <a href="https://infobiojr.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full">
                  <Image 
                    src="/logos/logo infobio.png" 
                    alt="Logo Infobio Jr."
                    width={180}
                    height={180}
                    className="object-contain max-h-full w-auto"
                  />
                </a>
              </div>
              {/* Ilegra */}
              <div className="w-full h-40 p-4 bg-white/10 rounded-xl flex items-center justify-center transition-transform hover:scale-105">
                <a href="https://www.ilegra.com/pt" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full">
                  <Image 
                    src="/logos/Logo ilegra 2024_horizontal-laranja.png" 
                    alt="Logo Ilegra"
                    width={180}
                    height={180}
                    className="object-contain max-h-full w-auto"
                  />
                </a>
              </div>
              {/* BioCodeJr */}
              <div className="w-full h-40 p-4 bg-white/10 rounded-xl flex items-center justify-center transition-transform hover:scale-105">
                <a href="https://biocodejr.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full">
                  <Image 
                    src="/logos/logo-biocodejr.svg" 
                    alt="Logo BioCodeJr"
                    width={180}
                    height={180}
                    className="object-contain max-h-full w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Categoria: Patrocínio Especial --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#8c7ff5] mb-8">
            PATROCÍNIO ESPECIAL
          </h3>
          <div className="flex justify-center">
            {/* Grid com 2 colunas para os 2 patrocinadores */}
            <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Alura */}
              <div className="w-52 h-40 p-4 bg-white/10 rounded-xl flex items-center justify-center transition-transform hover:scale-105">
                <a href="https://www.alura.com.br/?srsltid=AfmBOooQIjFjlCejtsonkfFhfwk-0iQulj5mTvOsr4ufG0adLYCE9LSW" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/logos/alura-light.svg" 
                    alt="Logo Alura"
                    width={150}
                    height={150}
                    className="object-contain w-full h-auto"
                  />
                </a>
              </div>
              {/* USPapel */}
              <div className="w-52 h-40 p-4 bg-white/10 rounded-xl flex items-center justify-center transition-transform hover:scale-105">
                <a href="https://www.uspapelartigos.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full">
                  <Image 
                    src="/logos/uspapel-canva.png" 
                    alt="Logo USPapel"
                    width={150}
                    height={150}
                    className="object-contain max-h-full w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Categoria: Apoio Científico --- */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#8c7ff5] mb-8">
            APOIO CIENTÍFICO
          </h3>
          <div className="flex justify-center">
            {/* Beri */}
            <div className="w-52 h-40 p-4 bg-white/10 rounded-xl flex items-center justify-center transition-transform hover:scale-105">
              <a href="https://beribiotech.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full">
                <Image 
                  src="/logos/logo-beri.png" 
                  alt="Logo Beri"
                  width={180}
                  height={180}
                  className="object-contain max-h-full w-auto"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;