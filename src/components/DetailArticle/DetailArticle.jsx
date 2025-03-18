import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendar, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import image1 from '../../assets/images/image1.png';

const DetailArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleRelatedArticleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const article = {
    title: "Title Berita - Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "21 Maret 2024",
    image: image1,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.`,
    relatedArticles: [
      {
        id: 1,
        title: "Title Berita Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: image1,
        date: "23 Maret 2024"
      },
      {
        id: 2,
        title: "Title Berita Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: image1,
        date: "22 Maret 2024"
      },
      {
        id: 3,
        title: "Title Berita Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: image1,
        date: "21 Maret 2024"
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-gray-600 mb-6">
        BERITA TERKINI
      </div>

      <div className="flex gap-8">
        {/* Main Article Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">
            {article.title}
          </h1>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <FaCalendar />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-4">
              <FaFacebook className="text-red-600 hover:text-red-700 cursor-pointer" />
              <FaTwitter className="text-red-600 hover:text-red-700 cursor-pointer" />
              <FaYoutube className="text-red-600 hover:text-red-700 cursor-pointer" />
            </div>
          </div>

          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none mb-12">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-800 leading-relaxed mb-4">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Related Articles Sidebar */}
        <div className="w-[380px]">
          <h2 className="text-xl font-bold mb-6">BERITA LAINNYA</h2>
          <div className="space-y-6">
            {article.relatedArticles.map((item) => (
              <div 
                key={item.id} 
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleRelatedArticleClick(item.id)}
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <FaCalendar className="mr-2" />
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold mb-4">PMI Kota Surakarta</h3>
          <div className="space-y-2 text-gray-600">
            <p>Jl. Kol. Sutarto No. 58 Jebres, Surakarta, Jawa Tengah 57126</p>
            <p>(0271) 648 731</p>
            <p>Email: info@pmisurakarta.or.id</p>
          </div>
        </div>
        <div className="w-full h-[200px] bg-gray-200 rounded-lg">
          {/* Map implementation here */}
        </div>
      </div>
    </div>
  );
};

export default DetailArticle;