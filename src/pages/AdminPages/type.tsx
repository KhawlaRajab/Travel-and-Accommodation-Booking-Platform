

export interface City{
    id?: number,
    name: string,
    description:string
}

export interface Hotel{
    id?: number,
    name: string,
    description: string,
    hotelType: string,
    starRating: number,
    latitude?: number,
    longitude?: number
}

export interface Room{
    roomId?: number,
    roomNumber: number,
    roomType: string,
    price: string,
    capacityOfChildren: number,
    capacityOfAdults: number,
    availability: boolean,
    roomPhotoUrl: string,
    roomAmenities:string[]
}