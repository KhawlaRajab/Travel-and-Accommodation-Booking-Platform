import {
  Stack,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
} from "@mui/material";
import { ResultType } from "./type";
import { useNavigate } from "react-router-dom";

interface ResultProps {
  searchResult: ResultType;
}

const Hotel: React.FC<ResultProps> = ({ searchResult }) => {
  const navigate = useNavigate();
  return (
    <Stack direction={{ sm: "column", md: "row" }} spacing={1}>
      <CardMedia
        component="img"
        height="200"
        width="100"
        image={searchResult.roomPhotoUrl}
        alt={searchResult.hotelName}
        sx={{
          height: "200px",
          width: "300px",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <Typography variant="h6" color="primary">
            {searchResult.hotelName}
          </Typography>
          <Typography variant="subtitle1">{searchResult.roomType}</Typography>
        </Stack>
        <Typography variant="body2" color="textDisabled">
          {searchResult.cityName}
        </Typography>
        <Stack
          direction={"row"}
          spacing={4}
          alignItems={"center"}
          justifyItems={"center"}
          paddingY={1}
        >
          <Typography variant="subtitle1">
            <Rating name="read-only" value={searchResult.starRating} readOnly />
          </Typography>
          <Typography variant="subtitle1">{searchResult.roomPrice}$</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          {searchResult.amenities.map((amenity) => (
            <Typography variant="subtitle1" component={"span"}>
              {amenity.name}
            </Typography>
          ))}
        </Stack>
        <Button
          type="button"
          variant="contained"
          sx={{ mt: "10px" }}
          onClick={() => navigate(`/hotel/${searchResult.hotelId}`)}
        >
          View Details
        </Button>
      </CardContent>
    </Stack>
  );
};

export default Hotel;
