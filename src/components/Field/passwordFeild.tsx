import React, { MouseEvent } from 'react';
import { useField } from 'formik';
import { FeildProps } from './type';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, InputAdornment, TextField } from "@mui/material";

const PasswordFeild: React.FC<FeildProps> = ({...props}) => {
    const [field, meta] = useField<String>(props.name);
    const [isVisble, setIsVisible] = useState<Boolean>(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisble);
    }

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
        
    return (
        <>
            <TextField
                type={isVisble?'text':'password'}
                {...field}
                {...props}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error} 
                slotProps={{
                    input: {
                        endAdornment: <InputAdornment position="end" >
                            <IconButton onClick={toggleVisibility}  onMouseDown={handleMouseDownPassword}>
                                {!isVisble ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>    
                        </InputAdornment>,
                    },
                  }}
            />
                
        </>
    )
} 
export default PasswordFeild;
