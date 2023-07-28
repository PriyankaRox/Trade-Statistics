import axios from 'axios';

const API_KEY = '2A8pI6vpt5RV_B9pNF5BZ1hoZTVifNrm';
const BASE_URL = 'https://api.polygon.io/v2/aggs/ticker';

export const fetchStockData = async (symbol, date) => {
  try {
    const response = await axios.get(`${BASE_URL}/${symbol}/range/1/day/${date}/${date}`, {
      params: {
        apiKey: API_KEY,
        contentType: 'application/json'
      },
    });

    const data = response.data.results[0];
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
