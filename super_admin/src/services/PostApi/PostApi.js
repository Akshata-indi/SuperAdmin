const baseUrl = 'http://192.168.0.147:8080/api/postAll';

export const postApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};