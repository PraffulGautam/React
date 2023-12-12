import axios from "axios"; 
import { Navigate } from "react-router-dom";
import {api} from "./api";

export const loginSuccess = (token) => ({
    type: 'LOGIN_SUCCESS',
    payload: { token },
  });

  export const logout = (dispatch) => {
    return dispatch({type: "LOGOUT"})
  }
  
  export const login = ({email, password, setResp}) => async (dispatch) => { 
     api.post("/user/signin", {email, password})
        .then(res => {
        console.log(res); 
         
        <Navigate to="/products"/>   
        dispatch(loginSuccess(res.data.token));

        }) 
        .catch(err => { 
        setResp({message: "Invalid Credetials", type: "error"})
        })
  
 
  };