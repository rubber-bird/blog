import axios from 'axios';

import api from '../../config.js';

// console.log('ss', api.url)
const login = (requestObject) => {
  return axios({
    method: 'post',
    baseURL: api.url,
    url: '/auth/login',
    data: requestObject
  });
};

export default login;
