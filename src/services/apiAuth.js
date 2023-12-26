import axios from "../configs/axios";
import { removeAccessToken } from "../utils/token";
export const login = async (credential) => {
  const response = await axios.post("/auth/login", credential);
  return response.data;
};

export const logout = () => {
  removeAccessToken();
};
