import axios from 'axios';
import * as config from './config';

// export default function callApi(endpoint, method, body) {
//   return axios({
//     method: method,
//     url: `${config.API_URL}${endpoint}`,
//     data: body,
//   });
// }

// export function callApiAuth(endpoint, method, body, token) {
//   return axios({
//     method: method,
//     url: `${config.API_URL}${endpoint}`,
//     data: body,
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: 'Bearer' + token,
//     },
//   })
//     .then(function(response) {
//       console.log('called', response);
//       return response;
//     })
//     .catch(err => {
//       throw err.response;
//     });
// }

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
