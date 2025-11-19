import axios from 'axios';

export default axios.create({
  baseURL: 'https://crypto-confarance-backend.onrender.com/',
  responseType: 'json',
});