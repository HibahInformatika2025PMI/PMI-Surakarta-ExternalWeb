/***
 * Fetch News Component is used to fetches news articles from the server and returns them.
 * This component will handles errors and logs them to the console.
 */

const FetchNews = async () => {
  try {
    // Fetch news articles
    const response = await fetch('http://localhost:8080/news'); // atau pake 'http://localhost:8080/news?is_draft=false'
    const data = await response.json();
    console.log(data);

    // Check if the response is successful
    if (data.status === 'success') {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch news');
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}

export default FetchNews