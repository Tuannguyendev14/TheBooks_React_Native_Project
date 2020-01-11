import callApi from './utils';

export const getRelatedBook = idBook => {
  return callApi(`/api/books/${idBook}/relatedbooks`, 'GET');
};
