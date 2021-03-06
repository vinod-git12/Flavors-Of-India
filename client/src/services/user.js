import api from "./apiConfig";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post('/auth/login', { authentication: loginData })
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  } catch(e) {
    throw(e) 
  }
};

export const signIn = async (credentials) => {
  try {
    const response = await api.post("/users/sign-in", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async (user) => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const response = await api.get("/users/verify");
    return response.data;
  }
  return false;
};

export const getUsers = async () => {
  try {
    const response = await api.get("users/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await api.get(`users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
