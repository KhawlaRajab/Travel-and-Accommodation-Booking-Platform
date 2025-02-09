import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../pages/LoginPage/AuthContext";
import { Token } from "../utils/jwtDecode";

interface props {
  role: string;
}

const PrivateRoute: React.FC<props> = ({ role }) => {
  const { token } = useAuth();
  if (!token) return <Navigate to="/" />;

  const { userType } = Token(token);

  return role === userType ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
