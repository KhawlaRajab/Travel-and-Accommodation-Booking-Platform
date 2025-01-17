import { TextField } from '@mui/material';
import { useField } from 'formik';
import { FeildProps } from './type';


const TextInput: React.FC<FeildProps> = ({...props}) => {
    const [field, meta] = useField<String>(props.name);
    return (
        <>
              <TextField
                {...field}
                {...props}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error} 
            />
        </>
    )
} 
export default TextInput;
