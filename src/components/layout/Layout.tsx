import { Outlet } from "react-router-dom";
import Navbar from "../../pages/AdminPages/components/Navbar";
import Footer from "../Footer";
import UserNavbar from "../Navbar";

const Layout: React.FC<{ userType: string }> = ({ userType }) => {
  return (
    <>
      {userType === "Admin" ? <Navbar /> : <UserNavbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
