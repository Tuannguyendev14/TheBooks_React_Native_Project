import callApi from './utils';

export const getNotification = (data, token) => {
  return callApi('/api/usernotifications', 'GET', data, token);
};
