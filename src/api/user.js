import callApi from './utils';

export const register = data => {
  return callApi('/api/users', 'POST', data);
};

export const login = data => {
  return callApi('/api/Token', 'POST', data);
};

export const logout = () => {
  return callApi('/api/Token', 'DELETE');
};
