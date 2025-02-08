import { axiosInstance } from "../../../axiosInstance"


export const getGallery = async(hotelId:number) => {
    const response = await axiosInstance.get(`/Api/hotels/${hotelId}/gallery`);
    return response.data;
}

export const getHotelInfo = async(hotelId:number) => {
    const response = await axiosInstance.get(`/Api/hotels/${hotelId}`);
    return response.data;
}

export const getHotelRooms = async(hotelId:number) => {
    const response = await axiosInstance.get(`/Api/hotels/${hotelId}/rooms?checkInDate=1&CheckOutDate=1`);
    return response.data;
}


// export const getAvailableRooms = async(hotelId:number) => {
//     const response = await axiosInstance.get(`/Api/hotels/${hotelId}/available_rooms?checkInDate=1&CheckOutDate=1`);
//     return response.data;
// }

export const getReviews = async(hotelId:number) => {
    const response = await axiosInstance.get(`/Api/hotels/${hotelId}/reviews`);
    return response.data;
}
