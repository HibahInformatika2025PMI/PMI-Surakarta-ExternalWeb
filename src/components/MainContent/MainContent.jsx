import React, { useState } from 'react';
import { FaSearch, FaChevronLeft, FaChevronRight, FaCalendar } from 'react-icons/fa';
import image1 from '../../assets/images/image1.png';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const featuredArticles = [
    {
      id: 1,
      title: "N!gga Onee",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: image1,
      date: "21 Maret 2024",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 2,
      title: "N!gga Two",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image1,
      date: "22 Maret 2024",
      content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.

      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.`
    },
    {
      id: 3,
      title: "N!gga Three",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: image1,
      date: "23 Maret 2024",
      content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.

      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.`
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredArticles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1));
  };

  const handleArticleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="w-full min-h-[1600px] flex flex-col items-center p-12 bg-[#F7F3F5]">
      <h1 className="font-inter font-bold text-4xl text-center text-[#EC121C] mb-2">BERITA TERKINI</h1>
      <p className="font-inter text-lg text-center text-black mb-6 max-w-[1049px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <div className="relative w-[780px] h-[48px] mb-6">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" />
        <input className="w-full h-full pl-10 pr-24 border border-[#261317] rounded-2xl font-inter text-lg" placeholder="Cari artikel disini...." />
        <button className="absolute right-0 top-0 h-full px-6 bg-[#261317] rounded-r-2xl text-white font-bold">Search</button>
      </div>

      <div className="relative w-[1180px] h-[415px] mb-6 rounded-lg overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {featuredArticles.map((article) => (
            <div 
              key={article.id} 
              className="min-w-full relative cursor-pointer group"
              onClick={() => handleArticleClick(article.id)}
            >
              <img src={article.image} alt={article.title} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-red-500 opacity-30 transition-opacity duration-500 group-hover:opacity-0"></div>
              <div className="absolute bottom-10 left-10 text-white z-10">
                <h2 className="text-2xl font-bold">{article.title}</h2>
                <p className="text-sm">{article.description}</p>
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

      <div className="grid grid-cols-3 gap-5 w-[1180px]">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div 
            key={item} 
            className="relative w-[380px] h-[400px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleArticleClick(item)}
          >
            <div className="relative">
              <img src={image1} alt="Article" className="w-full h-[220px] object-cover rounded-t-lg" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-red-500 opacity-30 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
            <div className="p-5">
              <h3 className="font-inter font-semibold text-lg mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              <p className="font-inter text-sm text-justify mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
              <div className="flex items-center text-gray-500 text-sm">
                <FaCalendar className="mr-1" />
                23 Januari 2025
              </div>
              <span className="font-inter font-bold text-[#D60100] text-sm cursor-pointer">Read more...</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;