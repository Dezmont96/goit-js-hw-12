import axios from 'axios';

const API_KEY = '51710897-f9d3bb10ca12010c1e23c8ef5';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15, 
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}