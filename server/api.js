const axios = require("axios");

const API_KEY = '2A8pI6vpt5RV_B9pNF5BZ1hoZTVifNrm';
const BASE_URL = 'https://api.polygon.io/v2/aggs/ticker';
// const BASE_URL = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=2A8pI6vpt5RV_B9pNF5BZ1hoZTVifNrm';
const AUTH = '2A8pI6vpt5RV_B9pNF5BZ1hoZTVifNrm';

const fetchStockData = async (symbol, date) => {
  try {
    const response = await axios.get(`${BASE_URL}/${symbol}/range/1/day/${date}/${date}`, {
      params: {
        apiKey: API_KEY,
      },
    });

    const data = response.data.results[0];
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

module.exports={
  fetchStockData
}