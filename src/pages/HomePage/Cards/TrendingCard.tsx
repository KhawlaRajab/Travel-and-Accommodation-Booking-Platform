import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import { trend } from "./type";

interface trendProps {
  trending: trend;
}

const StyledTypography = styled(Typography)({
  position: "absolute",
  top: "10px",
  left: "10px",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  padding: "5px",
  borderRadius: "5px",
});

const TrendingCard: React.FC<trendProps> = ({ trending }) => {
  return (
    <Card
      sx={{
        minHeight: "350px",
        position: "relative",
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={trending.thumbnailUrl}
        alt={trending.cityName}
        sx={{
          objectFit: "cover",
        }}
      />
      <StyledTypography variant="h6">{trending.cityName}</StyledTypography>
      <CardContent>
        <Typography>
          {trending.description.split(" ").slice(0, 20).join(" ") + "..."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TrendingCard;
