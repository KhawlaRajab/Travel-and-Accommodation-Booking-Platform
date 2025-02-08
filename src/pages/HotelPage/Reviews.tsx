import { Box, Button, CircularProgress, Rating, Stack, Typography } from "@mui/material";
import { review } from "./type";
import { useQuery } from "react-query";
import { getReviews } from "./API/Api";
import { useState } from "react";


const Reviews:React.FC<{hotelId:number}> = ({hotelId})=> {
    const [index, setIndex] = useState<number>(3);
    const { data, isLoading, error } = useQuery<review[], Error>(
        ['getReview', hotelId],
        () => getReviews(hotelId),
        {
          enabled: !!hotelId,
        }
    );
    
    const loadMore = () => {
        if (data && data?.length > index + 3)
            setIndex(data?.length);
        else
        setIndex(index + 3);
    }

    const showLess = () => {
        setIndex(3);
    }
    


    return (
        <Box marginTop={2} padding={1} sx={{backgroundColor:'ghostwhite',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <Typography variant="h5">Reviews</Typography>
            {error && (<Typography variant="body1">{error?.message}</Typography>)}
            {isLoading &&(<CircularProgress /> ) }
            <Box paddingBottom={1} height={'490px'} sx={{overflowY: "auto"}}  padding={1} >
                {data?.slice(0, index).map((review) => (
                
              <Stack direction={'column'} key={review.reviewId} sx={{boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'}} padding={1} marginBottom={2}>
                <Typography variant="h6">{review.customerName}</Typography>
                <Rating name="read-only" value={review.rating} readOnly />
                <Typography variant="subtitle1">{review.description}</Typography>
                </Stack>))}

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                {(data && index < data.length)? 
                    <Button onClick={loadMore}>
                        Load More
                        </Button> :
                         <Button onClick={showLess}>
                         Show Less
                     </Button>
               } </Box>
            </Box>
        </Box>
    )
}

export default Reviews;