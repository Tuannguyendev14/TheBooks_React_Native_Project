import axios from 'axios';
import * as config from './config';
import callApi from './utils';

export const addToCard = (data, token) => {
  return callApi('/api/basket', 'POST', data, token);
};
export const getCard = (idbasket, token) => {
  return callApi(`/api/basket/${idbasket}`, 'GET', '', token);
};
export const deleteCard = (data, token) => {
  return callApi('/api/basket', 'DELETE', data, token);
};
