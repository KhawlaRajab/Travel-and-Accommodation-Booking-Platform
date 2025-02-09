import { axiosInstance } from "../../../AxiosInstance";

export const getAmenities = async () => {
  const response = await axiosInstance.get("/api/search-results/amenities");
  return response.data;
};
