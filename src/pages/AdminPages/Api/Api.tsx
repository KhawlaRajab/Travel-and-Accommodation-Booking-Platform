import { axiosInstance } from "../../../axiosInstance"
import { room } from "../../HotelPage/type";
import { City, Hotel } from "../type";

const getAuthToken = () => {
    return localStorage.getItem('token');
  };

export const getCities = async() => {
    const response = await axiosInstance.get('/api/cities');
    return response.data;
}


export const getHotels = async() => {
    const response = await axiosInstance.get('/api/hotels');
    return response.data;
}


export const getRooms= async() => {
    const response = await axiosInstance.get('/api/rooms');
    return response.data;
}


export const addCity = async (city: City) => {
    const response = await axiosInstance.post('/api/cities', { city }, {
        headers: {
            Authorization: `Bearer ${getAuthToken()}`, // Add token
        }  })

    return response.data;
}

export const addHotel = async(hotel:Hotel) => {
    const response = await axiosInstance.post('/api/hotels',{hotel});
    return response.data;
}

export const addRoom = async(room:room) => {
    const response = await axiosInstance.post('/api/rooms',{room});
    return response.data;
}

export const updateCity = async(cityId:number,city:City) => {
    const response = await axiosInstance.put(`/api/cities/${cityId}`,{city});
    return response.data;
}

export const updateHotel = async (hotelId: number, hotel:Hotel) => {
    const response = await axiosInstance.put(`/api/cities/${hotelId}`,{hotel});
    return response.data;
}

export const updateRoom = async (roomId: number, room:room) => {
    const response = await axiosInstance.put(`/api/cities/${roomId}`,{room});
    return response.data;
}

export const deleteCity = async (cityId: number) => {
    const response = await axiosInstance.delete(`/api/cities/${cityId}`);
    return response.data;
}

export const deleteHotel = async (hotelId: number) => {
    const response = await axiosInstance.delete(`/api/hotels/${hotelId}`);
    return response.data;
}

export const deleteRoom = async (roomId: number) => {
    const response = await axiosInstance.delete(`/api/rooms/${roomId}`);
    return response.data;
}