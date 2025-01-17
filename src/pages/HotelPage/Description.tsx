import { useQuery } from "react-query";
import { getHotelInfo } from "./API/Api";
import { descreption } from "./type";
import { Rating, Stack, Typography } from "@mui/material";


const hotelId = 1;
const Description: React.FC = () => {
    const { data, error, isLoading } = useQuery<descreption, Error>(
        ["getHotelInfo", hotelId],
        () => getHotelInfo(hotelId),
        {
          enabled: !!hotelId,
        }
      );
    
     if(isLoading) return <p>Loading...</p>
    if (error) return <p>error...</p>
    return (
        
        <Stack direction={'column'}sx={{backgroundColor:'ghostwhite',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} padding={2}>
           <Stack direction={'row'} alignItems={'center'} >
                <Typography variant="h5" component={'h6'} paddingRight={12}>{data?.hotelName}</Typography>
                <Rating name="read-only" value={data?.starRating} readOnly />
            </Stack>       
            <Typography variant="subtitle2" color='textDisabled'>{data?.location}</Typography>
            <Typography variant="subtitle1" >{data?.description}</Typography>
            <Typography variant="h6" paddingTop={2}>Amenities</Typography>
            {data?.amenities.map((amenity) =>( 
                <Typography variant="subtitle2" paddingY={.5}>{amenity.name}</Typography>
            ))}
        </Stack> 
    )
}

export default Description;