import axios from 'axios';
import * as config from './config';

export default function callApi(endpoint, method, body, Token) {
  return axios({
    method: method,
    url: `${config.API_URL}${endpoint}`,
    data: body,
    headers: {
      Authorization: 'Bearer ' + Token,
      'Content-Type': 'application/json',
    },
  });
}
