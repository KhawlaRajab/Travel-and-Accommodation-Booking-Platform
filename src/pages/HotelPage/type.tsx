
export interface gallery{
    id: number,
    url:string
}

export interface descreption{
        hotelName:string,
        location: string,
        description: string,
        latitude: number,
        longitude: number,
        amenities: [
          {
            name: string,
            description:string
          }
        ],
        starRating: number,
        availableRooms: number,
        imageUrl: string,
        cityId: number
}

export interface review  {
  reviewId: number,
  customerName: string,
  rating: number,
  description: string
}

export interface room{
      roomId: number,
      roomNumber: number,
      roomPhotoUrl: string,
      roomType: string,
      capacityOfAdults: number,
      capacityOfChildren: number,
      roomAmenities: [
        {
          name: string,
          description: string
        }
      ],
      price: number,
      availability: true
}