import axios from 'axios';


// const baseUrl = 'http://localhost:3003';
const baseUrl = 'http://192.168.0.101:8080/api/addGroup/Group';
=======
const baseUrl = 'http://192.168.0.134:8080/api/register';


const apiService = axios.create({
  baseURL: baseUrl,
});

// POST request
export const postApi = async (endpoint, data) => {
  try {
    const response = await apiService.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
};

// GET request
export const getApi = async (endpoint) => {
  try {
    const response = await apiService.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error making GET request:', error);
    throw error;
  }
};
