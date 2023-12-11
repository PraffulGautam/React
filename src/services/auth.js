import { Navigate } from "react-router-dom";
import useToken from "./useToken"

const Auth = ({children}) => {
const {token, setToken} = useToken();
    if(token){
        return children;
    }
    return <Navigate to="/login"/>    
}

export default Auth;