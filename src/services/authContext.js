// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    console.log(userToken);
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };
 const removetToken = () => {
    localStorage.removeItem("token");
    setToken(getToken);
 } 

  const signin = (token) => {
    setToken(token) 
  };

  const logout = () => {
    // setLoggedIn(false);
    removetToken();
  };

  return (
    <AuthContext.Provider value={{ token, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
