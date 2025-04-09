import React, { useState, useEffect } from 'react';
import { FaSearch, FaChevronLeft, FaChevronRight, FaCalendar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import image1 from '../../../assets/images/article_pmi.png';

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const [featuredArticles, setFeaturedArticles] = useState([]);

  // Fetch news articles
  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:8080/news'); // atau pake 'http://localhost:8080/news?is_draft=false'
      const data = await response.json();
      console.log(data);
      if (data.status === 'success') {
        setFeaturedArticles(data.data);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredArticles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1));
  };

  const handleArticleClick = (articleId) => {
    navigate(`/news/article/${articleId}`);
  };

  return (
    <div className="w-full min-h-[1600px] flex flex-col items-center p-12">
      {/* Header */}
      <h1 className="font-inter font-bold text-4xl text-center text-[#EC121C] mb-2">BERITA TERKINI</h1>
      <p className="font-inter text-lg text-center text-black mb-6 max-w-[1049px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      {/* Search Bar */}
      <div className="relative w-full max-w-[780px] min-w-[320px] h-[48px] mt-5 mb-6 mx-auto">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" />
        <input className="w-full h-full pl-10 pr-24 border border-[#261317] rounded-2xl font-inter text-lg" placeholder="Cari artikel disini...." />
        <button className="absolute right-0 top-0 h-full px-6 bg-[#261317] rounded-r-2xl text-white font-bold">Search</button>
      </div>

      {/* Slide */}
      <div className="relative w-full max-w-[1180px] mt-5 mb-6 rounded-lg overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {featuredArticles.map((article) => (
            <div 
              key={article.id} 
              className="min-w-full relative cursor-pointer group"
              onClick={() => handleArticleClick(article.id)}
            >
              <img src={article.cover_image} alt={article.title} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 to-transparent backdrop-opacity-90 text-white px-10 py-10 rounded-b-lg">
                <h2 className="text-2xl font-bold">{article.title}</h2>
                <p className="text-sm line-clamp-1">{article.summary}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2" onClick={prevSlide}>
          <FaChevronLeft size={24} />
        </button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2" onClick={nextSlide}>
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1180px]">
        {featuredArticles.map((article) => (
          <div 
            key={article.id} 
            className="relative w-[380px] h-[400px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleArticleClick(article.id)}
          >
            <div className="relative">
              <img src={article.cover_image} alt={article.title} className="w-full h-[220px] object-cover rounded-t-lg" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-red-500 opacity-30 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
            <div className="p-5">
              <h3 className="font-inter font-semibold text-lg mb-2">{article.title}</h3>
              <p className="font-inter text-sm text-justify mb-4">{article.summary}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
              <div className="flex items-center text-gray-500 text-sm">
                <FaCalendar className="mr-1" />
                {new Date(article.updated_at).toLocaleDateString()}
              </div>
              <span className="font-inter font-bold text-[#D60100] text-sm cursor-pointer">Read more...</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;