import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

console.log('process.env.API_URL', process.env.API_URL);
const axiosClient = axios.create({
  baseURL: process.env.API_URL,
});

axiosClient.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      console.log(`Bearer ${token}`);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default axiosClient;
