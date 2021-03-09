import api from './api-config';

export const getAllReviews = async (restaurantId) => {
  const resp = await api.get(`restaurants/${restaurantId}/reviews`);
  return resp.data;
};