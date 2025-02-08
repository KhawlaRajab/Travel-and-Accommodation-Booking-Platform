import { CircularProgress, Container, Typography } from "@mui/material"
import { useQuery } from "react-query";
import { getTrending } from "./Api/Api";
import Grid from '@mui/material/Grid2';
import { trend } from "./Cards/type";
import TrendingCard from "./Cards/TrendingCard";


const Trending: React.FC = () => {
    const { data, error, isLoading } = useQuery <trend[],Error>(
        ['trending'],
       getTrending  
    )
    
    
    return (
        <Container>
          <Typography variant="h4" component='h2' paddingTop={10} paddingBottom={5}>Trending Destinations</Typography>
          {error && (<Typography variant="body1">{error?.message}</Typography>)}
          {isLoading &&(<CircularProgress /> ) }  
          <Grid container spacing={3} alignItems={'center'}>
            {data?.map((trending) => (
                <Grid size={{ xs: 12 ,sm:6, md: 4 }} key={trending.cityId}> 
           <TrendingCard trending={trending} />
      </Grid>
    ))}
  </Grid>
        </Container>
    )
}

export default Trending;