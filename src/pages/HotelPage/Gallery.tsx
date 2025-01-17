import { useQuery } from "react-query";
import { gallery } from "./type";
import { getGallery } from "./API/Api";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { useState } from "react";
import FullScreenPhoto from "./FullScreenPhoto";
import { useParams } from "react-router-dom";

const hotelId = 1;
const Gallery: React.FC = () => {
  // const { hotelId } = useParams();
  const [photoUrl, setPhotoUrl] = useState<string>('');  
  const { data, error, isLoading } = useQuery<gallery[], Error>(
    ["getGallery", hotelId],
    () => getGallery(hotelId),
    {
      enabled: !!hotelId,
    }
  );

 if(isLoading) return <p>Loading...</p>
 if(error) return <p>error...</p>
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ImageList sx={{ width: 600, height: 'auto' }} cols={3} rowHeight={160} key={hotelId}>
       
        {data!.map((photo) => (
            <ImageListItem key={photo.id}>
              <img
               srcSet={`${photo.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
               src={`${photo.url}?w=164&h=164&fit=crop&auto=format`}
               alt={`Gallery Image ${photo.id}`}
               loading="lazy"
               onClick={() => setPhotoUrl(photo.url)}
              />
            </ImageListItem>
          ))}
      </ImageList>
      {photoUrl && <FullScreenPhoto url={photoUrl} close={() => setPhotoUrl("")} />} 
    </Box>
  );
};

export default Gallery;
