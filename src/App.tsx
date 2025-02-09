import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import HotelPage from "./pages/HotelPage/HotelPage";
import SearchResultPage from "./pages/SerachResultPage/SearchPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./routes/PrivateRoutes";
import Cart from "./pages/CheckoutPage/Cart";
import ConfirmationDetails from "./pages/CheckoutPage/ConfirmationDetails";
import Cities from "./pages/AdminPages/Cities/Cities";
import Hotels from "./pages/AdminPages/Hotels/Hotels";
import Rooms from "./pages/AdminPages/Rooms/Rooms";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<PrivateRoute role="User" />}>
            <Route element={<Layout userType="User" />}>
              <Route path="/home" element={<Home />} />
              <Route path="/SearchResultPage" element={<SearchResultPage />} />
              <Route path="/hotel/:id" element={<HotelPage />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Confirmation" element={<ConfirmationDetails />} />
            </Route>
          </Route>

          <Route element={<PrivateRoute role="Admin" />}>
            <Route element={<Layout userType='Admin' />}>
              <Route path="/Cities" element={<Cities />} />
              <Route path="/Hotels" element={<Hotels />} />
              <Route path="/Rooms" element={<Rooms />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
