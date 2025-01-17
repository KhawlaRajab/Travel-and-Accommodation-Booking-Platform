import { Form, FormikProvider, useFormik } from "formik";
import { Button, Divider, Stack, Typography } from "@mui/material";
import TextInput from "../../../components/Field/TextField";
import { addRoom, deleteRoom, updateRoom } from "../Api/Api";
import { room } from "../../HotelPage/type";

interface FormProps{
    operation: 'add' | 'update',
    room: room | null,
    onClose :()=>void
}

const RoomForm: React.FC<FormProps> = ({operation,room,onClose}) => {
    const formik = useFormik<room>({
        initialValues: room || RoomInitialValues ,
        onSubmit: async(values) => {
            try {
                if (operation === 'add')
                    await addRoom(values);
                else if (room?.id) {
                    await updateRoom(room.id, values);
                }
            }
            catch (error) {
                
            }
            onClose();
        }
    });

    const handleDelete = async () => {
        try {
          if (room?.id) {
            await deleteRoom(room.id); 
            onClose();
          }
        } catch (error) {
          
        }
      };
    return (
        <FormikProvider value={formik} >
            <Form onSubmit={formik.handleSubmit} >
               <Stack spacing={{ xs: 2 }} direction="column">
                    <Typography component={'h5'}> Room Form </Typography> 
                    <Divider />
                    
                    <TextInput
                     name='id'
                     placeholder='id' />

                    <TextInput
                     name='name'
                     placeholder='name' />
                       
                     <TextInput
                     name='description'
                     placeholder='description'  
                    />

                    <TextInput
                     name='hotelType'
                    placeholder='hotelType' />
                    
                    <TextInput
                     name='starRating'
                     placeholder='starRating'  
                    />
                </Stack>
                <Stack direction={'row'} spacing={1} paddingTop={2}>
                       <Button type='submit' variant="contained">{operation === 'update' ? 'Update' : 'add'}</Button>
                        {operation === 'update' &&
                         <Button type='button' variant='contained' onClick={handleDelete} color='error'>delete</Button>}
                </Stack>    
            </Form>
        </FormikProvider>
    )
}

export default RoomForm;