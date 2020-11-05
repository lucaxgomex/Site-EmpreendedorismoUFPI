import axios from 'axios';
import { store } from '../store';
require('dotenv').config();

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://${url_da_api}';

axios.interceptors.request.use(
  request => {
    const headers = {
      locale: 'pt-br',
      accept: 'application/json',
      Authorization: store.getState().auth.accesstoken,
    };

    if (request.url.includes('files')) {
      headers.accept = '*/*'
      headers.ContentType = 'multipart/form-data'
    }

    request.headers = headers;
    return request;
  },
  err => {
    Promise.reject(err);
});
  

export default axios;