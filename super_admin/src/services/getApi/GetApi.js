
const baseUrl = 'http://192.168.0.104:8081/api/getall';



export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};