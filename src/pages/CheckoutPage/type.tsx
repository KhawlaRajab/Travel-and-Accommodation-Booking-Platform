import { ReactNode } from 'react';
import { room } from '../HotelPage/type';


export interface bookingDetails  {
    fullName: string,
    email:string,
    address: string,
    phoneNumber: string,
    paymentMethod: 'Credit Card' | 'PayPal' | 'Cash',
    cardNumber: string,
    expireDate: string,
    CVV: string,
    notes:string
    
}

export interface ConfirmationDetail{
        customerName: string,
        hotelName: string,
        roomNumber: string,
        roomType: string,
        bookingDateTime: ReactNode,
        totalCost: number,
        paymentMethod: string,
        bookingStatus: string,
        confirmationNumber: string
    
}

export interface bookingRequest{
    customerName: string,
    hotelName: string,
    roomNumber: string,
    roomType: string,
    bookingDateTime: ReactNode,
    totalCost: number,
    paymentMethod: string,
}
  
export interface CartContextType {
    cartItems: room[];
    addToCart: (item: room) => void;
    checkItem: (item: room) => boolean;
    removeItem: (item: room) => void;
    EmptyCart: () => void;
  }