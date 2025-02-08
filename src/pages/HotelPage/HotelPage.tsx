import Grid from "@mui/material/Grid2";
import Gallery from "./Gallery";
import Navbar from "../../components/Navbar";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Description from "./Description";
import Reviews from "./Reviews";
import Rooms from "./Rooms";
import Footer from "../../components/footer";
import { useQuery } from "react-query";
import { getHotelInfo } from "./API/Api";
import { descreption } from "./type";


const HotelPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const hotelId = id ? parseInt(id) : NaN;
    const { data, error, isLoading } = useQuery<descreption, Error>(
      ["getHotelInfo", hotelId],
      () => getHotelInfo(hotelId),
      {
        enabled: !!hotelId,
      }
    );
  

    
    return (
    <Box>  
         <Navbar />  
    <Container>        
        <Grid container sx={{mt:15}}>
            <Grid size={{ sm: 12, md: 4 }}>
            {error && (<Typography variant="body1">{error?.message}</Typography>)}
            {isLoading &&(<CircularProgress /> ) }
            {data ? <Description data={data} /> : <CircularProgress />}
              <Reviews hotelId={hotelId}/>           
            </Grid>
            <Grid size={{ sm: 12, md: 8 }}>
                <Gallery hotelId={hotelId}/>
           </Grid>
          </Grid>
        {/* <Map longitude={data?.longitude} latitude={data?.latitude}/>   */}
        <Rooms hotelId={hotelId}/>      
      </Container>    
      <Footer/>   
    </Box>     
    )
}

export default HotelPage;