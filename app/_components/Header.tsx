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
          <a href="#">NOSSOS PRODUTOS</a>
          <a href="#">EDIÇÕES ANTERIORES</a>
          <a href="https://www.sympla.com.br/evento-online/xxi-semana-brasileira-de-informatica-biomedica/2135123?_gl=1*19qz2h9*_ga*MTIxNTUwMTY1Ny4xNjkyOTU5NjQ5*_ga_KXH10SQTZF*MTY5Mjk3MjQwNi4yLjEuMTY5Mjk3Mjk3OS4wLjAuMA..&referrer=sbib.biocodejr.com.br" className="btn btn-cta">INSCREVA-SE</a>
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


