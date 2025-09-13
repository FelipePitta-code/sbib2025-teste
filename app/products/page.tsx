'use client'; // <-- ADICIONE ESTA LINHA NO TOPO DO ARQUIVO

import React from 'react';

// --- Interface unificada para todos os tipos de produtos ---
interface ProductCardProps {
  title: string;
  description: string;
  status: 'Disponível' | 'Em Breve' | 'Esgotado';
  imageSrc: string;
  buyLink: string;
  // Propriedades opcionais para produtos físicos
  price?: string;
  sizes?: string[];
}

const ProductCard = ({ title, description, status, imageSrc, buyLink, price, sizes }: ProductCardProps) => {
  const isAvailable = status === 'Disponível';
  const isOutOfStock = status === 'Esgotado';
  const isComingSoon = status === 'Em Breve';

  let buttonText = 'SAIBA MAIS';
  if (isAvailable) buttonText = price ? 'COMPRAR AGORA' : 'ACESSAR';
  if (isOutOfStock) buttonText = 'ESGOTADO';
  if (isComingSoon) buttonText = 'EM BREVE';

  return (
    <div 
      className="bg-[var(--accent-purple)] rounded-lg p-6 flex flex-col shadow-lg transition-transform hover:scale-105 h-full"
    >
      {/* Imagem do Produto */}
      <div className="w-full h-48 mb-4 bg-gray-700 rounded-md flex items-center justify-center overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      
      {/* Título e Status */}
      <div className="w-full flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-left text-[var(--text-light)]">{title}</h3>
        <span 
          className={`px-3 py-1 text-sm font-semibold rounded-full text-nowrap ${
            isAvailable 
              ? 'bg-green-500 text-white' 
              : isOutOfStock
              ? 'bg-red-500 text-white'
              : 'bg-yellow-500 text-black'
          }`}
        >
          {status}
        </span>
      </div>

      {/* Preço (se existir) */}
      {price && (
        <div className="w-full text-left mb-3">
          <span className="text-2xl font-bold text-[var(--text-light)]">{price}</span>
        </div>
      )}

      {/* Tamanhos disponíveis (se existirem) */}
      {sizes && sizes.length > 0 && (
        <div className="w-full text-left mb-3">
          <p className="text-sm text-[var(--text-secondary)] mb-1">Tamanhos:</p>
          <div className="flex flex-wrap gap-1">
            {sizes.map((size) => (
              <span key={size} className="px-2 py-1 bg-[var(--accent-purple-dark)] text-[var(--text-light)] text-xs rounded">
                {size}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Descrição */}
      <p className="text-[var(--text-secondary)] text-left flex-grow mb-4">{description}</p>

      {/* Botão de Ação */}
      <a
        href={buyLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full mt-auto py-2 px-4 rounded-lg font-semibold transition-colors text-center ${
          isAvailable
            ? 'bg-[var(--text-light)] text-[var(--text-dark)] hover:bg-gray-200'
            : 'bg-gray-500 text-gray-300 cursor-not-allowed'
        }`}
        onClick={!isAvailable ? (e) => e.preventDefault() : undefined}
      >
        {buttonText}
      </a>
    </div>
  );
};

// --- Componente Principal da Página ---
const Products = () => {
  return (
    <section className="content-section min-h-screen">
      <div className="container mx-auto text-center py-12 px-4">
        
        {/* Seção de Produtos Físicos */}
        <h2 className="section-title">PRODUTOS OFICIAIS</h2>
        <p className="text-[var(--text-secondary)] mt-2 mb-12 max-w-2xl mx-auto">
          Adquira produtos oficiais do evento e leve para casa uma lembrança especial desta edição. Camisetas, acessórios e muito mais!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProductCard 
            title="Adesivo SBIB 2025"
            description="..."
            price="Preço a definir"
            status="Disponível"
            imageSrc="/img.products/adesivo.jpg"
            buyLink="#"
            sizes={['P', 'M', 'G', 'GG']}
          />
          <ProductCard 
            title="Broche SBIB 2025"
            description="..."
            price="Preço a definir"
            status="Disponível"
            imageSrc="/img.products/broche.jpeg"
            buyLink="#"
            sizes={['Único']}
          />
          <ProductCard 
            title="Camiseta SBIB 2025"
            description="..."
            price="Preço a definir"
            status="Disponível"
            imageSrc="/img.products/camisa_frente.jpg"
            buyLink="#"
            sizes={['P', 'M', 'G', 'GG', 'XG']}
          />
          <ProductCard 
            title="Cordão SBIB 2025"
            description="..."
            price="Preço a definir"
            status="Disponível"
            imageSrc="/img.products/cordao.jpg"
            buyLink="#"
            sizes={['P', 'M', 'G', 'GG', 'XG']}
          />
          <ProductCard 
            title="Ecobag SBIB 2025"
            description="..."
            price="Preço a definir"
            status="Disponível"
            imageSrc="/img.products/ecobag.jpg"
            buyLink="#"
            sizes={['P', 'M', 'G', 'GG', 'XG']}
          />
          <ProductCard 
            title="Garrafa SBIB 2025"
            description="..."
            price="Preço a definir"
            status="Disponível"
            imageSrc="/img.products/garrafa.jpg"
            buyLink="#"
            sizes={['P', 'M', 'G', 'GG', 'XG']}
          />
        </div>
     
        {/* Informações de Entrega */}
        <div className="mt-20 bg-[var(--bg-dark)] rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center text-[var(--text-light)]">Informações de Entrega</h3>
          <p className="text-center text-[var(--text-secondary)]">
            Entre em contato com os responsáveis na comissão organizadora da SBIB em sua respectiva faculdade para ter informações sobre as entregas dos produtos.
          </p>
        </div>
  
        
      </div>
    </section>
  );
};

export default Products;

