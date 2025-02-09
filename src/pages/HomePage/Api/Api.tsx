import { axiosInstance } from "../../../AxiosInstance";

export const getRecentlyVisited = async (userId: string) => {
  const response = await axiosInstance.get(
    `/api/home/users/${userId}/recent-hotels`
  );
  return response.data;
};

export const getTrending = async () => {
  const response = await axiosInstance.get(`/api/home/destinations/trending`);
  return response.data;
};

export const getFeaturedDeals = async () => {
  const response = await axiosInstance.get(`/api/home/featured-deals`);
  return response.data;
};
