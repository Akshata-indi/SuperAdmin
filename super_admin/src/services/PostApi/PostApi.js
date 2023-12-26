const baseUrl = 'http://192.168.0.134:8080/api';

export const postApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};