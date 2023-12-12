import axios from 'axios';
import {store} from './store'; // Import the Redux store

export const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.request.use((config) => {
  // Get the token from the Redux store
  const { token } = store.getState();

  // Add the token to the request headers
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
 