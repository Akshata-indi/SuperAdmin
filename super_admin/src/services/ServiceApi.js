import axios from 'axios';

const baseUrl = 'http://localhost:3003';

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
