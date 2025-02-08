import { Field, Form, FormikProvider, useFormik } from "formik";
import { intialValues, validationSchema } from "./constants";
import { bookingDetails, bookingRequest } from "./type";
import TextInput from "../../components/Field/TextField";
import { Stack, Typography } from "@mui/material";
import Button from "../../components/Button";
import { axiosInstance } from "../../axiosInstance";
import styles from './style.module.css'
import { useCart } from "./useCart";
import { useNavigate } from "react-router-dom";
import { Token } from "../jwtDecode";
import { useAuth } from "../LoginPage/AuthContext";


const BookingForm: React.FC = () => {
  const { token } = useAuth();
  const { given_name }  = Token(token);
  const { cartItems,EmptyCart } = useCart();
  const navigate = useNavigate();
  const formik = useFormik<bookingDetails>({
    initialValues: intialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      payment(values);        
    }
  })

  const payment = (values: bookingDetails) => {
    cartItems.map(async (item) => {
      const body: bookingRequest = {
        customerName: given_name,
        hotelName: item.roomType,        
        roomNumber: item.roomNumber.toString(),      
        roomType: item.roomType,          
        bookingDateTime: new Date().toISOString(),
        totalCost: item.price,       
        paymentMethod: values.paymentMethod,
      };
         try {
            const res = await axiosInstance.post<bookingRequest>('/api/bookings',body);
            console.log(res?.data);
            EmptyCart();
            navigate('/Confirmation');
          }
          catch (error) {
             console.log(error);       
          }

    }) 
           EmptyCart();
           navigate('/Confirmation'); 
  } 


  const disabled = ():boolean => {
      return formik.values.paymentMethod !== 'Credit Card';
  }

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
               <Stack direction={'column'} spacing={{ xs: 1}} className={styles.form} alignItems={'center'}>   
                    <Typography variant="h5" paddingY={1}>Booking information</Typography>
                    
                   <TextInput
                     className={styles.input}
                     name='fullName'
                     placeholder='FullName'
                    />

                   <TextInput
                     className={styles.input}
                     name='email'
                     placeholder='email'
                    />
                    
                    <TextInput
                     className={styles.input}
                     name='phoneNumber'
                     placeholder='phoneNumber'
                    />

                   <TextInput
                     className={styles.input}
                     name='address'
                     placeholder='address'
                    />
                    
                    <Field as="select" name="paymentMethod" className={styles.select} >
                      <option value="Credit Card">Credit Card</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Cash">Cash</option>
                    </Field>

                    <TextInput
                     className={styles.input}
                     name='cardNumber'
                     placeholder='cardNumber'
                     disabled={disabled()}
                    />

                   <TextInput
                     className={styles.input}
                     name='expireDate'
                     placeholder='expireDate'
                     disabled={disabled()}
                    />

                   <TextInput
                     className={styles.input}
                     name='CVV'
                     placeholder='CVV'
                    disabled={disabled()}
                    />

                   <TextInput
                     className={styles.input}
                     name='notes'
                     placeholder='notes'
                    />

                 <Button type='submit' variant="contained" disabled={cartItems.length===0 || !formik.isValid}>
                    {cartItems.length ? 'Book Now' : 'Fill Your Cart To Book'}
                 </Button>

                </Stack>      
            </Form>
            
       </FormikProvider>
    )
}

export default BookingForm;

