import axios from 'axios'
require('dotenv').config();

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:${porta_da_api_local}' : 'https://${url_da_api}',
    //timeout: 5000,
  });

export default api