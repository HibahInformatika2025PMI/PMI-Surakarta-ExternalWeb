/***
 * This is the utility function that will fetch the article details from the server.
 * 
 * Is used in:
 * - UseFetchArticleDetails.jsx
 */

const HandleFetchArticleDetails = async (id) => {
  // Check if id is provided
  if (!id) {
    console.error('Article ID is required');
    throw new Error('Article ID is required');
  }

  try {
    // Fetch the article details from the server using proxy to avoid CORS issues
    const response = await fetch(`/api/news/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`Failed to fetch article details: ${response.status} ${response.statusText}`);
    }

    // Try to parse the response as JSON
    let data;
    try {
      data = await response.json();
      console.log(data);
    } catch (parseError) {
      console.error('Error parsing response as JSON:', parseError);
      throw new Error('Invalid response format from server');
    }

    // Check if the response is successful
    if (data.status === 'success') {
      return data.data;
    } else {
      throw new Error(data.message || 'Failed to fetch article details');
    }
  } catch (error) {
    console.error('Error fetching article details: ', error);
    throw error;
  }
}

export default HandleFetchArticleDetails
