import axios from 'axios'
require('dotenv').config();

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://${url_da_api}',
    //timeout: 5000,
  });

export default api