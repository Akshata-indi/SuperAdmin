// const baseUrl = 'http://localhost:3003';
const baseUrl = 'http://192.168.0.139:8080/api/addGroup/Group';

export const postApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};