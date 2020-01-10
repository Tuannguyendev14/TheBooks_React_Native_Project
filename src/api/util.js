import axios from 'axios';

const API_URL = 'https://the-books-api-staging.enouvo.com';

export default function callApi(endpoint, method, body) {
  return axios({
    method: method,
    url: `${API_URL}${endpoint}`,
    //data: body,
  })
    .then(function(response) {
      //console.log('data api', response);
      return response;
    })
    .catch(err => {
      console.log('get error');
      throw err.response;
    });
}
