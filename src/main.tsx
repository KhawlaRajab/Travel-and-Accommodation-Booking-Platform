import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthProvider from "./pages/LoginPage/AuthContext.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { SearchProvider } from "./components/Searchbar/SearchContext.tsx";
import { CartProvider } from "./pages/CheckoutPage/CartContext.tsx";

const queryClient = new QueryClient();

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </ThemeProvider>
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
