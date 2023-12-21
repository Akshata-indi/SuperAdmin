const baseUrl = 'http://192.168.0.144:8081/api/getAll';

export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};