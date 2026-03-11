import axiosInstance from "./axios";

interface SignupData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}


export const signupUser = async (data: SignupData) => {
  const response = await axiosInstance.post("/auth/signup", data);
  return response.data;
};


export const loginUser = async (data: LoginData) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};


export const logoutUser = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};


export const refreshToken = async () => {
  const response = await axiosInstance.post("/auth/refresh");
  return response.data;
};

export const getCookies = async () => {
  const response = await axiosInstance.get("/auth/cookies");
  return response.data;
};