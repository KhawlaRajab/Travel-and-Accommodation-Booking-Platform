export interface Hotel{
    hotelId: number,
    hotelName: string,
    starRating: number,
    visitDate: Date,
    cityName: string,
    thumbnailUrl: string,
    priceLowerBound: number,
    priceUpperBound: number
}

export interface deal{
    hotelId: number,
    originalRoomPrice: number,
    discount: number,
    finalPrice: number,
    cityName: string,
    hotelName: string,
    hotelStarRating: number,
    title: string,
    description: string,
    roomPhotoUrl:string
}

export interface trend {
    cityId: number,
    cityName: string,
    countryName: string,
    description: string,
    thumbnailUrl: string
  }