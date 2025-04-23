/***
 * This is a utility function that handles the fetching of news from the server.
 * 
 * Is used in:
 * - UseFetchNews.jsx
 */

const HandleFetchNews = async () => {
  try {
    // Fetch the news from the server using proxy to avoid CORS issues
    const response = await fetch('/api/news', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });
    // Parse the response as JSON
    const data = await response.json();
    console.log(data);

    // Check if the response is successful
    if (data.status === 'success') {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch news');
    }
  } catch (error) {
    console.error('Error fetching news: ', error);
    throw error;
  }
}

export default HandleFetchNews