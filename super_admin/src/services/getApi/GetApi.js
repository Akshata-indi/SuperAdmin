<<<<<<< HEAD:super_admin/src/services/getApi/GetApi.js
const baseUrl = 'http://192.168.0.104:8081/api/getall';
=======
const baseUrl = 'http://192.168.0.144:8081/api/getAll';
>>>>>>> 8158abdc5a5126487594d7a4b72d7ef903cde572:super_admin/src/api/getApi/GetApi.js

export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};