import axios from 'axios';
import { store } from '../store';
require('dotenv').config();

const url_da_api = 'empreendedorismoufpi.com.br/api';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `http://${url_da_api}`;

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
