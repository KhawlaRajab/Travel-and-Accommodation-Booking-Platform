import { Box, Button, Checkbox, CircularProgress, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Amenities, ComponentPropsType } from "./type";
import { useQuery } from "react-query";
import { getAmenities } from "./Api/Api";



const Filter: React.FC<ComponentPropsType> = ({data:hotels,onFilter}) => {
    const [minPrice, setMinPrice] = useState<number>(100);
    const [maxPrice, setMaxPrice] = useState<number>(999);
    const [Amenities, setAmenities] = useState<Amenities[]>([]);
    const [sortBy, setSortBy] = useState<string>('');
    
    const {data , isLoading , error}= useQuery<Amenities[],Error>(
        ['getAmenities'],
           getAmenities,
    );


    const handleAmenityChange = (amenity: Amenities) => {
        setAmenities((Amenities) =>
          Amenities?.includes(amenity)
            ? Amenities.filter((item) => item !== amenity)
            : [...Amenities, amenity]
        );
    };
    
    const applyFilter = () => {
        const filteredData = hotels?.filter(hotel => { 
            const hotelAmenityNames = new Set(hotel.amenities.map(a => a.name));
            return hotel.roomPrice >= minPrice &&
                hotel.roomPrice <= maxPrice &&
            (Amenities.length === 0 || Amenities.every(amenity =>
                hotelAmenityNames.has(amenity.name)
            ));
        }).sort((first, sec) => {
            if (sortBy === 'price') return first.roomPrice - sec.roomPrice;
            else if (sortBy === 'rate') return sec.starRating - first.starRating;
            return 0;
        })
        onFilter(filteredData);
    }
    

    return (
        <Stack direction={'column'} gap={2} sx={{backgroundColor:'ghostwhite',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} paddingX={3}>

            <Typography variant="h6" color='primary'>Filter</Typography>
                <Box>
                    <Typography variant='body1' component={'p'} color='primary'>Price Range </Typography>
                    <Stack direction={'row'} alignItems={'center'} spacing={2} paddingTop={2}>
                    <TextField 
                       label="Min" 
                       type="number" 
                       value={minPrice} 
                       onChange={(e) => setMinPrice(Number(e.target.value))} 
                       size="small"
                        sx={{width:'80px'}}
                        />
                    <Typography variant='body2' component={'span'} > - </Typography>   
                    <TextField 
                      label="Max"      
                      type="number" 
                      value={maxPrice} 
                      onChange={(e) => setMaxPrice(Number(e.target.value))} 
                      size="small"
                      sx={{ width: '80px' }}   
                           
                     />
                    </Stack>
                </Box>

                <Box>
                   <Typography variant='body1' component={'p'} color='primary'>Amenities</Typography>
                   {error && (<Typography variant="body1">{error?.message}</Typography>)}
                    {isLoading &&(<CircularProgress /> ) }
                   <Stack direction={'column'} spacing={1}>
                     {data?.map((amenity) => (
                      <FormControlLabel
                       control={
                        <Checkbox
                         checked={Amenities?.includes(amenity)}
                         onChange={() => handleAmenityChange(amenity)}
                       />
                       }
                       label={amenity.name}
                      />
                     ))}
                    </Stack>
                 </Box>
                 <Box>
                   <Typography variant='body1' component={'p'} color='primary'>sort by</Typography>
                    <Stack>
                     <RadioGroup
                        row
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}>
                      <FormControlLabel value="price" control={<Radio />} label="Price" />
                      <FormControlLabel value="rate" control={<Radio />} label="Rate" />
                      </RadioGroup>
                    </Stack>
            </Box>
            <Button type='button' variant="contained" sx={{width:'150px',margin:'auto',my:'10px'}} onClick={applyFilter}>Apply</Button>
            </Stack>
    )
}

export default Filter;