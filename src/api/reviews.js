import callApi from './utils';

export const getComments = idBook => {
  return callApi(`/api/Reviews/?bookId=${idBook}`, 'GET');
};

export const addComment = (data, Token) => {
  console.log('Data' + data, 'Tokem' + Token);
  return callApi('/api/reviews', 'POST', data, Token);
};
