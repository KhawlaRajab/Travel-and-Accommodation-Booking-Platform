import Grid from "@mui/material/Grid2";
import Gallery from "./Gallery";
import Navbar from "../../components/Navbar";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import Description from "./Description";
import Reviews from "./Reviews";
import Rooms from "./Rooms";
import Footer from "../../components/footer";


const HotelPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const hotelId = id ? parseInt(id) : NaN;
    
    return (
    <Box>  
         <Navbar />  
    <Container>        
        <Grid container sx={{mt:15}}>
            <Grid size={{ sm: 12, md: 4 }}>
              <Description hotelId={hotelId} />     
              <Reviews hotelId={hotelId}/>           
            </Grid>
            <Grid size={{ sm: 12, md: 8 }}>
                <Gallery hotelId={hotelId}/>
           </Grid>
         </Grid>
        <Rooms hotelId={hotelId}/>      
      </Container>    
      <Footer/>   
    </Box>     
    )
}

export default HotelPage;