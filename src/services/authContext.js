// AuthContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false, 
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    // handle other actions
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Retrieve authentication state from local storage on component mount
    const storedState = JSON.parse(localStorage.getItem('authState'));
    if (storedState) {
      dispatch({ type: 'HYDRATE_STATE', payload: storedState });
    }
  }, []);

  useEffect(() => {
    // Store authentication state in local storage whenever it changes
    localStorage.setItem('authState', JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
