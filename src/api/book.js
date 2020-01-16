import callApi from './utils';

export const getBook = () => {
  return callApi('/api/cms/home', 'GET');
};

export const getBookDetail = idBook => {
  return callApi(`/api/books/${idBook}`, 'GET');
};
