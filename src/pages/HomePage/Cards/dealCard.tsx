import { Box, Button, Card, CardContent, CardMedia, Rating, Stack, Typography, styled } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import PlaceIcon from '@mui/icons-material/Place';

import { deal } from './type';

const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent:'space-between'
    
})

interface DealCardProps {
    hotel: deal;
  }


const DealCard: React.FC<DealCardProps> = ({hotel}) => {
    return (
        <Card sx={{ maxWidth: 335, boxShadow: 3 ,borderRadius:3 }}>
        <CardMedia
          component="img"
          height="200"
          image={hotel.roomPhotoUrl}
          alt={hotel.hotelName}
          sx={{
            objectFit: "cover",
          }}
        />
                <CardContent>
                    <Typography variant='h6' component={'h2'} >{hotel.title}</Typography>
                    <Typography variant='subtitle2' component={'p'} paddingY={2}>{hotel.description.split(' ').slice(0,20).join(' ')+'...'}</Typography>
                   <StyledBox>
                    <Box display='flex' justifyContent={'space-between'}>
                        <PlaceIcon sx={{marginRight:'3px'}} color='primary'/>
                        <Typography>
                           {hotel.cityName}
                        </Typography>
                        </Box>
                        <Rating name='read-only' value={hotel.hotelStarRating} readOnly />
                </StyledBox>   
              
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box display='flex' justifyContent={'space-between'} alignItems={'center'}>
                        <HotelIcon sx={{marginRight:'3px'}}  />
                        <Typography paddingY={1}>{hotel.hotelName}</Typography>
                    </Box>    
                    <Box>
                        <Typography component='span' paddingX={1} sx={{textDecoration:'line-through'}}>{hotel.originalRoomPrice}$</Typography>
                        <Typography component='span' color='red'>{hotel.finalPrice}$</Typography>
                    </Box>   
                 </Stack>
                    <Button type='button' variant='contained'>View Details</Button>
                </CardContent>
             </Card>
    )
}

export default DealCard;