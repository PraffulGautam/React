import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, BrowserRouter, Route} from "react-router-dom";
import App from './App';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './routes/Home';
import AddressDetails from './routes/AddressDetails';
import Products from "./routes/Products";
import Login from "./routes/Login"
import Signup from "./routes/Signup" 
import reportWebVitals from './reportWebVitals'; 
import Auth from './services/auth'; 

const root = createRoot(document.getElementById('root'));
let auth = true, isAuthenticated = true;

root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} >
          <Route
              index
              element={
                  <>
                      <h2>Welcome in your account.</h2>
                      <p>Please use the navigation above to see Address book or your orders.</p>
                  </>
              }
          />
          <Route path="products" element={<Auth><Products/></Auth>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
      </Route> 

      <Route
          path="*"
          element={
              <main>
                  <p style={{padding: '30px', textAlign: 'center'}}>There's nothing here!</p>
              </main>
          }
      />
  </Routes>
</BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
