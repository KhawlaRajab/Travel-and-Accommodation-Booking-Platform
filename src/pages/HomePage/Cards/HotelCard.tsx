import { Button, Card, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material';
import { Hotel } from './type';



interface HotelCardProps {
    hotel: Hotel;
  }

const HotelCard: React.FC<HotelCardProps> = ({hotel}) => {
    return (
         <Card sx={{ maxWidth:335, boxShadow: 3 ,borderRadius:3 }}>
           <CardMedia
             component="img"
             height="200"
             image={hotel.thumbnailUrl}
             alt={hotel.hotelName}
             sx={{
              objectFit: "cover",
              }}/>
                <CardContent>
                   <Typography variant='h6' component={'h2'}>{hotel.hotelName}</Typography>
                    <Rating name='read-only' value={hotel.starRating} readOnly />
                    <Typography variant='subtitle1'>location: {hotel.cityName}</Typography>
                          
                    <Stack direction={'row'} justifyItems={'center'} paddingBottom={2}>
                        <Typography>price: </Typography>
                        <Typography>{hotel.priceLowerBound}-</Typography>
                        <Typography>{hotel.priceUpperBound}</Typography>
                    </Stack>
                    <Button variant='contained'>View Details</Button>
               </CardContent>
            </Card>
    )
}



export default HotelCard;