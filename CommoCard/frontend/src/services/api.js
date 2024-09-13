import axios from "axios";

const API_URL = "http://localhost:5000";

export const loginUser = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password });
};

export const registerUser = (username, password, avatarUrl) => {
  return axios.post(`${API_URL}/register`, { username, password, avatarUrl });
};
