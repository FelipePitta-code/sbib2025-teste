import React from 'react';

const Header = () => {
  return (
    <header className="bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-cyan-400">
          SBIB
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition">HOME</a>
          <a href="#cronograma" className="text-gray-300 hover:text-cyan-400 transition">CRONOGRAMA</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition">TRANSMISSÕES</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition">EDIÇÕES ANTERIORES</a>
          <a href="#" className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition">INSCREVA-SE</a>
        </div>
        <div className="md:hidden">
          {/* Ícone de Menu para Mobile */}
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
