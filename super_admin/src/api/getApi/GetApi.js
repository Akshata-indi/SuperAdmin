const baseUrl = 'http://192.168.0.144:8080/api/getAll/Group/getall';

export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};