'use client'; // <-- ADICIONE ESTA LINHA NO TOPO DO ARQUIVO

import React from 'react';

// --- Interface unificada para todos os tipos de produtos ---
interface ProductCardProps {
  title: string;
  description: string;
  status: 'Disponível' | 'Em Breve' | 'Esgotado';
  imageUrl: string;
  buyLink: string;
  // Propriedades opcionais para produtos físicos
  price?: string;
  sizes?: string[];
}

const ProductCard = ({ title, description, status, imageUrl, buyLink, price, sizes }: ProductCardProps) => {
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
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
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
            title="Camiseta SBIB 2025 - Básica"
            description="Camiseta 100% algodão com o logo oficial da SBIB 2025. Confortável e ideal para o dia a dia."
            price="R$ 45,00"
            status="Disponível"
            imageUrl="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
            buyLink="#"
            sizes={['P', 'M', 'G', 'GG', 'XG']}
          />
          <ProductCard 
            title="Moletom SBIB 2025"
            description="Moletom com capuz para os dias mais frios. Conforto e estilo em um só produto."
            price="R$ 95,00"
            status="Disponível"
            imageUrl="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop"
            buyLink="#"
            sizes={['P', 'M', 'G', 'GG']}
          />
          <ProductCard 
            title="Boné SBIB 2025"
            description="Boné ajustável com o logo bordado. Proteção solar com estilo."
            price="R$ 40,00"
            status="Esgotado"
            imageUrl="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop"
            buyLink="#"
            sizes={['Único']}
          />
        </div>

        {/* Seção de Produtos Digitais */}
        <h2 className="section-title mt-20">CURSOS E MATERIAIS</h2>
        <p className="text-[var(--text-secondary)] mt-2 mb-12 max-w-2xl mx-auto">
          Explore os cursos, workshops e materiais exclusivos desenvolvidos pela SBIB para aprofundar seu conhecimento em Informática Biomédica.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProductCard 
            title="Curso de Python para Bioinformática"
            description="Aprenda a programar em Python com foco em análise de dados genômicos e biológicos. Ideal para iniciantes."
            status="Disponível"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
            buyLink="#"
          />
          <ProductCard 
            title="Workshop de Machine Learning"
            description="Explore algoritmos de aprendizado de máquina para criar modelos preditivos com dados clínicos e de imagens médicas."
            status="Em Breve"
            imageUrl="https://static.vecteezy.com/system/resources/thumbnails/006/617/173/small/brain-with-a-digital-circuit-board-texture-and-a-glowing-light-effect-ai-generated-photo.jpg"
            buyLink="#"
          />
          <ProductCard 
            title="E-book: Imagens Médicas"
            description="Um guia completo sobre as técnicas e ferramentas para análise de imagens como Tomografia e Ressonância Magnética."
            status="Em Breve"
            imageUrl="https://www.saudedigital.com.br/wp-content/uploads/2021/08/imagem-medica.jpeg"
            buyLink="#"
          />
        </div>

        {/* Informações de Entrega */}
        <div className="mt-20 bg-[var(--bg-dark)] rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center text-[var(--text-light)]">Informações de Entrega</h3>
          <p className="text-center text-[var(--text-secondary)]">
            Entre em contato com os responsáveis na comissão organizadora da SBIB para ter informações sobre as entregas dos produtos.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default Products;

