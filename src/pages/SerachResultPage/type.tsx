
export interface Amenities{
    id:number
    name: string,
    description:string
}

export interface ResultType{

          hotelId: number,
          hotelName: string,
          starRating: number,
          latitude: number,
          longitude: number,
          roomPrice: number,
          roomType: string,
          cityName: string,
          roomPhotoUrl: string,
          discount: number,
          amenities: Amenities[]
}