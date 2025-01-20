import { Box, Button, Checkbox, FormControlLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";


const Filter: React.FC = () => {
    return (
        <>
        <Stack direction={'column'} spacing={2} sx={{backgroundColor:'ghostwhite',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} paddingX={3}>

            <Typography variant="h6">Filter</Typography>
                <Box>
                    <Typography variant='body1' component={'p'} color='primary'>Price Range</Typography>
                </Box>
                <Box>
                   <Typography variant='body1' component={'p'} color='primary'>Amenities</Typography>
                   <Checkbox />
                 </Box>
                 <Box>
                   <Typography variant='body1' component={'p'} color='primary'>sort by</Typography>
                    <Stack>
                     <RadioGroup
                     row
                     aria-labelledby="demo-row-radio-buttons-group-label"
                     name="row-radio-buttons-group"
                      >
                      <FormControlLabel value="price" control={<Radio />} label="Price" />
                      <FormControlLabel value="rate" control={<Radio />} label="Rate" />
                      </RadioGroup>
                    </Stack>
            </Box>
            <Button type='button' variant="contained">apply</Button>
            </Stack></>
    )
}

export default Filter;