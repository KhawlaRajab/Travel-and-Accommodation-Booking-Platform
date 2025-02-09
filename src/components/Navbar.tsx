import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../pages/CheckoutPage/useCart";

const StyledIconButton = styled(IconButton)({
  "&:focus": {
    outline: "none",
  },
});

const UserNavbar: React.FC = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const handelClick = (page: string) => {
    toggleMenu();
    navigate(page);
  };

  const logout = (page: string) => {
    localStorage.removeItem("token");
    navigate(page);
  };

  const badgeContent = cartItems.length;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="span"
              sx={{ paddingRight: "130px" }}
            >
              TravelZ
            </Typography>
            <Button color="inherit" onClick={() => navigate("/home")}>
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate("/SearchResultPage")}
            >
              Search
            </Button>
          </Box>

          <Box>
            <StyledIconButton onClick={() => navigate("/Cart")}>
              <Badge color="error" badgeContent={badgeContent} showZero>
                <ShoppingCartIcon />
              </Badge>
            </StyledIconButton>
            <Button color="inherit" onClick={() => logout("/")}>
              logout
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <Typography variant="h6" component="span">
            TravelZ
          </Typography>
          <StyledIconButton edge="end" onClick={toggleMenu}>
            <MenuIcon sx={{ color: "white", fontSize: "30px" }} />
          </StyledIconButton>
          <Menu
            open={open}
            onClick={toggleMenu}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            sx={{
              "& .MuiMenu-paper": {
                margin: 0,
                padding: 0,
                width: "100%",
              },
              top: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              <MenuItem>
                <StyledIconButton onClick={() => handelClick("/Cart")}>
                  <Badge color="error" badgeContent={badgeContent} showZero>
                    <ShoppingCartIcon />
                  </Badge>
                </StyledIconButton>
              </MenuItem>
              <MenuItem onClick={() => handelClick("/home")}>Home</MenuItem>
              <MenuItem onClick={() => handelClick("/SearchResultPage")}>
                Search
              </MenuItem>
              <MenuItem onClick={() => handelClick("/")}>Logout</MenuItem>
            </Box>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserNavbar;
