import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap' 
import Header from './components/header/header.js'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./services/store.js";

export const App = () => { 
return <>
<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
   <Header/>
    <Container className="mt-3">
      <Outlet/>
    </Container>
   </PersistGate>
   </Provider>
  </>
}

export default App;