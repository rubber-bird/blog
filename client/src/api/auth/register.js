import axios from 'axios';

import api from '../../config.js';

// console.log('ss', api.url)
const register = (requestObject) => {
  return axios({
    method: 'post',
    baseURL: api.url,
    url: '/auth/register',
    data: requestObject
  });
};

export default register;
