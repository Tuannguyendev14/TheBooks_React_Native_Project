import callApi from './utils';

export const getBook = () => {
  return callApi('/api/cms/home', 'GET');
};
