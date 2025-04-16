/***
 * UseEffectFetchArticles is a hook that fetches articles from the server and returns them.
 * This hook will handles errors and logs them to the console.
 */

import { useState, useEffect } from 'react';
import FetchNews from '../utils/FetchNews';

const UseEffectFetchArticles = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const articles = await FetchNews();
        setFeaturedArticles(articles || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err.message || "Tidak dapat terhubung ke server");
        setFeaturedArticles([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticles();
  }, []);

  return { featuredArticles, loading, error };
};

export default UseEffectFetchArticles;

