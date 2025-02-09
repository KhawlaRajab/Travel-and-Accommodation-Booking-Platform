import { Box, Stack, Typography, styled } from "@mui/material";

const StyledBox = styled(Box)({
  marginTop: "30px",
  width: "100%",
  height: "150px",
  backgroundColor: "ButtonFace",
});

const Footer: React.FC = () => {
  return (
    <StyledBox>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingTop={8}
      >
        <Typography variant="body2">
          TravelZ the best platform to book hotel for your trip
        </Typography>
        <Typography variant="body2">@TravelZ 2025</Typography>
      </Stack>
    </StyledBox>
  );
};
export default Footer;
