import { useContext, createContext,ReactNode, useState } from "react";
import { authContextType } from "./loginType";

interface authProviderProps{
    children: ReactNode 
}

  

const AuthContext = createContext<authContextType>({token:'' ,
    setToken: () => {}});

const AuthProvider:React.FC<authProviderProps> = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    return <AuthContext.Provider value={{ token, setToken }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext); 
    return context;
  };
  
export default AuthProvider;