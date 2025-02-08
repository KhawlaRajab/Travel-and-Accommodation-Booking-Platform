import { useQuery } from "react-query";
import { room } from "./type";
import { getHotelRooms } from "./API/Api";
import Room from "./Room";
import Grid from "@mui/material/Grid2";
import { Box, CircularProgress, Typography } from "@mui/material";

const Rooms:React.FC<{hotelId:number}> = ({hotelId})=> {
    const { data, isLoading, error } = useQuery<room[], Error>(
        ['getRooms', hotelId],
        () => getHotelRooms(hotelId), {
            enabled:!!hotelId
        }
    )

    return (
        <Box>
            <Typography variant="h5" paddingY={3}>Rooms</Typography> 
            {error && (<Typography variant="body1">{error?.message}</Typography>)}
            {isLoading &&(<CircularProgress /> ) }
        <Grid container spacing={3} alignItems={'center'}>
            {data?.map((room) => (
                 <Grid size={{ xs: 12 ,sm:6, md: 4 }} > 
                    <Room  room={room} key={room.roomId} inCart={false} />
                 </Grid>   
            ))}
            </Grid>  
        </Box>        
    )
}

export default Rooms;