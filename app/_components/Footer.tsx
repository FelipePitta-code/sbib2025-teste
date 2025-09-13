import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Comissão Organizadora da Semana Brasileira de Informática Biomédica</p>
        </div>
        <div className="footer-right social-icons">
          <a href="https://www.instagram.com/semanadaibm/" style={{ color: 'var(--text-secondary)' }}>Instagram</a>
          <a href="https://www.linkedin.com/company/semanadaibm/" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
          <a href="https://web.facebook.com/semanadaibm/?_rdc=1&_rdr" style={{ color: 'var(--text-secondary)' }}>Facebook</a>
          <a href="mailto:contato.sbib@gmail.com" style={{ color: 'var(--text-secondary)' }}>Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-sm">Copyright © by Semana Brasileira de Informática Biomédica</p>
      </div>
    </footer>
  );
};

export default Footer;


