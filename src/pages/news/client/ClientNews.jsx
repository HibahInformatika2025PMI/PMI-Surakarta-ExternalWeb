import React, { useState, useEffect } from 'react';
import { FaSearch, FaChevronLeft, FaChevronRight, FaCalendar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UseArticleNavigation from '../../../hooks/UseArticleNavigation';
import SearchBar from '../../../components/shared/SearchBar';
import PageTitle from '../../../themes/typography/PageTitle';
import Body from '../../../themes/typography/Body';
import ArticlesList from '../../../components/shared/ArticlesList';
import FetchNews from '../../../utils/FetchNews';

const ClientNews = () => {
  // Fetch news articles
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await FetchNews();
        setFeaturedArticles(articles);
      } catch (err) {
        setError(err.message);
      }
    };
    
    fetchArticles();
  }, []);
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Slider logic
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredArticles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1));
  };

  const handleArticleClick = UseArticleNavigation();

  return (
    <div className="w-full flex flex-col items-center py-[48px] px-[160px]">
      {/* Header */}
      <PageTitle className={'mb-4'}>BERITA TERKINI</PageTitle>
      <Body className={'max-w-[1180px] text-lg text-center mb-6'}>
        Berita terkini seputar PMI dan kegiatan yang dilakukan oleh PMI. Berita ini ditujukan untuk masyarakat umum agar lebih mengenal PMI.
      </Body>
      
      {/* Search Bar */}
      <div className='w-full max-w-[780px] min-w-[320px] '>
        <SearchBar />
      </div>

      {/* Slide */}
      <div className="relative w-full mt-5 mb-6 rounded-lg overflow-hidden">
        <div className="h-[500px] flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
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
      <ArticlesList articles={featuredArticles} />
    </div>
  );
};

export default ClientNews;