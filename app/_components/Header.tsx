import React from 'react';

const Header = () => {
  return (
    <header className="main-header">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold" style={{ color: 'var(--text-light)' }}>
          SBIB
        </div>
        <div className="hidden md:flex nav-links">
          <a href="/">HOME</a>
          <a href="/cronograma">CRONOGRAMA</a>
          <a href="#">TRANSMISSÕES</a>
          <a href="#">EDIÇÕES ANTERIORES</a>
          <a href="#" className="btn btn-cta">INSCREVA-SE</a>
        </div>
        <div className="md:hidden">
          {/* Ícone de Menu para Mobile */}
          <button style={{ color: 'var(--text-light)' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;


