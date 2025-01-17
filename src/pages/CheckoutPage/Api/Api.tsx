import { axiosInstance } from "../../../axiosInstance"

export const getBookingDetails = async (bookingId:number) => {
    const res = await axiosInstance.get(`/api/bookings/${bookingId}`);
    return res.data;
} 