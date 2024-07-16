import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const login = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};

const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

const authService = {
  login,
  register,
};

export default authService;
