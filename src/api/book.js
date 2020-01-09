import callApi from './util';

export const getBook = () => {
  return callApi('/api/cms/home', 'GET');
};
