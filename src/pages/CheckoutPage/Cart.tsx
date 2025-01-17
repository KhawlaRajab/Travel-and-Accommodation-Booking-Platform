import { Box, Container, Typography} from "@mui/material";
import Navbar from "../../components/Navbar";
import Grid from "@mui/material/Grid2";
import BookingForm from "./BookingForm";
import { useCart } from "./useCart";
import Room from "../HotelPage/Room";
import Footer from "../../components/footer";


const Cart: React.FC = () => {
  const { cartItems } = useCart();
    return (
    <Box> 
      <Navbar/>       
        <Container sx={{mt:12}}>
             <Grid container > 
               <Grid size={{ sm: 12, md: 8 }}>
                 {cartItems .length ?
                 <Grid container spacing={2}>
                
                     {cartItems.map((item) => (
                        <Grid size={{ sm: 12, md: 6 }}>
                           <Room room={item} key={item.roomId} inCart={true} />
                         </Grid>
                     ))}
                    </Grid> : <Typography variant="h5" color="error"> Your Cart is Empty</Typography> } 
                  </Grid> 
                    <Grid size={{ sm: 12, md: 4 }}>
                        <BookingForm/>
                    </Grid>        
            </Grid>
        </Container>
       <Footer/> 
      </Box>      
    )
}

export default Cart;