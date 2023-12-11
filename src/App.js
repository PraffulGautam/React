import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'
import {AuthProvider} from './services/authContext.js'
import Header from './components/header/header.js'

export const App = () => { 
return <>
<AuthProvider>
   <Header/>
   </AuthProvider>
    <Container className="mt-3">
      <Outlet/>
    </Container>
  </>
}

export default App;