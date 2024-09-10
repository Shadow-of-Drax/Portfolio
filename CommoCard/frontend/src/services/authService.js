import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}login`, { email, password });
  return response.data.token;
};

export const register = async (username, email, password) => {
  await axios.post(`${API_URL}register`, { username, email, password });
};
