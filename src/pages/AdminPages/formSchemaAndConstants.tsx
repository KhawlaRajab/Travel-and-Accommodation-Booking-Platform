import * as Yup from 'yup'

export const CityInitialValues = {
    id:0,
    name: '',
    description:''
}



export const HotelInitialValues = {
    name: '',
    description: '',
    hotelType: '',
    starRating:0
}


export const RoomInitialValues = {
    roomNumber: 1,
    roomPhotoUrl: '',
    roomType: '',
    capacityOfAdults: 2,
    capacityOfChildren: 0,
    roomAmenities:[
     
      ],
    price: 100,
    availability: true
}


export const cityValidationSchema = Yup.object({
    id: Yup.number().required('this feild is requierd'),
    name: Yup.string().required('this feild is requierd'),
    description: Yup.string().required('this feild is requierd'),
})



