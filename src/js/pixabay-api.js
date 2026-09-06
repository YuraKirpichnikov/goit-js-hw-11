import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// Get your own free key at https://pixabay.com/api/docs/ and paste it below.
const API_KEY = '51590365-your_own_key_goes_here';

/**
 * Performs an HTTP request to the Pixabay API and returns the response data.
 * @param {string} query - the word/phrase the user searched for
 * @returns {Promise<Object>} the "data" property of the Pixabay response
 */
export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get('', { params });
  return response.data;
}
