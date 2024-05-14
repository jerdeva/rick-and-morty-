import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api'

export const getAllCharacters = async () => {
  const response = await axios.get(`/character`);
  return response.data.results;
};



