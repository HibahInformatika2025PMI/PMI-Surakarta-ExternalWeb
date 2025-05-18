/***
 * This hook provides a simple way to fetch the article details from the server.
 * 
 * Is used in:
 * - ArticleDetails.jsx
 */

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import HandleFetchArticleDetails from '../utils/HandleFetchArticleDetails'

const UseFetchArticleDetails = () => {
  const { id } = useParams();
  const [articleDetails, setArticleDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        // Fetch the article details from the server
        setLoading(true);
        const articleDetails = await HandleFetchArticleDetails(id);

        // Set the article details to the state
        setArticleDetails(articleDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching article details: ', error);

        // Set the error to the state
        setError(error);
        setArticleDetails(null);
      } finally {
        setLoading(false);
      }
    }

    // Fetch the article details
    fetchArticleDetails();
  }, [id]); // Add id to dependency array

  return { articleDetails, loading, error };
}

export default UseFetchArticleDetails