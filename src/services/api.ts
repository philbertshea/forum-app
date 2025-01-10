import axios from "axios";

const API_URL = ""; // Replace with your backend URL

export const login = async (username: string) => {
  const response = await axios.post(`${API_URL}/login`, { username });
  return response.data;
};

export const register = async (username: string) => {
  const response = await axios.post(`${API_URL}/register`, { username });
  return response.data;
};
