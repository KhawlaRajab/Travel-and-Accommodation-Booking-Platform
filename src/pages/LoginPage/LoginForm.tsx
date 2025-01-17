import { FormikProvider, Form, useFormik } from "formik";
import { loginPayload, loginResponse } from "./loginType";
import { intialValues, validationSchema } from "./LoginConstatns";
import TextInput from '../../components/Field/TextField';
import PasswordFeild from '../../components/Field/passwordFeild';
import { Button, Stack, Typography } from "@mui/material";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
// import  { AxiosError } from "axios";
import { axiosInstance } from "../../axiosInstance";
import { useAuth } from "./AuthContext";
import style from './login.module.css';
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
        const { setToken } = useAuth();
        const navigate = useNavigate();
        const formik = useFormik<loginPayload>({
        initialValues: intialValues,
        validationSchema: validationSchema,
         onSubmit: async (values) => {
            
             try {
                 const res = await axiosInstance.post('/api/auth/Authenticate', {
                     userName: values.userName,
                     password: values.password
                 });
                 const response: loginResponse = res?.data;
                 setToken(response?.authentication);
                 localStorage.setItem('token', response?.authentication);
                 navigate(response.userType === 'Admin' ? '/Cities' : '/home');

             }
            catch (error) {
                        
            }
        }
      
    })

    


    return (
        <FormikProvider value={formik} >
            <Form onSubmit={formik.handleSubmit} className={style.form}>
              <Stack spacing={{ xs: 2 }}
                    direction="column"
                sx={ { boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                        , padding: '70px'
                    }}>
                 <Typography align="center"> <FlightTakeoffIcon fontSize="large" color="primary" /> </Typography>       
                <Typography variant="h5">Login to TravelZ</Typography>
                <Typography variant="body1">Welcome, please log in to continue</Typography>  
                <TextInput
                     sx={{width:'35ch'}}
                    name='userName'
                    placeholder='username'
                />
                <PasswordFeild 
                    sx={{width:'35ch'}}
                    name='password'
                    placeholder='password'/>
                
                <Button type='submit'
                        variant='contained'
                        sx={{ width: '39ch', height: '6ch' }}
                        disabled={!formik.isValid} >
                    Login
                </Button>
              </Stack>  
            </Form>
        </FormikProvider>
    
    )
}

export default LoginForm;
