import headerBackground from "../assets/airplane-path-in-dashed-line-shape-on-world-map-route-of-plane-with-world-map-isolated-on-white-background-vector-RWJ18H.jpg";
import { Box, Button, Typography, styled } from "@mui/material";
import SearchBar from "./Searchbar/SearchBar";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)({
  position: "relative",
  width: "100%",
  height: "500px",
  backgroundImage: `url(${headerBackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textAlign: "center",
});

const OverlayBox = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
});

const SearchBarContainer = styled(Box)({
  position: "relative",
  top: "-50px",
  zIndex: 2,
});

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledBox>
        <OverlayBox />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Find Your Perfect Stay
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Search for hotels and rooms in top destinations worldwide
          </Typography>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => navigate("/SearchResultPage")}
          >
            Search Hotels
          </Button>
        </Box>
      </StyledBox>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
    </>
  );
};

export default Header;
