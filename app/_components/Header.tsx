'use client';
import { useState } from 'react';
import Link from 'next/link'; // Importa o componente Link do Next.js

// Array com os links para evitar repetição de código (Princípio DRY)
const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/cronograma', label: 'CRONOGRAMA' },
  { href: '/streamings', label: 'TRANSMISSÕES' },
  { href: '/products', label: 'NOSSOS PRODUTOS' },
  { href: '/past_editions', label: 'EDIÇÕES ANTERIORES' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    // Header fixo no topo com sombra e z-index para ficar acima de outros elementos
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Branding - usa Link para a página inicial */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
          SBIB
        </Link>

        {/* --- Navegação para Desktop --- */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors font-medium">
              {link.label}
            </Link>
          ))}
          {/* Botão de CTA (Call to Action) externo */}
          <a
            href="https://www.sympla.com.br/evento-online/xxiii-semana-brasileira-de-informatica-biomedica/3093188"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105"
          >
            INSCREVA-SE
          </a>
        </div>

        {/* --- Botão do Menu Mobile --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            {/* Ícone de Menu (Hamburguer/X) com animação */}
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* --- Menu Mobile Dropdown com Animação --- */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu} className="text-gray-300 hover:text-white transition-colors font-medium text-lg">
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.sympla.com.br/evento-online/xxiii-semana-brasileira-de-informatica-biomedica/3093188"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105 w-4/5 text-center mt-4"
          >
            INSCREVA-SE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;