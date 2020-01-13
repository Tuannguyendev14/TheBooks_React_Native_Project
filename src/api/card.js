import axios from 'axios';
import * as config from './config';

export function callApi(endpoint, method, body, token) {
    return axios({
        method: method,
        url: `${config.API_URL}${endpoint}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: body,
    }).then(function (response) {
        console.log('called', response);
        return response;
    }).catch(err => {
        throw err.response;
    });
}


export const addToCard = (data, token) => {
    return callApi('/api/basket', 'POST', data, token);
};
export const getCard = data => {
    return callApi('/api/basket/{id}', 'GET', data);
};

