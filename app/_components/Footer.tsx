import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Seção de Informações / Branding */}
        <div className="footer-about">
          <h3 className="footer-title">Semana Brasileira de Informática Biomédica</h3>
          <p className="footer-description">
          23ª SBIB | 22 a 26 de Setembro de 2025
          </p>
        </div>

        {/* Seção de Ícones Sociais */}
        <div className="footer-social">
          <a href="https://www.instagram.com/semanadaibm/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/semanadaibm/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://web.facebook.com/semanadaibm/?_rdc=1&_rdr" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="mailto:contato.sbib@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Barra inferior com o copyright */}
      <div className="footer-bottom-bar">
        <p>
          &copy; {new Date().getFullYear()} Semana Brasileira de Informática Biomédica. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


