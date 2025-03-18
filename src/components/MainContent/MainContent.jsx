import React, { useState } from 'react';
import { FaSearch, FaChevronLeft, FaChevronRight, FaCalendar } from 'react-icons/fa';
import image1 from '../../assets/images/image1.png';
import './MainContent.css';

const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredArticles = [
    {
      id: 1,
      title: "N!gga One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image1
    },
    {
      id: 2,
      title: "N!gga Two",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image1
    },
    {
      id: 3,
      title: "N!gga Three",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: image1
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredArticles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1));
  };

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
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {featuredArticles.map((article, index) => (
            <div key={article.id} className="slide" onClick={() => console.log(`Clicked article ${article.id}`)}>
              <img src={article.image} alt={article.title} className="featured-image" />
              <div className="gradient"></div>
              <div className="slide-content">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="navigation-button left" onClick={prevSlide}>
          <FaChevronLeft size={24} />
        </button>
        <button className="navigation-button right" onClick={nextSlide}>
          <FaChevronRight size={24} />
        </button>
        <div className="slide-indicators">
          {featuredArticles.map((_, index) => (
            <div 
              key={index} 
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
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