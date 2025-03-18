import React from 'react';
import { MdPhone, MdEmail, MdFax } from 'react-icons/md';
import logoImg from '../../assets/images/pmi_logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="content-wrapper">
          <div className="left-section">
            <img src={logoImg} alt="PMI Logo" className="footer-logo" />
            <p className="address">
              Jl. Kol. Sutarto No. 58 Jebres, Surakarta, Jawa Tengah 57126
            </p>
            <div className="contact-info">
              <MdPhone size={16} />
              0271 646 505
            </div>
            <div className="contact-info">
              <MdFax size={16} />
              0271 664 881
            </div>
            <div className="contact-info">
              <MdEmail size={16} />
              kota_surakarta@pmi.or.id
            </div>
          </div>
          <div className="right-section">
            <h2 className="title">PMI Kota Surakarta</h2>
          </div>
        </div>
      </div>
      <div className="copyright">
        © Copyright Palang Merah Indonesia Kota Surakarta 2025
      </div>
    </footer>
  );
};

export default Footer;