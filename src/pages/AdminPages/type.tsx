

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
    roomPhotoUrl?: string,
    roomType: string,
    capacityOfAdults: number,
    capacityOfChildren: number,
    roomAmenities: 
      {
        name: string,
        description: string
      }[]
    ,
    price: number,
    availability: boolean
}