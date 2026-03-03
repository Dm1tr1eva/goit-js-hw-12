import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

const myApiKey = '54811885-a0f1e46fb5733e769b4bb2295';

export async function getImagesByQuery(query, page, per_page) {
  const response = await axios.get('/api/', {
    params: {
      key: myApiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    },
  });
  return response.data;
}
