import { ComponentPropsType} from "./type";
import { Card, Stack } from "@mui/material";
import Hotel from "./Hotel";


const List: React.FC<Omit<ComponentPropsType, 'onFilter'>> = ({ data }) => {

    return (
        <Stack direction={'column'} spacing={3}>
            {data?.map((result) => ( 
                <Card key={result.hotelId} sx={{maxWidth:'650px',minHeight:{sm:'200px'},maxHeight:{md:'200px'}}} >  
                    <Hotel searchResult={result} />  
                </Card>    
            ))}
        </Stack>
    )
}
export default List;