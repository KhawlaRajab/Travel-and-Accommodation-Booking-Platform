import { SearchParam } from "./type";
import { axiosInstance } from "../../axiosInstance";
import { ResultType } from "../../pages/SerachResultPage/type";


export const getSearchedHotels = async (SearchParam: SearchParam): Promise<ResultType[]> => {
    console.log(SearchParam);
    const searchCretiria = `city=${SearchParam.city}
    &checkInDate=${SearchParam.checkInDate}
    &checkInDate=${SearchParam.checkOutDate}
    &sort=${SearchParam.sort}
    &starRate=${SearchParam.starRate}&
    nymberOfRooms=${SearchParam.numberOfRooms}
    &adults=${SearchParam.adults}&
    children=${SearchParam.children} `;
    const response = await axiosInstance.get(`/api/home/search?${searchCretiria}`);
    console.log(response);
    return response.data;
}