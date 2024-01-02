
const baseUrl = 'http://localhost:3000';

export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};