import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber-api.alpsoft.com.br',
});

export default api;
