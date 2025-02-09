import { useQuery } from "react-query";
import { gallery } from "./type";
import { getGallery } from "./API/Api";
import { Box, CircularProgress, ImageList, ImageListItem } from "@mui/material";
import { useState } from "react";
import FullScreenPhoto from "./FullScreenPhoto";

const Gallery: React.FC<{ hotelId: number }> = ({ hotelId }) => {
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const { data, error, isLoading } = useQuery<gallery[], Error>(
    ["getGallery", hotelId],
    () => getGallery(hotelId),
    {
      enabled: !!hotelId,
    }
  );

  if (isLoading) return <CircularProgress />;
  if (error) return <p>{error.message}</p>;
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ImageList
        sx={{ width: 600, height: "auto" }}
        cols={3}
        rowHeight={160}
        key={hotelId}
      >
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
      {photoUrl && (
        <FullScreenPhoto url={photoUrl} close={() => setPhotoUrl("")} />
      )}
    </Box>
  );
};

export default Gallery;
