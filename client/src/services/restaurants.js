import api from "./api-config";

export const getRestaurants = async () => {
  try {
    const response = await api.get("/restaurants");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRestaurant = async (id) => {
  try {
    const response = await api.get(`restaurants/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createRestaurant = async (formData) => {
  try {
    const response = await api.post("/restaurants", { restaurant: formData });
    return response.data;
  } catch (error) {
    throw error;
  }
};
// convert to put to pass in userId

export const updateRestaurant = async (id, formData) => {
  try {
    const response = await api.put(`/restaurants/${id}`, { restaurant: formData });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteListing = async (id) => {
  try {
    const response = await api.delete(`/restaurants/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
