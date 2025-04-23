/***
 * This hook provides a simple way to fetch news from the server.
 * 
 * Is used in:
 * - 
 */

import { useState, useEffect } from 'react'

import HandleFetchNews from '../utils/HandleFetchNews'

const UseFetchNews = () => {
  const [featuredNews, setFeaturedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch the news from the server
        setLoading(true);
        const news = await HandleFetchNews();

        // Set the news to the state
        setFeaturedNews(news);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news: ', error);

        // Set the error to the state
        setError(error);
        setFeaturedNews([]);
      } finally {
        setLoading(false);
      }
    };

    // Fetch the news
    fetchNews();
  }, []);

  return { featuredNews, loading, error };
}

export default UseFetchNews