const baseUrl = 'http://localhost:3003';

export const postApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};