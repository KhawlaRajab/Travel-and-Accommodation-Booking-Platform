import { Card, CardMedia, CardContent, Typography, Button, Stack, Box, styled } from "@mui/material";
import { room } from "./type";
import { useCart } from "../CheckoutPage/useCart";

interface roomProps{
  room: room,
  inCart:boolean
  
}
const StyledBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize:'25px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  zIndex: 1,  
  
})


const Room: React.FC<roomProps> = ({ room,inCart=false }) => {
  const cartContext = useCart();

  const { addToCart, checkItem , removeItem} = cartContext;

    return (
        <Card sx={{ maxWidth: 335, boxShadow: 3, borderRadius: 2, minHeight: 450, position:'relative' }}>
        {!room.availability && <StyledBox>Unavailable Room</StyledBox>} 
        <CardMedia
          component="img"
          height="200"
          image={room.roomPhotoUrl}
          alt={room.roomType}
          sx={{
            objectFit: "cover",
          }}
        />
            <CardContent>
                   <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                      <Typography variant='h6' component={'h2'} >{room.roomType}</Typography>
                      <Typography variant='body1' component={'span'} color='red'>{room.price}$/night</Typography>
                    </Stack>
                   <Typography variant='subtitle1' color='textDisabled'>{room.capacityOfAdults} Adults , {room.capacityOfChildren} Children</Typography>
                   <Stack direction={'column'} padding={1}>
                    {room.roomAmenities.map((amenity) => (
                        <Typography variant='subtitle1'>{amenity.name}</Typography>
                       ))}
                    </Stack>
          

          {!inCart ?
            <Button type='button' variant='contained'
              onClick={() => addToCart(room)}
              disabled={checkItem(room)}>
              {checkItem(room) ? 'Added to Cart' : 'add to Cart'}</Button>
            :
            <Button type='button' variant='contained'
              onClick={() => removeItem(room)}
              color='error'
            >
            remove</Button> }
                </CardContent>
             </Card>
    )
}

export default Room;