import { SearchParam } from "./type";
import { axiosInstance } from "../../AxiosInstance";
import { ResultType } from "../../pages/SerachResultPage/type";

export const getSearchedHotels = async (
  searchParam: SearchParam
): Promise<ResultType[]> => {
  console.log(searchParam);
  const params = new URLSearchParams({
    city: searchParam.city,
    checkInDate: searchParam.checkInDate,
    checkOutDate: searchParam.checkOutDate,
    sort: searchParam.sort,
    starRate: String(searchParam.starRate),
    numberOfRooms: String(searchParam.numberOfRooms),
    adults: String(searchParam.adults),
    children: String(searchParam.children),
  });

  const response = await axiosInstance.get(
    `/api/home/search?${params.toString()}`
  );
  console.log(response);
  return response.data;
};
