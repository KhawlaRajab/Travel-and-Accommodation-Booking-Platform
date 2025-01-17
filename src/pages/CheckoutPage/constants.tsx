import * as Yup from 'yup'
import { bookingDetails } from './type'

export const intialValues :bookingDetails = {
    fullName: '',
    email: '',
    address: '',
    phoneNumber: '',
    paymentMethod: 'Cash',
    cardNumber: '',
    expireDate: '',
    CVV: '',
    notes:''
    
}
export const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    paymentMethod: Yup.string().required("Payment method is required"),
    cardNumber:Yup.string()
    .when("paymentMethod", {
      is: "Credit Card",
      then: (schema) => schema.required("card number is required"),
      otherwise: (schema) => schema.notRequired(),
    })
     ,
    expireDate: Yup.string()
      .when("paymentMethod", {
        is: "Credit Card",
        then: (schema) => schema.required("Expiration date is required"),
        otherwise: (schema) => schema.notRequired(),
      })
      .matches(
        /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
        "Expiration date must be in MM/YY format"
      ),
    CVV: Yup.string()
      .when("paymentMethod", {
        is: "Credit Card",
        then: (schema) =>
          schema
            .required("CVV is required")
            .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
        otherwise: (schema) => schema.notRequired(),
      }),
  });
