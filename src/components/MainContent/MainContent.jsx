import React from 'react';
import { FaSearch, FaChevronLeft, FaChevronRight, FaCalendar } from 'react-icons/fa';
import image1 from '../../assets/images/image1.png';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="content-container">
      <h1 className="title">BERITA TERKINI</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input className="search-input" placeholder="Cari artikel disini...." />
        <button className="search-button">Search</button>
      </div>

      <div className="featured-article">
        <img src={image1} alt="Featured Article" className="featured-image" />
        <div className="gradient"></div>
        <button className="navigation-button left">
          <FaChevronLeft size={24} />
        </button>
        <button className="navigation-button right">
          <FaChevronRight size={24} />
        </button>
      </div>

      <div className="article-grid">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="article-card">
            <img src={image1} alt="Article" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="card-footer">
              <div className="date-wrapper">
                <FaCalendar />
                23 Januari 2025
              </div>
              <span className="read-more">Read more...</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;