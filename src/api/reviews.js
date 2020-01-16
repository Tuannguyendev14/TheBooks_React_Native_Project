import callApi from './utils';

export const getComments = idBook => {
  return callApi(`/api/Reviews/?bookId=${idBook}`, 'GET');
};

export const addComment = (data, Token) => {
  return callApi('/api/reviews', 'POST', data, Token);
};

export const getCommentDetail = (Id, Token) => {
  return callApi(`/api/reviews/${Id}`, 'GET', Token);
};

export const updateComment = (Id, data, Token) => {
  return callApi(`/api/reviews/${Id}`, 'PUT', data, Token);
};

export const getOutstandingReviews = () => {
  return callApi('/api/cms/reviews', 'GET');
};
