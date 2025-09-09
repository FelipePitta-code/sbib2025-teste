import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>Comissão Organizadora da Semana Brasileira de Informática Biomédica</p>
          <p className="text-sm mt-2">Copyright © by Semana Brasileira de Informática Biomédica</p>
        </div>
        <div className="social-icons">
          {/* Aqui você pode adicionar os ícones das redes sociais */}
          <a href="#" style={{ color: 'var(--text-secondary)' }}>📧</a>
          <a href="#" style={{ color: 'var(--text-secondary)' }}>📱</a>
          <a href="#" style={{ color: 'var(--text-secondary)' }}>🌐</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


