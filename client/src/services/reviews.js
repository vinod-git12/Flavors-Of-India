import api from './api-config';

export const getAllReviews = async () => {
  const resp = await api.get('/reviews');
  return resp.data;
}