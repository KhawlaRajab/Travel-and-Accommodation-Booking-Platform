import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../pages/LoginPage/AuthContext";
import { Token } from "../pages/jwtDecode";


interface props{
role:string
}

const PrivateRoute: React.FC<props> = ({ role }) => {
    const { token } = useAuth();
    const location = useLocation();
    if (!token)
    return <Navigate to="/" state={{ from: location }} replace />
        
    const {userType} =Token(token);
    
    return role === userType? (
        <Outlet />
    ) : (
        <Navigate to="/" state={{ from: location }} replace />
    );
}
export default PrivateRoute;