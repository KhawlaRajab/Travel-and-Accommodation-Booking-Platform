import { Form, FormikProvider, useFormik } from "formik";
import { City } from "../type";
import { CityInitialValues, cityValidationSchema } from "../formSchemaAndConstants";
import { Divider, Stack, Typography } from "@mui/material";
import TextInput from "../../../components/Field/TextField";
import { addCity, deleteCity, updateCity } from "../Api/Api";
import Button from "../../../components/Button";
import { axiosInstance } from "../../../axiosInstance";

interface FormProps{
    operation: 'add' | 'update',
    city: City | null,
    onClose: () => void,
    
}

const CityForm: React.FC<FormProps> = ({operation,city,onClose}) => {
    const formik = useFormik<City>({
        initialValues: city || CityInitialValues,
        validationSchema:cityValidationSchema,
        onSubmit: async(values) => {
            try {
                if (operation === 'add')
                     await addCity(values);
                else if (city?.id) {
                    const res = await axiosInstance.put(`/api/cities/${city.id}`, { values });
                    console.log(res);
                }
            }
            catch (error) {
                console.log(error);
            }
            onClose();
        }
    });

    const handleDelete = async () => {
        try {
            if (city?.id) {
                const response = await axiosInstance.delete(`/api/cities/${city.id}`);
                console.log(response);
            onClose();
          }
        } catch (error) {
            console.log(error);
        }
      };
    return (
        <FormikProvider value={formik} >
            <Form onSubmit={formik.handleSubmit} >
               <Stack spacing={{ xs: 2 }} direction="column">
                    <Typography component={'h5'}> City Form </Typography> 
                    <Divider />
                    
                    <TextInput
                        name='id'
                        placeholder='id'/>

                    <TextInput
                        name='name'
                        placeholder='name'
                    />
                       
                     <TextInput
                        name='description'
                        placeholder='description'
                    />
                </Stack>
                <Stack direction={'row'} spacing={1} paddingTop={2}>
                       <Button type='submit' variant="contained">{operation === 'update' ? 'update' : 'add'}</Button>
                        {operation === 'update' &&
                         <Button type='button' variant='contained' onClick={handleDelete} color='error'>delete</Button>}
                </Stack>    
            </Form>
        </FormikProvider>
    )
}

export default CityForm;