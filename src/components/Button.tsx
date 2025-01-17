import Button from "@mui/material/Button/Button";
import { ButtonProps } from "@mui/material/Button/Button";


const SubmitButton: React.FC<ButtonProps> = ({...props}) => {

    return (
        <>
            <Button
            {...props}>       
            </Button>
        </>  
    )
}

export default SubmitButton;