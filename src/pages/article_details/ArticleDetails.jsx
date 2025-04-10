import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendar, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const ArticleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = React.useState(null);

  // Fetch detailed news
  const fetchArticle = async () => {
    try {
      const response = await fetch(`http://localhost:8080/news/${id}`);
      const data = await response.json();
      if (data.status === 'success') {
        setArticle(data.data);
      }
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  // Call fetchArticle when the component is mounted
  React.useEffect(() => {
    fetchArticle();
  }, [id]);

  const handleRelatedArticleClick = (articleId) => {
    navigate(`/news/article/${articleId}`);
  };

  if (!article) return <div>Loading...</div>;

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
              <span>{new Date(article.created_at).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-4">
              <FaFacebook className="text-red-600 hover:text-red-700 cursor-pointer" />
              <FaTwitter className="text-red-600 hover:text-red-700 cursor-pointer" />
              <FaYoutube className="text-red-600 hover:text-red-700 cursor-pointer" />
            </div>
          </div>

          <img 
            src={article.cover_image}
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
            {article.relatedArticles && article.relatedArticles.map((item) => (
              <div 
                key={item.id} 
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleRelatedArticleClick(item.id)}
              >
                <img 
                  src={item.cover_image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <FaCalendar className="mr-2" />
                  <span>{new Date(item.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;