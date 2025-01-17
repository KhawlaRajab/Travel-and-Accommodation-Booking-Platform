import { Container, Typography } from "@mui/material";
import { getRecentlyVisited } from "./Api/Api";
import Grid from '@mui/material/Grid2';
import { useQuery } from "react-query";
import HotelCard from "./Cards/HotelCard";
import { Hotel } from "./Cards/type";
import { useAuth } from "../LoginPage/AuthContext";
import { Token } from "../jwtDecode";
// import { useEffect } from "react";


const RecentlVisited: React.FC = () => {
  const { token } = useAuth();
  const { user_id } = Token(token);    
    const { data:hotel, error, isLoading } = useQuery<Hotel[], Error>(
     ['recentlyVisited', user_id],
     ()=>getRecentlyVisited(user_id), {
        enabled: !!user_id, 
      }
    )
    
    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }
    

    return (
      <Container>
          <Typography variant="h4" component='h2' paddingTop={10} paddingBottom={5}>Recently Visited</Typography>
            <Grid container spacing={3} alignItems={'center'}>
                {hotel?.map((hotel) => (
                    <Grid size={{ xs: 12 ,sm:6, md: 4 }} key={hotel.hotelId}> 
               <HotelCard hotel={hotel} />
          </Grid>
        ))}
      </Grid>
        </Container>
    )
}

export default RecentlVisited;