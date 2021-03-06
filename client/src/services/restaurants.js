import api from "./apiConfig";

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

export const createRestaurant = async (restaurant) => {
  try {
    const response = await api.post("/restaurants", restaurant);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// convert to put to pass in userId

export const updateRestaurant = async (id, restaurant) => {
  try {
    const response = await api.put(`/restaurants/${id}`, restaurant);
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
