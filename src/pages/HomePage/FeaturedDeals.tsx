import { useQuery } from "react-query";
import { getFeaturedDeals } from "./Api/Api";
import { Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import DealCard from "./Cards/dealCard";
import { deal } from "./Cards/type";



const FeaturedDeals: React.FC = () => {
    const { data:hotels, error, isLoading } = useQuery<deal[], Error>(
        ['featuredDeals'],
        getFeaturedDeals,
    );
    
    

    return (
        <Container>
            <Typography variant="h4" component='h2' paddingBottom={3}>Featured Deals </Typography>
        <Grid container spacing={3} alignItems={'center'}>
            {hotels?.map((hotel) => (
                <Grid size={{ xs: 12 ,sm:6, md: 4 }} key={hotel.hotelId}> 
           <DealCard hotel={hotel} />
      </Grid>
    ))}
  </Grid>
    </Container>
    )
}

export default FeaturedDeals;